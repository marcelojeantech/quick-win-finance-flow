import type { OmieReceivablesResponse, OmieClientResponse } from '@/types/omie';

// Mock data based on the provided Omie response
const mockOmieReceivablesResponse: OmieReceivablesResponse = {
  "pagina": 1,
  "total_de_paginas": 34,
  "registros": 100,
  "total_de_registros": 3310,
  "conta_receber_cadastro": [
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 7.7
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227116,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594400,
      "codigo_tipo_documento": "99999",
      "data_previsao": "20/04/2023",
      "data_registro": "31/03/2023",
      "data_vencimento": "20/04/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "13/06/2023",
        "dInc": "24/04/2023",
        "hAlt": "18:07:15",
        "hInc": "15:07:00",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "RECEBIDO",
      "tipo_agrupamento": "I",
      "valor_documento": 7.7
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 8.8
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227212,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594405,
      "codigo_tipo_documento": "99999",
      "data_previsao": "20/04/2023",
      "data_registro": "31/03/2023",
      "data_vencimento": "20/04/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:01",
        "hInc": "15:07:01",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 8.8
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 12.05
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227048,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594408,
      "codigo_tipo_documento": "99999",
      "data_previsao": "20/04/2023",
      "data_registro": "31/03/2023",
      "data_vencimento": "20/04/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:01",
        "hInc": "15:07:01",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 12.05
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 16.1
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227141,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594411,
      "codigo_tipo_documento": "99999",
      "data_previsao": "30/01/2024",
      "data_registro": "28/02/2023",
      "data_vencimento": "10/03/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "05/06/2025",
        "dInc": "24/04/2023",
        "hAlt": "19:30:25",
        "hInc": "15:07:01",
        "uAlt": "P000842881",
        "uInc": "P000568574"
      },
      "status_titulo": "RECEBIDO",
      "tipo_agrupamento": "I",
      "valor_documento": 16.1
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 17.4
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227021,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594414,
      "codigo_tipo_documento": "99999",
      "data_previsao": "20/04/2023",
      "data_registro": "31/03/2023",
      "data_vencimento": "20/04/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:01",
        "hInc": "15:07:01",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 17.4
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 17.66
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227045,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594417,
      "codigo_tipo_documento": "99999",
      "data_previsao": "22/02/2023",
      "data_registro": "31/01/2023",
      "data_vencimento": "18/02/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:01",
        "hInc": "15:07:01",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 17.66
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 23.89
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227045,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594422,
      "codigo_tipo_documento": "99999",
      "data_previsao": "10/03/2023",
      "data_registro": "28/02/2023",
      "data_vencimento": "10/03/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:01",
        "hInc": "15:07:01",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 23.89
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 30.04
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227090,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594424,
      "codigo_tipo_documento": "99999",
      "data_previsao": "20/04/2023",
      "data_registro": "31/03/2023",
      "data_vencimento": "20/04/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:01",
        "hInc": "15:07:01",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 30.04
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 799
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227093,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594429,
      "codigo_tipo_documento": "99999",
      "data_previsao": "12/04/2023",
      "data_registro": "31/01/2023",
      "data_vencimento": "12/04/2023",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "27/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "17:07:19",
        "hInc": "15:07:02",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "RECEBIDO",
      "tipo_agrupamento": "I",
      "valor_documento": 799
    },
    {
      "boleto": {
        "cGerado": "",
        "cNumBancario": "",
        "cNumBoleto": "",
        "dDtEmBol": "",
        "nPerJuros": 0,
        "nPerMulta": 0
      },
      "categorias": [
        {
          "codigo_categoria": "1.04.98",
          "percentual": 100,
          "valor": 40.38
        }
      ],
      "codigo_categoria": "1.04.98",
      "codigo_cliente_fornecedor": 3396227045,
      "codigo_lancamento_integracao": "",
      "codigo_lancamento_omie": 3396594432,
      "codigo_tipo_documento": "99999",
      "data_previsao": "31/01/2022",
      "data_registro": "31/12/2022",
      "data_vencimento": "30/01/2022",
      "distribuicao": [],
      "id_conta_corrente": 3392011048,
      "id_origem": "MANR",
      "info": {
        "cImpAPI": "N",
        "dAlt": "24/04/2023",
        "dInc": "24/04/2023",
        "hAlt": "15:07:02",
        "hInc": "15:07:02",
        "uAlt": "P000568574",
        "uInc": "P000568574"
      },
      "status_titulo": "ATRASADO",
      "tipo_agrupamento": "I",
      "valor_documento": 40.38
    }
  ]
};

// Mock client data
const mockOmieClientResponse: OmieClientResponse = {
  "pagina": 1,
  "total_de_paginas": 1,
  "registros": 1,
  "total_de_registros": 1,
  "clientes_cadastro": [
    {
      "codigo_cliente_omie": 3396227116,
      "codigo_cliente_integracao": "CLI001",
      "razao_social": "Empresa Teste LTDA",
      "nome_fantasia": "Empresa Teste",
      "cnpj_cpf": "12.345.678/0001-90",
      "email": "contato@empresateste.com.br",
      "telefone1": "(11) 99999-9999",
      "telefone2": "",
      "endereco": "Rua das Flores",
      "endereco_numero": "123",
      "complemento": "Sala 1",
      "bairro": "Centro",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "01234-567",
      "codigo_pais": "BR",
      "nome_pais": "Brasil",
      "codigo_ibge_municipio": "3550308",
      "valor_limite_credito": 10000,
      "bloquear_faturamento": "N",
      "recomendacoes": "",
      "obs_detalhadas": "",
      "pessoa_fisica": "N",
      "exterior": "N",
      "logradouro": "Rua das Flores",
      "importado_api": "N",
      "bloqueado": "N",
      "cidade_ibge": "3550308",
      "valor_limite_credito_adicional": 0,
      "bloquear_exclusao": "N",
      "informacao_adicional": "",
      "inativo": "N",
      "ddd_telefone1": "11",
      "ddd_telefone2": "",
      "tags": [],
      "enderecoEntrega": {
        "endereco": "Rua das Flores",
        "endereco_numero": "123",
        "complemento": "Sala 1",
        "bairro": "Centro",
        "cidade": "São Paulo",
        "estado": "SP",
        "cep": "01234-567",
        "codigo_pais": "BR",
        "nome_pais": "Brasil",
        "codigo_ibge_municipio": "3550308",
        "logradouro": "Rua das Flores",
        "cidade_ibge": "3550308"
      },
      "nif": "",
      "inscricao_municipal": "",
      "inscricao_estadual": "",
      "inscricao_suframa": "",
      "optante_simples_nacional": "N",
      "tipo_atividade": "S",
      "cnae": "",
      "produto": "",
      "setor_codigo": "",
      "setor_descricao": "",
      "data_alteracao": "24/04/2023",
      "hora_alteracao": "15:07:00",
      "usuario_alteracao": "P000568574",
      "data_inclusao": "24/04/2023",
      "hora_inclusao": "15:07:00",
      "usuario_inclusao": "P000568574",
      "sincronizar": "N",
      "id_origem": "MANR",
      "operacao": "I"
    }
  ]
};

// Mock API client that simulates the Omie API responses
export const mockOmieApi = {
  // Mock getReceivables function
  getReceivables: async (): Promise<{ data: OmieReceivablesResponse }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      data: mockOmieReceivablesResponse
    };
  },

  // Mock getClient function
  getClient: async (codigoCliente: number): Promise<{ data: OmieClientResponse }> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Return mock client data for any client code
    return {
      data: {
        ...mockOmieClientResponse,
        clientes_cadastro: [
          {
            ...mockOmieClientResponse.clientes_cadastro[0],
            codigo_cliente_omie: codigoCliente,
            nome_fantasia: `Cliente ${codigoCliente}`,
            razao_social: `Empresa ${codigoCliente} LTDA`,
            email: `cliente${codigoCliente}@exemplo.com.br`,
            telefone1: `(11) ${String(codigoCliente).slice(-8)}`
          }
        ]
      }
    };
  }
};

export default mockOmieApi; 