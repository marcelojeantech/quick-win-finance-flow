import api from '@/api';
import endpoints from '@/api/endpoints';
import type { Receivable } from '@/types/receivables';
import type { OmieReceivablesResponse, OmieClientResponse } from '@/types/omie';
import { isMockMode } from '@/config/api';
import * as mockActions from './mockActions';

// Real API functions
async function getReceivablesReal() {
  try {
    const response = await api.get<OmieReceivablesResponse>(
      "https://api-r4b9.onrender.com/api/omie/receivables",
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Access-Control-Allow-Headers': '*'
        }
      }
    );

    // Transformar dados do Omie para o formato da aplicação
    const receivables: Receivable[] = response.data.conta_receber_cadastro.map(item => {
      const vencimento = new Date(item.data_vencimento.split('/').reverse().join('-'));
      const hoje = new Date();
      const diasAtraso = item.status_titulo === 'ATRASADO' 
        ? Math.floor((hoje.getTime() - vencimento.getTime()) / (1000 * 60 * 60 * 24))
        : undefined;

      let situacao: 'Em aberto' | 'Pago' | 'Atrasado';
      switch (item.status_titulo) {
        case 'RECEBIDO':
          situacao = 'Pago';
          break;
        case 'ATRASADO':
          situacao = 'Atrasado';
          break;
        default:
          situacao = 'Em aberto';
      }

      return {
        id: item.codigo_lancamento_omie.toString(),
        cliente: `Cliente ${item.codigo_cliente_fornecedor}`, // Será atualizado com dados do cliente
        valor: item.valor_documento,
        vencimento: item.data_vencimento.split('/').reverse().join('-'),
        situacao,
        linkNF: `https://nf.omie.com.br/${item.codigo_lancamento_omie}`,
        ultimaAcao: `Registrado em ${item.data_registro}`,
        responsavel: 'Sistema Omie',
        diasAtraso,
        codigoCliente: item.codigo_cliente_fornecedor,
      };
    });

    return { receivables };
  } catch (error) {
    console.error('Erro ao buscar recebíveis:', error);
    throw error;
  }
}

async function getClientInfoReal(codigoCliente: number) {
  try {
    const response = await api.post<OmieClientResponse>(
      endpoints.omie.getClient,
      {
        call: 'ConsultarCliente',
        param: [{ 
          codigo_cliente_omie: codigoCliente
        }],
        app_key: process.env.OMIE_APP_KEY,
        app_secret: process.env.OMIE_APP_SECRET
      }
    );

    if (response.data.clientes_cadastro && response.data.clientes_cadastro.length > 0) {
      const client = response.data.clientes_cadastro[0];
      return {
        nome: client.nome_fantasia || client.razao_social,
        email: client.email,
        telefone: client.telefone1,
        cnpjCpf: client.cnpj_cpf
      };
    }
    
    return null;
  } catch (error) {
    console.error('Erro ao buscar cliente:', error);
    return null;
  }
}

async function getReceivablesWithClientInfoReal() {
  try {
    const { receivables } = await getReceivablesReal();
    
    // Buscar informações dos clientes para os primeiros 10 recebíveis
    const receivablesWithClientInfo = await Promise.all(
      receivables.slice(0, 10).map(async (receivable) => {
        if (receivable.codigoCliente) {
          const clientInfo = await getClientInfoReal(receivable.codigoCliente);
          if (clientInfo) {
            return {
              ...receivable,
              cliente: clientInfo.nome,
              email: clientInfo.email,
              telefone: clientInfo.telefone,
            };
          }
        }
        return receivable;
      })
    );

    return { receivables: receivablesWithClientInfo };
  } catch (error) {
    console.error('Erro ao buscar recebíveis com informações do cliente:', error);
    throw error;
  }
}

// Export functions that use either real or mock API based on configuration
export async function getReceivables() {
  if (isMockMode()) {
    return mockActions.getReceivables();
  }
  return getReceivablesReal();
}

export async function getClientInfo(codigoCliente: number) {
  if (isMockMode()) {
    return mockActions.getClientInfo(codigoCliente);
  }
  return getClientInfoReal(codigoCliente);
}

export async function getReceivablesWithClientInfo() {
  if (isMockMode()) {
    return mockActions.getReceivablesWithClientInfo();
  }
  return getReceivablesWithClientInfoReal();
}