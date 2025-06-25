# Mock Omie Client

Este projeto inclui um cliente mock para simular as respostas da API do Omie, permitindo desenvolvimento e testes sem depender da API real.

## Estrutura dos Arquivos

```
src/
├── api/
│   ├── mockOmie.ts          # Cliente mock da API Omie
│   └── index.ts             # Cliente real da API Omie
├── actions/omie/
│   ├── index.tsx            # Ações principais (real + mock)
│   └── mockActions.tsx      # Ações usando dados mock
├── config/
│   └── api.ts               # Configuração para alternar entre real/mock
└── types/
    └── omie.ts              # Tipos TypeScript para Omie
```

## Como Usar

### 1. Configuração

Para alternar entre API real e mock, edite o arquivo `src/config/api.ts`:

```typescript
export const API_CONFIG = {
  // true = usar dados mock, false = usar API real
  USE_MOCK_OMIE: true,
  
  // Credenciais da API Omie (usadas apenas quando USE_MOCK_OMIE é false)
  OMIE: {
    APP_KEY: 'sua_app_key',
    APP_SECRET: 'sua_app_secret',
    BASE_URL: 'https://app.omie.com.br/api/v1'
  }
};
```

### 2. Dados Mock Incluídos

O mock inclui dados realistas baseados na estrutura real da API Omie:

- **10 recebíveis** com diferentes status (RECEBIDO, ATRASADO)
- **Valores variados** de R$ 7,70 a R$ 80.095,00
- **Datas de vencimento** em diferentes períodos
- **Informações de clientes** simuladas
- **Estrutura completa** seguindo o formato da API Omie

### 3. Interface Consistente

As funções mantêm a mesma interface independente do modo:

```typescript
import { getReceivables, getClientInfo, getReceivablesWithClientInfo } from '@/actions/omie';

// Funciona igual em ambos os modos
const { receivables } = await getReceivables();
const clientInfo = await getClientInfo(3396227116);
```

### 4. Indicadores Visuais

Quando o modo mock está ativo, a aplicação mostra:

- **Badge** no cabeçalho: "🧪 Modo Mock - Dados Simulados"
- **Toast notification** ao carregar: "Modo Mock Ativo"

## Dados Mock Disponíveis

### Recebíveis (conta_receber_cadastro)

```typescript
{
  codigo_lancamento_omie: 3396594400,
  codigo_cliente_fornecedor: 3396227116,
  valor_documento: 7.7,
  data_vencimento: "20/04/2023",
  status_titulo: "RECEBIDO" | "ATRASADO",
  data_registro: "31/03/2023",
  // ... outros campos
}
```

### Clientes (clientes_cadastro)

```typescript
{
  codigo_cliente_omie: 3396227116,
  nome_fantasia: "Empresa Teste",
  razao_social: "Empresa Teste LTDA",
  email: "contato@empresateste.com.br",
  telefone1: "(11) 99999-9999",
  cnpj_cpf: "12.345.678/0001-90",
  // ... outros campos
}
```

## Simulação de Latência

O mock simula latência de rede para tornar o desenvolvimento mais realista:

- **getReceivables()**: 500ms de delay
- **getClient()**: 300ms de delay

## Transformação de Dados

O mock aplica a mesma lógica de transformação dos dados reais:

- Conversão de status: `RECEBIDO` → `Pago`, `ATRASADO` → `Atrasado`
- Cálculo de dias de atraso
- Formatação de datas
- Geração de links para notas fiscais

## Vantagens do Mock

1. **Desenvolvimento Offline**: Não precisa de conexão com Omie
2. **Testes Consistentes**: Dados sempre disponíveis
3. **Performance**: Respostas rápidas para desenvolvimento
4. **Segurança**: Não expõe credenciais reais
5. **Controle**: Dados previsíveis para testes

## Alternando Entre Modos

Para alternar entre mock e API real:

1. **Edite** `src/config/api.ts`
2. **Mude** `USE_MOCK_OMIE: true/false`
3. **Reinicie** a aplicação
4. **Verifique** os indicadores visuais

## Estrutura Completa dos Dados

O mock inclui todos os campos da API real do Omie, incluindo:

- Informações de boleto
- Categorias e percentuais
- Metadados de alteração
- Dados de distribuição
- Informações de conta corrente
- E muito mais...

Isso garante que o desenvolvimento seja feito com dados que refletem fielmente a estrutura real da API. 