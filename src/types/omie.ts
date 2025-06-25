export interface OmieReceivable {
  boleto: {
    cGerado: string;
    cNumBancario: string;
    cNumBoleto: string;
    dDtEmBol: string;
    nPerJuros: number;
    nPerMulta: number;
  };
  categorias: Array<{
    codigo_categoria: string;
    percentual: number;
    valor: number;
  }>;
  codigo_categoria: string;
  codigo_cliente_fornecedor: number;
  codigo_lancamento_integracao: string;
  codigo_lancamento_omie: number;
  codigo_tipo_documento: string;
  data_previsao: string;
  data_registro: string;
  data_vencimento: string;
  distribuicao: any[];
  id_conta_corrente: number;
  id_origem: string;
  info: {
    cImpAPI: string;
    dAlt: string;
    dInc: string;
    hAlt: string;
    hInc: string;
    uAlt: string;
    uInc: string;
  };
  status_titulo: 'RECEBIDO' | 'ATRASADO' | 'A_RECEBER';
  tipo_agrupamento: string;
  valor_documento: number;
  bloqueado?: string;
  bloquear_baixa?: string;
  data_emissao?: string;
  numero_parcela?: string;
  retem_cofins?: string;
  retem_csll?: string;
  retem_ir?: string;
  retem_pis?: string;
}

export interface OmieReceivablesResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  conta_receber_cadastro: OmieReceivable[];
}

export interface OmieClient {
  codigo_cliente_omie: number;
  codigo_cliente_integracao: string;
  razao_social: string;
  nome_fantasia: string;
  cnpj_cpf: string;
  email: string;
  telefone1: string;
  telefone2: string;
  endereco: string;
  endereco_numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  codigo_pais: string;
  nome_pais: string;
  codigo_ibge_municipio: string;
  valor_limite_credito: number;
  bloquear_faturamento: string;
  recomendacoes: string;
  obs_detalhadas: string;
  pessoa_fisica: string;
  exterior: string;
  logradouro: string;
  importado_api: string;
  bloqueado: string;
  cidade_ibge: string;
  valor_limite_credito_adicional: number;
  bloquear_exclusao: string;
  informacao_adicional: string;
  inativo: string;
  ddd_telefone1: string;
  ddd_telefone2: string;
  tags: Array<{
    tag: string;
  }>;
  enderecoEntrega: {
    endereco: string;
    endereco_numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    codigo_pais: string;
    nome_pais: string;
    codigo_ibge_municipio: string;
    logradouro: string;
    cidade_ibge: string;
  };
  nif: string;
  inscricao_municipal: string;
  inscricao_estadual: string;
  inscricao_suframa: string;
  optante_simples_nacional: string;
  tipo_atividade: string;
  cnae: string;
  produto: string;
  setor_codigo: string;
  setor_descricao: string;
  data_alteracao: string;
  hora_alteracao: string;
  usuario_alteracao: string;
  data_inclusao: string;
  hora_inclusao: string;
  usuario_inclusao: string;
  sincronizar: string;
  id_origem: string;
  operacao: string;
}

export interface OmieClientResponse {
  pagina: number;
  total_de_paginas: number;
  registros: number;
  total_de_registros: number;
  clientes_cadastro: OmieClient[];
} 