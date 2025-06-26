import api from '@/api';
import type { Receivable } from '@/types/receivables';
import type { OmieReceivablesResponse, OmieClientResponse } from '@/types/omie';
import API_CONFIG, { isMockMode } from '@/config/api';
import * as mockActions from './mockActions';
import axios from 'axios';
// Pagination interface
export interface PaginationParams {
  pagina?: number;
  registros_por_pagina?: number;
}

export interface PaginatedReceivablesResponse {
  receivables: Receivable[];
  pagination: {
    currentPage: number;
    totalPages: number;
    recordsPerPage: number;
    totalRecords: number;
  };
}

// Real API functions
async function getReceivablesReal(params: PaginationParams = {}): Promise<PaginatedReceivablesResponse> {
  try {
    const pagina = params.pagina || 1;
    const registros_por_pagina = params.registros_por_pagina || 50;
    
    console.log(pagina, registros_por_pagina);
    console.log(API_CONFIG.NODE_ENV);
    // Use your local backend URL instead of the Render URL
    const baseUrl = API_CONFIG.NODE_ENV === 'production' 
      ? 'https://api-r4b9.onrender.com'
      : 'http://localhost:3001';
    
    const response = await axios.get<OmieReceivablesResponse>(
      `${baseUrl}/api/omie/receivables?pagina=${pagina}&registros_por_pagina=${registros_por_pagina}`
    );

    // Transformar dados do Omie para o formato da aplicação
    const receivables: Receivable[] = response.data.conta_receber_cadastro?.map(item => {
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
        email: 'marcelo.jean@brandlovers.ai'
      };
    }) || [];

    return {
      receivables,
      pagination: {
        currentPage: response.data.pagina || pagina,
        totalPages: response.data.total_de_paginas || 1,
        recordsPerPage: response.data.registros || registros_por_pagina,
        totalRecords: response.data.total_de_registros || 0
      }
    };
  } catch (error) {
    console.error('Erro ao buscar recebíveis:', error);
    throw error;
  }
}

async function getClientInfoReal(codigoCliente: number) {
  try {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://your-backend-url.vercel.app' // Replace with your deployed backend URL
      : 'http://localhost:3001';
    
    const response = await api.post<{ success: boolean; data: OmieClientResponse }>(
      `${baseUrl}/api/omie/client`,
      {
        codigo_cliente_omie: codigoCliente
      }
    );

    if (response.data.success && response.data.data.clientes_cadastro && response.data.data.clientes_cadastro.length > 0) {
      const client = response.data.data.clientes_cadastro[0];
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

async function getReceivablesWithClientInfoReal(params: PaginationParams = {}): Promise<PaginatedReceivablesResponse> {
  try {
    const result = await getReceivablesReal(params);
    
    // Buscar informações dos clientes para os primeiros 10 recebíveis
    const receivablesWithClientInfo = await Promise.all(
      result.receivables.slice(0, 10).map(async (receivable) => {
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

    return {
      ...result,
      receivables: receivablesWithClientInfo
    };
  } catch (error) {
    console.error('Erro ao buscar recebíveis com informações do cliente:', error);
    throw error;
  }
}

// Export functions that use either real or mock API based on configuration
export async function getReceivables(params: PaginationParams = {}) {
  if (isMockMode()) {
    return mockActions.getReceivables();
  }
  return getReceivablesReal(params);
}

export async function getClientInfo(codigoCliente: number) {
  if (isMockMode()) {
    return mockActions.getClientInfo(codigoCliente);
  }
  return getClientInfoReal(codigoCliente);
}

export async function getReceivablesWithClientInfo(params: PaginationParams = {}) {
    if (isMockMode()) {
      return mockActions.getReceivablesWithClientInfo();
    }
  return getReceivablesWithClientInfoReal(params);
}