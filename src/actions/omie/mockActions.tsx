import mockOmieApi from '@/api/mockOmie';
import type { Receivable } from '@/types/receivables';
import type { OmieReceivablesResponse, OmieClientResponse } from '@/types/omie';

// Interface para compatibilidade com paginação
export interface PaginatedReceivablesResponse {
  receivables: Receivable[];
  pagination: {
    currentPage: number;
    totalPages: number;
    recordsPerPage: number;
    totalRecords: number;
  };
}

export async function getReceivables(): Promise<PaginatedReceivablesResponse> {
  try {
    const response = await mockOmieApi.getReceivables();

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
        linkNF: `https://nf.omie.com.br/${item.numero_documento_fiscal}`,
        ultimaAcao: `Registrado em ${item.data_registro}`,
        responsavel: 'Sistema Omie',
        diasAtraso,
        codigoCliente: item.codigo_cliente_fornecedor,
      };
    });

    // Retornar no formato paginado para compatibilidade
    return {
      receivables,
      pagination: {
        currentPage: 1,
        totalPages: 1,
        recordsPerPage: receivables.length,
        totalRecords: receivables.length
      }
    };
  } catch (error) {
    console.error('Erro ao buscar recebíveis:', error);
    throw error;
  }
}

export async function getClientInfo(codigoCliente: number) {
  try {
    const response = await mockOmieApi.getClient(codigoCliente);

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

export async function getReceivablesWithClientInfo(): Promise<PaginatedReceivablesResponse> {
  try {
    const result = await getReceivables();
    
    // Buscar informações dos clientes para os primeiros 10 recebíveis
    const receivablesWithClientInfo = await Promise.all(
      result.receivables.slice(0, 10).map(async (receivable) => {
        if (receivable.codigoCliente) {
          const clientInfo = await getClientInfo(receivable.codigoCliente);
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