import api from '@/api';
import endpoints from '@/api/endpoints';
import type { Receivable } from '@/types/receivables';
import type { OmieReceivablesResponse, OmieClientResponse } from '@/types/omie';

export async function getReceivables() {
  try {
    const response = await api.post<OmieReceivablesResponse>(
      endpoints.omie.getReceivables,
      {
        call: 'ListarContasReceber',
        param: [{ 
          pagina: 1, 
          registros_por_pagina: 100, 
          apenas_importado_api: 'N' 
        }],
        app_key: process.env.OMIE_APP_KEY,
        app_secret: process.env.OMIE_APP_SECRET
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
        cliente: `Cliente ${item.codigo_cliente_fornecedor}`,
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

    return receivables;
  } catch (error) {
    console.error('Erro ao buscar recebíveis:', error);
    throw error;
  }
}

export async function getClientInfo(codigoCliente: number) {
  try {
    const response = await api.get<OmieClientResponse>(
      "https://api-r4b9.onrender.com/api/omie/receivables",
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