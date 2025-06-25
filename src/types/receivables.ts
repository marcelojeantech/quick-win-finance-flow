export interface Receivable {
  id: string;
  cliente: string;
  valor: number;
  vencimento: string;
  situacao: 'Em aberto' | 'Pago' | 'Atrasado';
  linkNF?: string;
  ultimaAcao?: string;
  responsavel?: string;
  diasAtraso?: number;
  telefone?: string;
  email?: string;
  codigoCliente?: number;
}

export interface CobrancaTemplate {
  diasAtraso: number;
  tipo: 'email' | 'whatsapp';
  titulo: string;
  mensagem: string;
}
