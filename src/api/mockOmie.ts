import type { OmieReceivablesResponse, OmieClientResponse } from '@/types/omie';

// Mock data based on the provided Omie response
const mockOmieReceivablesResponse: OmieReceivablesResponse = {
    "pagina": 1,
    "total_de_paginas": 7,
    "registros": 500,
    "total_de_registros": 3311,
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
                    "valor": 54.62
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594434,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/04/2023",
            "data_registro": "31/01/2023",
            "data_vencimento": "27/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:25:59",
                "hInc": "15:07:02",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 54.62
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
                    "valor": 84.3
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227169,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594438,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/07/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:39:50",
                "hInc": "15:07:03",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 84.3
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
                    "valor": 85.6
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227045,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594442,
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
                "hAlt": "15:07:03",
                "hInc": "15:07:03",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 85.6
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
                    "valor": 89.79
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594444,
            "codigo_tipo_documento": "99999",
            "data_previsao": "30/12/2022",
            "data_registro": "30/11/2022",
            "data_vencimento": "30/12/2022",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:27:00",
                "hInc": "15:07:03",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 89.79
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
                    "valor": 110.37
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594450,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/04/2023",
            "data_registro": "31/12/2022",
            "data_vencimento": "27/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:28:26",
                "hInc": "15:07:04",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 110.37
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
                    "valor": 114.25
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227221,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594452,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "28/02/2023",
            "data_vencimento": "10/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:06:06",
                "hInc": "15:07:04",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 114.25
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
                    "valor": 121.55
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227221,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594457,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "12:08:50",
                "hInc": "15:07:05",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 121.55
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
                    "valor": 135.85
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594461,
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
                "hAlt": "15:07:05",
                "hInc": "15:07:05",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 135.85
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
                    "valor": 148.64
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594463,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "27/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:25:27",
                "hInc": "15:07:06",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 148.64
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
                    "valor": 200.39
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227436,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594467,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/07/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:35:17",
                "hInc": "15:07:06",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 200.39
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
                    "valor": 222.58
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594471,
            "codigo_tipo_documento": "99999",
            "data_previsao": "18/05/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "09:02:56",
                "hInc": "15:07:06",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 222.58
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
                    "valor": 230.3
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227084,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594474,
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
                "hAlt": "15:07:07",
                "hInc": "15:07:07",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 230.3
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
                    "valor": 312.7
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594477,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:47:30",
                "hInc": "15:07:07",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 312.7
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
                    "valor": 454.5
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594485,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "15/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "18:19:09",
                "hInc": "15:07:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 454.5
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
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594487,
            "codigo_tipo_documento": "99999",
            "data_previsao": "12/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "12/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:12:18",
                "hInc": "15:07:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227033,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594492,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:07:55",
                "hInc": "15:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "valor": 677.5
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227060,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594494,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:16:26",
                "hInc": "15:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 677.5
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
                    "valor": 680.37
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594496,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:13:23",
                "hInc": "15:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 680.37
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
            "codigo_cliente_fornecedor": 3396227090,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594503,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/02/2023",
            "data_registro": "18/01/2023",
            "data_vencimento": "10/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "11:06:01",
                "hInc": "15:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227107,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594510,
            "codigo_tipo_documento": "99999",
            "data_previsao": "22/02/2023",
            "data_registro": "18/01/2023",
            "data_vencimento": "18/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:11:19",
                "hInc": "15:07:09",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594519,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/04/2023",
            "data_registro": "07/02/2023",
            "data_vencimento": "27/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:19:50",
                "hInc": "15:07:10",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594524,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/02/2023",
            "data_registro": "07/02/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:42:54",
                "hInc": "15:07:10",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227000,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594530,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/02/2023",
            "data_registro": "07/02/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "25/10/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:22:37",
                "hInc": "15:07:10",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227051,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594536,
            "codigo_tipo_documento": "99999",
            "data_previsao": "02/05/2023",
            "data_registro": "08/02/2023",
            "data_vencimento": "02/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:16:49",
                "hInc": "15:07:11",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227212,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594542,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/02/2023",
            "data_registro": "17/02/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:11",
                "hInc": "15:07:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227021,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594546,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/02/2023",
            "data_registro": "17/02/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:11",
                "hInc": "15:07:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227084,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594548,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/02/2023",
            "data_registro": "17/02/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "15/04/2024",
                "dInc": "24/04/2023",
                "hAlt": "16:41:46",
                "hInc": "15:07:11",
                "uAlt": "P000784412",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227107,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594550,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/03/2023",
            "data_registro": "22/02/2023",
            "data_vencimento": "10/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:10:53",
                "hInc": "15:07:11",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594553,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "27/02/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "19:40:44",
                "hInc": "15:07:11",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227090,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594555,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/03/2023",
            "data_registro": "09/03/2023",
            "data_vencimento": "10/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "11:05:50",
                "hInc": "15:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227107,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594560,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "09/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3387056286,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:12:03",
                "hInc": "15:07:12",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594563,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/04/2023",
            "data_registro": "13/03/2023",
            "data_vencimento": "27/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "16:19:37",
                "hInc": "15:07:12",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227048,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594565,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "13/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:12",
                "hInc": "15:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227212,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594568,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "13/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:21:21",
                "hInc": "15:07:12",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227021,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594573,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "13/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:12",
                "hInc": "15:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227181,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594578,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/07/2023",
            "data_registro": "13/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:56:23",
                "hInc": "15:07:13",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594587,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "20/03/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:10:20",
                "hInc": "15:07:13",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227063,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594590,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "28/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:24:00",
                "hInc": "15:07:13",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227048,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594592,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:13",
                "hInc": "15:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227075,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594598,
            "codigo_tipo_documento": "99999",
            "data_previsao": "03/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "03/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "13:46:39",
                "hInc": "15:07:14",
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
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227138,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594603,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:16:28",
                "hInc": "15:07:14",
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
                    "valor": 1076.27
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594612,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:17:07",
                "hInc": "15:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1076.27
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
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594614,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/03/2023",
            "data_registro": "28/02/2023",
            "data_vencimento": "10/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:15",
                "hInc": "15:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594620,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "28/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:15",
                "hInc": "15:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594622,
            "codigo_tipo_documento": "99999",
            "data_previsao": "25/06/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:47:22",
                "hInc": "15:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "valor": 1519.44
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594624,
            "codigo_tipo_documento": "99999",
            "data_previsao": "12/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "12/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:11:49",
                "hInc": "15:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1519.44
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
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594630,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "28/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:42:03",
                "hInc": "15:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227169,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594633,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/04/2023",
            "data_registro": "28/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:07:16",
                "hInc": "15:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594636,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:06:25",
                "hInc": "15:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227113,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594639,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/05/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/05/2025",
                "dInc": "24/04/2023",
                "hAlt": "19:44:30",
                "hInc": "15:07:16",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "valor": 3181.06
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594643,
            "codigo_tipo_documento": "99999",
            "data_previsao": "11/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:09:24",
                "hInc": "15:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3181.06
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
                    "valor": 4589.73
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594649,
            "codigo_tipo_documento": "99999",
            "data_previsao": "31/05/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "10:53:37",
                "hInc": "15:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 4589.73
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
                    "valor": 4690.02
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396594657,
            "codigo_tipo_documento": "99999",
            "data_previsao": "12/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "12/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:10:54",
                "hInc": "15:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 4690.02
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746060,
            "codigo_tipo_documento": "99999",
            "data_emissao": "24/04/2023",
            "data_previsao": "12/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "12/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:01:42",
                "hInc": "20:25:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 2089.35
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746088,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "12/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "12/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:01:52",
                "hInc": "20:27:00",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2089.35
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746109,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "03/05/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "03/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:17:23",
                "hInc": "20:27:29",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 132.2
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227024,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746139,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "23:17:29",
                "hInc": "20:28:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 132.2
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 1998
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746183,
            "codigo_tipo_documento": "99999",
            "data_emissao": "22/02/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:55:13",
                "hInc": "20:29:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1998
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 3198
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746273,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "17:19:02",
                "hInc": "20:29:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3198
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 203.62
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396746703,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:31:27",
                "hInc": "20:31:05",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 203.62
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227215,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396747237,
            "codigo_tipo_documento": "99999",
            "data_emissao": "13/03/2023",
            "data_previsao": "25/05/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "24/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "11:50:19",
                "hInc": "20:31:37",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 80095
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396623318,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396747590,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "31/05/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "31/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "13:48:39",
                "hInc": "20:32:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "retem_cofins": "N",
            "retem_csll": "N",
            "retem_ir": "N",
            "retem_pis": "N",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 80095
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 25500
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396622597,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748013,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/01/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "31/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:31:30",
                "hInc": "20:33:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 25500
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 25500
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396622597,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748023,
            "codigo_tipo_documento": "99999",
            "data_emissao": "28/02/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:30:10",
                "hInc": "20:34:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 25500
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396691897,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748049,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:26:58",
                "hInc": "20:35:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748096,
            "codigo_tipo_documento": "99999",
            "data_emissao": "09/03/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "26/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "13:24:02",
                "hInc": "20:35:37",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748121,
            "codigo_tipo_documento": "99999",
            "data_emissao": "28/02/2023",
            "data_previsao": "10/03/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "26/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "13:12:56",
                "hInc": "20:36:01",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748150,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/05/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "10:08:01",
                "hInc": "20:36:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 2125.59
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227069,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748812,
            "codigo_tipo_documento": "99999",
            "data_emissao": "09/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "01:36:15",
                "hInc": "20:37:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 2125.59
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227054,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748846,
            "codigo_tipo_documento": "99999",
            "data_emissao": "10/03/2023",
            "data_previsao": "22/02/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "22/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:38:51",
                "hInc": "20:38:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227054,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396748867,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:39:28",
                "hInc": "20:39:04",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227081,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749017,
            "codigo_tipo_documento": "99999",
            "data_emissao": "13/03/2023",
            "data_previsao": "26/06/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "11:01:11",
                "hInc": "20:39:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227096,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749673,
            "codigo_tipo_documento": "99999",
            "data_emissao": "13/03/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:42:13",
                "hInc": "20:41:48",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 25.45
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227122,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749732,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "22:12:30",
                "hInc": "20:42:29",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 25.45
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 1598
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227172,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749810,
            "codigo_tipo_documento": "99999",
            "data_emissao": "10/04/2023",
            "data_previsao": "28/02/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:14:41",
                "hInc": "20:43:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1598
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227145,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749838,
            "codigo_tipo_documento": "99999",
            "data_emissao": "28/02/2023",
            "data_previsao": "10/03/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3387056286,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "00:41:34",
                "hInc": "20:43:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227154,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749897,
            "codigo_tipo_documento": "99999",
            "data_emissao": "13/03/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:45:58",
                "hInc": "20:45:32",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 399.5
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396609288,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396749950,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/01/2023",
            "data_previsao": "28/02/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "28/02/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:46:56",
                "hInc": "20:46:05",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 399.5
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 1598
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396609288,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750198,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "03/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "01/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:48:21",
                "hInc": "20:47:03",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1598
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 2953.47
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227175,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750347,
            "codigo_tipo_documento": "99999",
            "data_emissao": "24/04/2023",
            "data_previsao": "11/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "21:05:37",
                "hInc": "20:48:34",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2953.47
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 16.84
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750565,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:51:32",
                "hInc": "20:49:02",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 16.84
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750669,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:52:10",
                "hInc": "20:51:37",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750702,
            "codigo_tipo_documento": "99999",
            "data_emissao": "28/02/2023",
            "data_previsao": "28/03/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "28/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:52:33",
                "hInc": "20:52:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 21.45
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227190,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750887,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "27/11/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "09/01/2024",
                "dInc": "24/04/2023",
                "hAlt": "13:17:27",
                "hInc": "20:53:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 21.45
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396750961,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "24/04/2023",
                "hAlt": "23:39:30",
                "hInc": "20:53:37",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 32.54
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227218,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396751035,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "20/04/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "24/04/2023",
                "dInc": "24/04/2023",
                "hAlt": "20:54:04",
                "hInc": "20:53:53",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 32.54
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 284.12
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3396751048,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "05/05/2023",
            "data_registro": "24/04/2023",
            "data_vencimento": "20/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "24/04/2023",
                "hAlt": "15:03:59",
                "hInc": "20:54:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 284.12
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705737,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:52:32",
                "hInc": "20:06:38",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1753.6
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705742,
            "codigo_tipo_documento": "99999",
            "data_previsao": "30/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "31/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:40:15",
                "hInc": "20:06:38",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1753.6
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227169,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705745,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "16:41:14",
                "hInc": "20:06:38",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 111.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227169,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705747,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:38",
                "hInc": "20:06:38",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 111.9
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227021,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705751,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:16:15",
                "hInc": "20:06:38",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 179.65
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227021,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705753,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:16:21",
                "hInc": "20:06:38",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 179.65
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227000,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705755,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "25/10/2023",
                "dInc": "02/05/2023",
                "hAlt": "17:21:53",
                "hInc": "20:06:38",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705764,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "12:02:53",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 284.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705767,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "15/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "18:20:28",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 284.9
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1598
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227015,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705769,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:52:46",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1598
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227018,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705773,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "09:09:21",
                "hInc": "20:06:39",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227024,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705775,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:10:58",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 815.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227024,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705777,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:17:56",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 815.9
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227027,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705781,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "02/05/2023",
                "hAlt": "00:20:25",
                "hInc": "20:06:39",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396691897,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705783,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:44:42",
                "hInc": "20:06:39",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227033,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705787,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:43:42",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 20.5
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227033,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705789,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:50:10",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 20.5
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227199,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705791,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:47:38",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705795,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "26/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "13:13:41",
                "hInc": "20:06:39",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227048,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705797,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:42:57",
                "hInc": "20:06:39",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227224,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705800,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:56:06",
                "hInc": "20:06:40",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227051,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705803,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "29/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "28/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "19/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:21:44",
                "hInc": "20:06:40",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227057,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705806,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:43:49",
                "hInc": "20:06:40",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 63.38
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227057,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705809,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:25:13",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 63.38
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227075,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705811,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:42:15",
                "hInc": "20:06:40",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227063,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705815,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "22:40:55",
                "hInc": "20:06:40",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705817,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:52:28",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 330
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705819,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:34:03",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 330
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 422.42
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227069,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705823,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:23:24",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 422.42
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227072,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705825,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:27:02",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227110,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705828,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:23:19",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 10.7
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227110,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705831,
            "codigo_tipo_documento": "99999",
            "data_previsao": "04/09/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:16:16",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 10.7
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227054,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705833,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:43:39",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227178,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705837,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:48:32",
                "hInc": "20:06:40",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227084,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705839,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:14:18",
                "hInc": "20:06:40",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 149.78
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227084,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705841,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:14:03",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 149.78
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227090,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705845,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:05:28",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 35.22
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227090,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705847,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:09:52",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 35.22
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705851,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:40:14",
                "hInc": "20:06:41",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 4645
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705853,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "14/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "02/06/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "01:38:57",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 4645
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227096,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705856,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:09:07",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 116
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227096,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705859,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:08:53",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 116
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705861,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "16/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "17:39:23",
                "hInc": "20:06:41",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 6648.77
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705865,
            "codigo_tipo_documento": "99999",
            "data_previsao": "31/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "10:51:55",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 6648.77
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227227,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705867,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:56:53",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227113,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705869,
            "codigo_tipo_documento": "99999",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:37:27",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "valor": 80095
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396623318,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705873,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "01:44:11",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 80095
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227230,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705875,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:41",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 50.85
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227230,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705879,
            "codigo_tipo_documento": "99999",
            "data_previsao": "22/07/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "31/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:58:02",
                "hInc": "20:06:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 50.85
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227436,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705881,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:46:46",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 76.25
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227436,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705883,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "02/05/2023",
                "hAlt": "22:35:50",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 76.25
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705887,
            "codigo_tipo_documento": "99999",
            "data_previsao": "22/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "20/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "29/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:49:46",
                "hInc": "20:06:42",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 784.63
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705889,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "28/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:41:08",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 784.63
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227135,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705893,
            "codigo_tipo_documento": "99999",
            "data_previsao": "15/05/2023",
            "data_registro": "20/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "09:55:17",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 526.93
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227135,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705895,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "20/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "09:55:29",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 526.93
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 132.19
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227138,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705899,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "19/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:09:05",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 132.19
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227160,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705901,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "19/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:32:58",
                "hInc": "20:06:42",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227150,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705904,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "19/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:20:32",
                "hInc": "20:06:42",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705907,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "18/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:28:40",
                "hInc": "20:06:42",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 413.6
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705910,
            "codigo_tipo_documento": "99999",
            "data_previsao": "12/06/2023",
            "data_registro": "17/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "22:47:07",
                "hInc": "20:06:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 413.6
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227145,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705914,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/06/2023",
            "data_registro": "16/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "17:27:46",
                "hInc": "20:06:42",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227060,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705917,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:29:40",
                "hInc": "20:06:42",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 355.8
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227060,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705920,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:28:27",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 355.8
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 10263.34
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705922,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:38:18",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 10263.34
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705926,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:11:41",
                "hInc": "20:06:43",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 107.58
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705928,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:44:47",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 107.58
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705936,
            "codigo_tipo_documento": "99999",
            "data_previsao": "28/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:12:24",
                "hInc": "20:06:43",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1924.81
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705939,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "15:17:44",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1924.81
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227233,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705942,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/11/2023",
                "dInc": "02/05/2023",
                "hAlt": "10:53:20",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705946,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "22/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:59:41",
                "hInc": "20:06:43",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 603.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705948,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "12:00:47",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 603.9
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1099
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227116,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705952,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:25:25",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1099
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 993.08
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227116,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705954,
            "codigo_tipo_documento": "99999",
            "data_previsao": "05/07/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:34:23",
                "hInc": "20:06:43",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 993.08
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705957,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:44",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 86.83
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705960,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:44",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 86.83
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 27.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227184,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705965,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "15/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "13:09:33",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 27.9
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227190,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705968,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/11/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "09/01/2024",
                "dInc": "02/05/2023",
                "hAlt": "13:16:48",
                "hInc": "20:06:44",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 28.4
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227190,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705970,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/11/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "09/01/2024",
                "dInc": "02/05/2023",
                "hAlt": "13:17:05",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 28.4
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705973,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:40:00",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 16.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705976,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:40:22",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 16.2
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705978,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:48:39",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 178.09
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705981,
            "codigo_tipo_documento": "99999",
            "data_previsao": "12/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "10:52:41",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 178.09
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705984,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:44",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 147.44
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705986,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:44",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 147.44
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705989,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:14:37",
                "hInc": "20:06:44",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 3321.15
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705991,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:13:41",
                "hInc": "20:06:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3321.15
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227212,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705993,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2025",
                "dInc": "02/05/2023",
                "hAlt": "17:28:52",
                "hInc": "20:06:45",
                "uAlt": "P000842881",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 9.45
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227212,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705995,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "02/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "20:06:45",
                "hInc": "20:06:45",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 9.45
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227215,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400705997,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "20/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "15:45:48",
                "hInc": "20:06:45",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709538,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709672,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/12/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:51:23",
                "hInc": "20:36:47",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento_fiscal": "743",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709756,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "00:01:27",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709758,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "21:40:21",
                "hInc": "20:38:57",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 68.26
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709760,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "09:03:27",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 68.26
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709446,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709762,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "05/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:25:58",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227045,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709764,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "01:44:57",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709766,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "28/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:23:58",
                "hInc": "20:38:57",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 3497.05
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709768,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:36:33",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3497.05
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709770,
            "codigo_tipo_documento": "99999",
            "data_previsao": "30/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "02/05/2023",
                "hAlt": "14:59:14",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 321.44
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400709182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709772,
            "codigo_tipo_documento": "99999",
            "data_previsao": "30/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "02/05/2023",
                "hAlt": "14:58:06",
                "hInc": "20:38:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 321.44
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709774,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "25/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:34:16",
                "hInc": "20:38:57",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227181,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709776,
            "codigo_tipo_documento": "99999",
            "data_previsao": "24/07/2023",
            "data_registro": "20/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "15:56:53",
                "hInc": "20:38:57",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 300.96
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227181,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709778,
            "codigo_tipo_documento": "99999",
            "data_previsao": "27/07/2023",
            "data_registro": "20/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "15:02:52",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 300.96
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708537,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709780,
            "codigo_tipo_documento": "99999",
            "data_emissao": "06/04/2023",
            "data_previsao": "26/05/2023",
            "data_registro": "06/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:26:01",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708452,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709782,
            "codigo_tipo_documento": "99999",
            "data_previsao": "05/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "00:03:24",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708380,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709784,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "14/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "28/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "17:47:41",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709786,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "29/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:13:55",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707606,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709788,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "22/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:18:53",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227175,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709790,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:07:37",
                "hInc": "20:38:58",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 890.89
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227175,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709792,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "22:13:42",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 890.89
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707575,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709794,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "01/07/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "15:38:22",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227218,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709796,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "11:09:30",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 12.58
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227218,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400709798,
            "codigo_tipo_documento": "99999",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "23:11:41",
                "hInc": "20:38:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 12.58
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227100,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400710204,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "20/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "20/06/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/06/2023",
                "dInc": "02/05/2023",
                "hAlt": "10:19:22",
                "hInc": "20:45:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707475,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400715364,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "02/05/2023",
                "hAlt": "00:10:01",
                "hInc": "21:53:41",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400795126,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400795358,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "03/05/2023",
                "hAlt": "21:42:03",
                "hInc": "12:01:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento_fiscal": "484",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 1000
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227033,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400842098,
            "codigo_tipo_documento": "99999",
            "data_emissao": "11/04/2023",
            "data_previsao": "11/04/2023",
            "data_registro": "11/04/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "03/05/2023",
                "hAlt": "14:51:02",
                "hInc": "14:50:49",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230411006",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1000
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 1500
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3400842605,
            "codigo_tipo_documento": "99999",
            "data_emissao": "11/04/2023",
            "data_previsao": "11/04/2023",
            "data_registro": "11/04/2023",
            "data_vencimento": "11/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "03/05/2023",
                "hAlt": "14:52:33",
                "hInc": "14:51:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230411008",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1500
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 1000
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3401041962,
            "codigo_tipo_documento": "99999",
            "data_emissao": "06/04/2023",
            "data_previsao": "06/04/2023",
            "data_registro": "06/04/2023",
            "data_vencimento": "06/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "03/05/2023",
                "hAlt": "20:23:14",
                "hInc": "20:22:57",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230406005",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1000
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 1000
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227184,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3401041993,
            "codigo_tipo_documento": "99999",
            "data_emissao": "06/04/2023",
            "data_previsao": "06/04/2023",
            "data_registro": "06/04/2023",
            "data_vencimento": "06/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "03/05/2023",
                "dInc": "03/05/2023",
                "hAlt": "20:23:30",
                "hInc": "20:23:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230406006",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1000
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 2000
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3405099120,
            "codigo_tipo_documento": "99999",
            "data_emissao": "08/05/2023",
            "data_previsao": "08/05/2023",
            "data_registro": "08/05/2023",
            "data_vencimento": "08/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/05/2023",
                "dInc": "11/05/2023",
                "hAlt": "12:00:43",
                "hInc": "12:00:04",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230508002",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2000
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 250
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227057,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3405099228,
            "codigo_tipo_documento": "99999",
            "data_emissao": "09/05/2023",
            "data_previsao": "09/05/2023",
            "data_registro": "09/05/2023",
            "data_vencimento": "09/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/05/2023",
                "dInc": "11/05/2023",
                "hAlt": "17:30:14",
                "hInc": "12:01:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230509002",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 250
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 600
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3405100087,
            "codigo_tipo_documento": "99999",
            "data_emissao": "09/05/2023",
            "data_previsao": "09/05/2023",
            "data_registro": "09/05/2023",
            "data_vencimento": "09/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "11/05/2023",
                "hAlt": "15:25:34",
                "hInc": "12:02:35",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230509003",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 600
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1099
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227116,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3405947238,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/07/2023",
                "dInc": "13/05/2023",
                "hAlt": "18:07:11",
                "hInc": "23:26:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1099
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227030,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3405947259,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "24/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "22/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/05/2023",
                "dInc": "13/05/2023",
                "hAlt": "23:32:54",
                "hInc": "23:31:47",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3405952361,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "10/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/05/2023",
                "dInc": "14/05/2023",
                "hAlt": "01:00:59",
                "hInc": "01:00:00",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 3198
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409290405,
            "codigo_tipo_documento": "99999",
            "data_emissao": "01/04/2023",
            "data_previsao": "15/05/2023",
            "data_registro": "01/04/2023",
            "data_vencimento": "28/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "19:21:24",
                "hInc": "19:19:47",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3198
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 287.26
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409293112,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "15/05/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "19:23:46",
                "hInc": "19:23:04",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 287.26
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
            "cPedidoCliente": "8",
            "categorias": [
                {
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 2000
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227132,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409306594,
            "codigo_tipo_documento": "FAT",
            "data_emissao": "27/04/2023",
            "data_previsao": "15/05/2023",
            "data_registro": "27/04/2023",
            "data_vencimento": "15/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "VENR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "19:38:21",
                "hInc": "19:35:52",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "nCodOS": 3398834587,
            "numero_documento": "2",
            "numero_parcela": "001/001",
            "numero_pedido": "1",
            "operacao": "01",
            "retem_cofins": "N",
            "retem_csll": "N",
            "retem_inss": "N",
            "retem_ir": "N",
            "retem_iss": "N",
            "retem_pis": "N",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2000
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 0,
                    "valor": 0
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409321443,
            "codigo_tipo_documento": "REC",
            "data_emissao": "18/05/2023",
            "data_previsao": "11/05/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "11/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "VENR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "19:47:02",
                "hInc": "19:47:02",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "nCodOS": 3409316633,
            "numero_documento": "3",
            "numero_parcela": "001/001",
            "numero_pedido": "8",
            "operacao": "01",
            "retem_cofins": "N",
            "retem_csll": "N",
            "retem_inss": "N",
            "retem_ir": "N",
            "retem_iss": "N",
            "retem_pis": "N",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1600
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.04.98",
            "codigo_cliente_fornecedor": 3396227199,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409352462,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "10/04/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "10/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "20:15:44",
                "hInc": "20:14:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 0,
                    "valor": 0
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396691897,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409364127,
            "codigo_tipo_documento": "REC",
            "data_emissao": "18/05/2023",
            "data_previsao": "11/05/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "11/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "VENR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "20:23:04",
                "hInc": "20:23:04",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "nCodOS": 3409361485,
            "numero_documento": "4",
            "numero_parcela": "001/001",
            "numero_pedido": "9",
            "operacao": "01",
            "retem_cofins": "N",
            "retem_csll": "N",
            "retem_inss": "N",
            "retem_ir": "N",
            "retem_iss": "N",
            "retem_pis": "N",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1000
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227018,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3409369071,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/03/2023",
            "data_previsao": "12/05/2023",
            "data_registro": "31/03/2023",
            "data_vencimento": "30/04/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/05/2023",
                "dInc": "18/05/2023",
                "hAlt": "20:26:53",
                "hInc": "20:25:58",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3415771251,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/03/2023",
            "data_previsao": "18/05/2023",
            "data_registro": "30/03/2023",
            "data_vencimento": "30/03/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/05/2023",
                "dInc": "22/05/2023",
                "hAlt": "09:07:59",
                "hInc": "09:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 72.1
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3415815898,
            "codigo_tipo_documento": "99999",
            "data_emissao": "30/04/2023",
            "data_previsao": "25/06/2023",
            "data_registro": "30/04/2023",
            "data_vencimento": "10/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "22/05/2023",
                "hAlt": "16:01:59",
                "hInc": "11:48:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 72.1
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3415816032,
            "codigo_tipo_documento": "99999",
            "data_emissao": "16/04/2023",
            "data_previsao": "25/06/2023",
            "data_registro": "16/04/2023",
            "data_vencimento": "20/05/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392865077,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/06/2023",
                "dInc": "22/05/2023",
                "hAlt": "16:10:05",
                "hInc": "11:49:35",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 500
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421043758,
            "codigo_tipo_documento": "99999",
            "data_emissao": "01/06/2023",
            "data_previsao": "01/06/2023",
            "data_registro": "01/06/2023",
            "data_vencimento": "01/06/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "21:38:59",
                "hInc": "21:38:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "20230601001",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 500
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 797.41
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044208,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "10/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 797.41
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:12:44",
                "hInc": "22:08:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 797.41
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227060,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044210,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:26:37",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227051,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044212,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "20:36:21",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227033,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044214,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "10:27:32",
                "hInc": "22:08:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227015,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044216,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "11:53:00",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044218,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "19:30:59",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227150,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044220,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "19:48:01",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227138,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044222,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:29:17",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044224,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:09:33",
                "hInc": "22:08:19",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1099
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227116,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044226,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "06/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1099
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "20:34:58",
                "hInc": "22:08:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1099
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227090,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044228,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:20",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227054,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044230,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:20",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227048,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044232,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:20",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396691897,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044234,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "20/06/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "20/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "10:46:17",
                "hInc": "22:08:20",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227045,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044236,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:20",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 4
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044238,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 4
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:26",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 4
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 3.34
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044241,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3.34
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:26",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3.34
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 3
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044243,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:25",
                "hInc": "22:08:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 2.23
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044245,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 2.23
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:25",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2.23
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 3.96
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044247,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3.96
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:24",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3.96
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 3.97
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044249,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3.97
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:23",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3.97
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 6
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044251,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 6
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:24",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 6
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 12
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044253,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 12
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:24",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 12
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 2
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044255,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 2
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:25",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 3.65
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044257,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3.65
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:23",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3.65
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 5.54
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044260,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 5.54
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:35:28",
                "hInc": "22:08:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 5.54
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 11.1
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227048,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044263,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 11.1
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2025",
                "dInc": "04/06/2023",
                "hAlt": "17:31:33",
                "hInc": "22:08:22",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 11.1
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 15.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227212,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044265,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 15.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:22",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 15.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 48.8
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227160,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044267,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 48.8
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "11:20:48",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 48.8
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 187.24
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044269,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 187.24
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "19:31:18",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 187.24
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 28.97
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227436,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044271,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "10/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 28.97
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:35:59",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 28.97
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 2095.53
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044273,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "15/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "02/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 2095.53
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:16:15",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2095.53
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 522.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044275,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 522.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:51:47",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 522.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 972.21
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227135,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044277,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 972.21
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:01:59",
                "hInc": "22:08:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 972.21
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 803.68
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044279,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 803.68
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:28:03",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 803.68
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1141.56
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044281,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1141.56
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:14:01",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1141.56
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 12911.91
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400708821,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044283,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 12911.91
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "20:27:35",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 12911.91
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 141.85
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227230,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044285,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 141.85
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "11:22:37",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 141.85
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 94.36
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227090,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044287,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 94.36
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:23",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 94.36
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 86.6
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044289,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 86.6
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:56:33",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 86.6
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 320.22
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227084,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044291,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 320.22
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:23",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 320.22
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 304.6
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227060,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044293,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 304.6
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "11:27:49",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 304.6
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 25.14
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227057,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044295,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 25.14
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:22:51",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 25.14
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 8010.19
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044297,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 8010.19
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "15/05/2024",
                "dInc": "04/06/2023",
                "hAlt": "18:51:54",
                "hInc": "22:08:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 8010.19
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 660.7
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044299,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "01/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "01/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 660.7
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:44:21",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 660.7
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 13
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227033,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044301,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 13
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:26:45",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 13
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 194.57
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227030,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044303,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 194.57
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:24",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 194.57
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1167.7
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227024,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044305,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1167.7
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "19:26:29",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1167.7
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 193.56
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227021,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044307,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 193.56
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:24",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 193.56
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 3.6
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400709493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044309,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3.6
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "09/01/2024",
                "dInc": "04/06/2023",
                "hAlt": "14:27:45",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3.6
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1429.37
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227116,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044311,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1429.37
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/12/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:22:14",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1429.37
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 29
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227169,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044313,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 29
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:39:30",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 29
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 469.03
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227138,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044315,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 469.03
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:28:32",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 469.03
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 2037.75
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044317,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 2037.75
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "28/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "17:43:12",
                "hInc": "22:08:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2037.75
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 39.7
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227199,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044319,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 39.7
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:25:38",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 39.7
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 105.22
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044321,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "16/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "16/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 105.22
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:15:44",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 105.22
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 94.4
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044323,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "19/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 94.4
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:20:07",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 94.4
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 8.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400707475,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044325,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 8.9
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:30:29",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 8.9
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 206.66
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227181,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044327,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 206.66
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:04:41",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 206.66
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 3510
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044329,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3510
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "20:31:59",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3510
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 160.15
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044331,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 160.15
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "20:11:04",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 160.15
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 9886.06
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044333,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 9886.06
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "20:26:52",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 9886.06
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227436,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044335,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "10/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:32:59",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044337,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1200
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:25",
                "hInc": "22:08:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227075,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044339,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:21:19",
                "hInc": "22:08:26",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227212,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044341,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2025",
                "dInc": "04/06/2023",
                "hAlt": "17:28:13",
                "hInc": "22:08:26",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "numero_documento": "658",
            "numero_documento_fiscal": "658",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227160,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044343,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:39:36",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "654",
            "numero_documento_fiscal": "654",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227233,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044345,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/11/2023",
                "dInc": "04/06/2023",
                "hAlt": "10:53:36",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "649",
            "numero_documento_fiscal": "649",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044347,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:14:50",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "647",
            "numero_documento_fiscal": "647",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227072,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044349,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:05:15",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "645",
            "numero_documento_fiscal": "645",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044351,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "20/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1300
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:57:30",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "643",
            "numero_documento_fiscal": "643",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227000,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044353,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "25/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "17:22:58",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "641",
            "numero_documento_fiscal": "641",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227113,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044355,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:26",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "639",
            "numero_documento_fiscal": "639",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044357,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:52:06",
                "hInc": "22:08:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "636",
            "numero_documento_fiscal": "636",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227063,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044359,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "23:56:00",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "635",
            "numero_documento_fiscal": "635",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044361,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "26/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "14:00:30",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "634",
            "numero_documento_fiscal": "634",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709446,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044363,
            "codigo_tipo_documento": "NF",
            "data_emissao": "26/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "26/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:34:50",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "625",
            "numero_documento_fiscal": "625",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227227,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044365,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "25/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:48:15",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "624",
            "numero_documento_fiscal": "624",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044367,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/05/2023",
            "data_previsao": "14/06/2023",
            "data_registro": "25/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:08:57",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "623",
            "numero_documento_fiscal": "623",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227169,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044369,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "23/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/06/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:08:27",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "617",
            "numero_documento_fiscal": "617",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227181,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044371,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "23/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:03:45",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "616",
            "numero_documento_fiscal": "616",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227057,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044373,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:22:28",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "612",
            "numero_documento_fiscal": "612",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044375,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "18/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "17:03:52",
                "hInc": "22:08:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "611",
            "numero_documento_fiscal": "611",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707475,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044377,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:31:11",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "606",
            "numero_documento_fiscal": "606",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707575,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044379,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "11:23:10",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "605",
            "numero_documento_fiscal": "605",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400795126,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044381,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "06/07/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:11:02",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "601",
            "numero_documento_fiscal": "601",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227230,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044383,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "11:22:11",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "600",
            "numero_documento_fiscal": "600",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044385,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:43:48",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "598",
            "numero_documento_fiscal": "598",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227135,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044387,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1200
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:01:46",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "597",
            "numero_documento_fiscal": "597",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044389,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:05:04",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "596",
            "numero_documento_fiscal": "596",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044391,
            "codigo_tipo_documento": "NF",
            "data_emissao": "21/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "21/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/05/2024",
                "dInc": "04/06/2023",
                "hAlt": "16:32:26",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "595",
            "numero_documento_fiscal": "595",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044393,
            "codigo_tipo_documento": "NF",
            "data_emissao": "21/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "21/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/06/2023",
                "hAlt": "22:55:12",
                "hInc": "22:08:28",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "593",
            "numero_documento_fiscal": "593",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044395,
            "codigo_tipo_documento": "NF",
            "data_emissao": "19/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "19/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1300
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2025",
                "dInc": "04/06/2023",
                "hAlt": "17:36:59",
                "hInc": "22:08:29",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "numero_documento": "590",
            "numero_documento_fiscal": "590",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708821,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044397,
            "codigo_tipo_documento": "NF",
            "data_emissao": "19/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "19/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "10:37:43",
                "hInc": "22:08:29",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "589",
            "numero_documento_fiscal": "589",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227199,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044399,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "16:25:20",
                "hInc": "22:08:29",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "588",
            "numero_documento_fiscal": "588",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044401,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "04/06/2023",
                "hAlt": "15:42:50",
                "hInc": "22:08:29",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "587",
            "numero_documento_fiscal": "587",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421044403,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "04/06/2023",
                "hAlt": "19:30:07",
                "hInc": "22:08:29",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "585",
            "numero_documento_fiscal": "585",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421177549,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272940,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:18:19",
                "hInc": "14:07:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421180340,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272944,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:23:54",
                "hInc": "14:07:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento_fiscal": "648",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 8
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272947,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 8
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:35:27",
                "hInc": "14:07:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 8
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 4.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400708537,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272949,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 4.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2025",
                "dInc": "05/06/2023",
                "hAlt": "17:51:44",
                "hInc": "14:07:08",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 4.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 265.03
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227145,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272955,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "13/06/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "02/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 265.03
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "13/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "17:27:25",
                "hInc": "14:07:08",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 265.03
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 43.88
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227096,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272958,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 43.88
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:18:18",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 43.88
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 970.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272960,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 970.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:23:01",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 970.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 502.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227224,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272963,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 502.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "20:33:10",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 502.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 2664.3
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421181464,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272965,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "01/06/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "01/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 2664.3
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/05/2024",
                "dInc": "05/06/2023",
                "hAlt": "16:30:38",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2664.3
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 18.19
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227218,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272968,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 18.19
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "28/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "17:44:51",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 18.19
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 45.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227184,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272973,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 45.9
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:19:51",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 45.9
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 11.24
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227178,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272977,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 11.24
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:26:11",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 11.24
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421183105,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272979,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "22:18:33",
                "hInc": "14:07:09",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421192498,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272981,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "22:19:00",
                "hInc": "14:07:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421193534,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272985,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "31/05/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "31/05/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "19/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "21:15:04",
                "hInc": "14:07:10",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227096,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272988,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:18:20",
                "hInc": "14:07:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "657",
            "numero_documento_fiscal": "657",
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421194587,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272991,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "21/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "17:25:13",
                "hInc": "14:07:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "656",
            "numero_documento_fiscal": "656",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421195810,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421272994,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "21/08/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:23:42",
                "hInc": "14:07:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "655",
            "numero_documento_fiscal": "655",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421197059,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273000,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:15:46",
                "hInc": "14:07:10",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "653",
            "numero_documento_fiscal": "653",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421197527,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273002,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:26:36",
                "hInc": "14:07:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "652",
            "numero_documento_fiscal": "652",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421197904,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273006,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "05/06/2023",
                "hAlt": "18:51:47",
                "hInc": "14:07:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "651",
            "numero_documento_fiscal": "651",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227184,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273008,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:19:22",
                "hInc": "14:07:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "650",
            "numero_documento_fiscal": "650",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421228110,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273010,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "31/05/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "31/05/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:00:37",
                "hInc": "14:07:11",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "644",
            "numero_documento_fiscal": "554",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273014,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "20/06/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:22:27",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "642",
            "numero_documento_fiscal": "642",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421230179,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273018,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "17:22:52",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "638",
            "numero_documento_fiscal": "638",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421230840,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273021,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:11:19",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "637",
            "numero_documento_fiscal": "637",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421237692,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273023,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "26/08/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:26:55",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "633",
            "numero_documento_fiscal": "633",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421238006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273027,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:48:47",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "632",
            "numero_documento_fiscal": "632",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227175,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273030,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "29/05/2023",
            "data_vencimento": "01/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:30:46",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "631",
            "numero_documento_fiscal": "631",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421181464,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273032,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "29/05/2023",
            "data_vencimento": "01/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:29:17",
                "hInc": "14:07:12",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "630",
            "numero_documento_fiscal": "630",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421238493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273034,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "29/05/2023",
            "data_vencimento": "01/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:42:11",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "629",
            "numero_documento_fiscal": "629",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421270420,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273036,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "29/05/2023",
            "data_vencimento": "01/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:28:36",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "628",
            "numero_documento_fiscal": "628",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421270691,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273041,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "29/05/2023",
            "data_vencimento": "01/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:34:25",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "627",
            "numero_documento_fiscal": "627",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421271026,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273044,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "29/05/2023",
            "data_vencimento": "01/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "20:03:44",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "626",
            "numero_documento_fiscal": "626",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421271399,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273046,
            "codigo_tipo_documento": "NF",
            "data_emissao": "24/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "24/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:25:33",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "622",
            "numero_documento_fiscal": "622",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421272183,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273050,
            "codigo_tipo_documento": "NF",
            "data_emissao": "24/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "24/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:26:52",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "620",
            "numero_documento_fiscal": "620",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273052,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "23/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/01/2024",
                "dInc": "05/06/2023",
                "hAlt": "15:27:32",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "619",
            "numero_documento_fiscal": "619",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421190330,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273056,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "23/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:01:34",
                "hInc": "14:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "618",
            "numero_documento_fiscal": "618",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227110,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273060,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/05/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "23/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "15/10/2023",
                "dInc": "05/06/2023",
                "hAlt": "00:06:20",
                "hInc": "14:07:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "615",
            "numero_documento_fiscal": "615",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273062,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "23/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:13:17",
                "hInc": "14:07:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "614",
            "numero_documento_fiscal": "614",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421175587,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273065,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:07:53",
                "hInc": "14:07:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "613",
            "numero_documento_fiscal": "613",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421178596,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273068,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:24:18",
                "hInc": "14:07:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "610",
            "numero_documento_fiscal": "610",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708380,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273070,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "19:33:16",
                "hInc": "14:07:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "609",
            "numero_documento_fiscal": "609",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227224,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273072,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:38:23",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "608",
            "numero_documento_fiscal": "608",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707606,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273074,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:19:38",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "603",
            "numero_documento_fiscal": "603",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707606,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273080,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:19:11",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "602",
            "numero_documento_fiscal": "602",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273084,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 300
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:14:06",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "599",
            "numero_documento_fiscal": "599",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273089,
            "codigo_tipo_documento": "NF",
            "data_emissao": "21/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "21/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:18:24",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "594",
            "numero_documento_fiscal": "594",
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227190,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273094,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/05/2023",
            "data_previsao": "27/11/2023",
            "data_registro": "20/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/02/2024",
                "dInc": "05/06/2023",
                "hAlt": "13:50:20",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "592",
            "numero_documento_fiscal": "592",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421185948,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273098,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:30:43",
                "hInc": "14:07:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "586",
            "numero_documento_fiscal": "586",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227178,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273107,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "16/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:04:09",
                "hInc": "14:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "583",
            "numero_documento_fiscal": "583",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227145,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273109,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "23/11/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "21/12/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:36:51",
                "hInc": "14:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "582",
            "numero_documento_fiscal": "582",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227218,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421273111,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1200
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:31:26",
                "hInc": "14:07:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421271620,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421282580,
            "codigo_tipo_documento": "NF",
            "data_emissao": "24/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "24/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "11:24:34",
                "hInc": "14:32:45",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "621",
            "numero_documento_fiscal": "621",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708452,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421282582,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/05/2023",
            "data_previsao": "06/07/2023",
            "data_registro": "22/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/07/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:24:49",
                "hInc": "14:32:46",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "607",
            "numero_documento_fiscal": "607",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 990
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708537,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421282584,
            "codigo_tipo_documento": "NF",
            "data_emissao": "19/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "19/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 990
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "05/06/2023",
                "hAlt": "15:23:35",
                "hInc": "14:32:46",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "591",
            "numero_documento_fiscal": "591",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 990
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1299
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421279569,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421282586,
            "codigo_tipo_documento": "NF",
            "data_emissao": "18/05/2023",
            "data_previsao": "30/06/2023",
            "data_registro": "18/05/2023",
            "data_vencimento": "30/06/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1299
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "16:25:22",
                "hInc": "14:32:46",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "584",
            "numero_documento_fiscal": "584",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1299
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421283816,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "30/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:28:34",
                "hInc": "14:35:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 560.54
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421283857,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 560.54
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "30/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:29:04",
                "hInc": "14:35:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 560.54
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709538,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421283865,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:53:43",
                "hInc": "14:35:44",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "646",
            "numero_documento_fiscal": "646",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 13
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421294632,
            "codigo_tipo_documento": "NF",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 13
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:35:27",
                "hInc": "15:07:13",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 13
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227009,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3421303813,
            "codigo_tipo_documento": "99999",
            "data_emissao": "31/05/2023",
            "data_previsao": "03/07/2023",
            "data_registro": "31/05/2023",
            "data_vencimento": "03/07/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "30/06/2023",
                "dInc": "05/06/2023",
                "hAlt": "14:28:49",
                "hInc": "15:32:42",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento_fiscal": "658",
            "numero_parcela": "001/001",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
        },
        {
            "bloqueado": "N",
            "bloquear_baixa": "N",
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
            "codigo_cliente_fornecedor": 3396227039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3448358245,
            "codigo_tipo_documento": "99999",
            "data_emissao": "26/06/2023",
            "data_previsao": "23/06/2023",
            "data_registro": "26/06/2023",
            "data_vencimento": "23/06/2023",
            "distribuicao": [],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "26/06/2023",
                "dInc": "26/06/2023",
                "hAlt": "13:15:41",
                "hInc": "13:14:27",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_parcela": "001/001",
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
                    "codigo_categoria": "1.04.05",
                    "percentual": 100,
                    "valor": 1000
                }
            ],
            "codigo_categoria": "1.04.05",
            "codigo_cliente_fornecedor": 3448992453,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3448996249,
            "codigo_tipo_documento": "REC",
            "data_emissao": "04/07/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "04/07/2023",
            "data_vencimento": "04/07/2023",
            "distribuicao": [],
            "id_conta_corrente": 3392011048,
            "id_origem": "VENR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "00:08:23",
                "hInc": "10:43:26",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "nCodOS": 3448992485,
            "numero_documento": "5",
            "numero_parcela": "001/001",
            "numero_pedido": "11",
            "operacao": "01",
            "retem_cofins": "N",
            "retem_csll": "N",
            "retem_inss": "N",
            "retem_ir": "N",
            "retem_iss": "N",
            "retem_pis": "N",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1000
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
                    "codigo_categoria": "1.01.03",
                    "percentual": 100,
                    "valor": 1595.87
                }
            ],
            "codigo_categoria": "1.01.03",
            "codigo_cliente_fornecedor": 3398236952,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093584,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1595.87
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "17/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "14:32:59",
                "hInc": "22:35:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "618",
            "numero_documento_fiscal": "618",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1595.87
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 98.04
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421230840,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093586,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 98.04
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:10:31",
                "hInc": "22:35:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "617",
            "numero_documento_fiscal": "617",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 98.04
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 2775.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093588,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 2775.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:03:25",
                "hInc": "22:35:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "615",
            "numero_documento_fiscal": "615",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 2775.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 91.25
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400709493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093590,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 91.25
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:56:12",
                "hInc": "22:35:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "614",
            "numero_documento_fiscal": "614",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 91.25
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 3360.75
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421181464,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093592,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 3360.75
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/05/2024",
                "dInc": "04/07/2023",
                "hAlt": "16:25:53",
                "hInc": "22:35:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "613",
            "numero_documento_fiscal": "613",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 3360.75
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 655.9
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227024,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093594,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 655.9
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:14:28",
                "hInc": "22:35:14",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "612",
            "numero_documento_fiscal": "612",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 655.9
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 105.8
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421272183,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093596,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 105.8
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:54:22",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "611",
            "numero_documento_fiscal": "611",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 105.8
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 38.5
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093598,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 38.5
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:41:25",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "610",
            "numero_documento_fiscal": "610",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 38.5
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 5825.81
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093600,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 5825.81
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:25:10",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "609",
            "numero_documento_fiscal": "609",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 5825.81
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 502.1
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227224,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093602,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 502.1
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:39:22",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "608",
            "numero_documento_fiscal": "608",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 502.1
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 634.28
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421238493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093604,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 634.28
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/01/2024",
                "dInc": "04/07/2023",
                "hAlt": "14:16:45",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "607",
            "numero_documento_fiscal": "607",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 634.28
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 36.53
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227057,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093606,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 36.53
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:21:52",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "606",
            "numero_documento_fiscal": "606",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 36.53
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 132.95
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227060,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093608,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 132.95
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:42:02",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "605",
            "numero_documento_fiscal": "605",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 132.95
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 230
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093610,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 230
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:17:48",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "604",
            "numero_documento_fiscal": "604",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 230
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 545.73
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093612,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 545.73
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:12:39",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "603",
            "numero_documento_fiscal": "603",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 545.73
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 49.05
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093614,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 49.05
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:14:05",
                "hInc": "22:35:15",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "602",
            "numero_documento_fiscal": "602",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 49.05
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 4713.53
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227104,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093616,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 4713.53
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "28/11/2023",
                "dInc": "04/07/2023",
                "hAlt": "14:53:35",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "601",
            "numero_documento_fiscal": "601",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 4713.53
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 775.41
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227230,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093618,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 775.41
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:19:19",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "599",
            "numero_documento_fiscal": "599",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 775.41
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 8185.24
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400708821,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093620,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 8185.24
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:19:47",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "598",
            "numero_documento_fiscal": "598",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 8185.24
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 9.38
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421190330,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093622,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 9.38
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:14:20",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "597",
            "numero_documento_fiscal": "597",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 9.38
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 240.12
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093624,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 240.12
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:12:22",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "596",
            "numero_documento_fiscal": "596",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 240.12
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1581.3
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093626,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1581.3
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:22:43",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "594",
            "numero_documento_fiscal": "594",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1581.3
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 201.88
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227135,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093628,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 201.88
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:00:40",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "593",
            "numero_documento_fiscal": "593",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 201.88
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 10.6
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421271620,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093630,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "04/09/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 10.6
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "20:30:56",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "592",
            "numero_documento_fiscal": "592",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 10.6
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1897.77
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421180340,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093632,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1897.77
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:46:59",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "591",
            "numero_documento_fiscal": "591",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1897.77
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 563.3
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093634,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 563.3
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:51:03",
                "hInc": "22:35:16",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "590",
            "numero_documento_fiscal": "590",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 563.3
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 44.48
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227145,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093636,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "23/12/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 44.48
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/12/2023",
                "dInc": "04/07/2023",
                "hAlt": "19:52:07",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "589",
            "numero_documento_fiscal": "589",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 44.48
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 176.8
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396691897,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093638,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 176.8
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:14:58",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "588",
            "numero_documento_fiscal": "588",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 176.8
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 90.66
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227436,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093640,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 90.66
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:35:00",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "587",
            "numero_documento_fiscal": "587",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 90.66
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 250.44
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227157,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093642,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "23/01/2024",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 250.44
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/03/2024",
                "dInc": "04/07/2023",
                "hAlt": "22:46:07",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "586",
            "numero_documento_fiscal": "586",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 250.44
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 52.8
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227160,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093644,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 52.8
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:29:38",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "585",
            "numero_documento_fiscal": "585",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 52.8
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1103.37
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421197059,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093646,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "21/09/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1103.37
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:30:42",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "583",
            "numero_documento_fiscal": "583",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1103.37
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 634.5
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093648,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 634.5
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:27:06",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "582",
            "numero_documento_fiscal": "582",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 634.5
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 79.07
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3421230179,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093650,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 79.07
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:22:14",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "581",
            "numero_documento_fiscal": "581",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 79.07
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 260.02
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227181,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093652,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "04/09/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 260.02
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "20:31:39",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "580",
            "numero_documento_fiscal": "580",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 260.02
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 107
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227184,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093654,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 107
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/11/2023",
                "dInc": "04/07/2023",
                "hAlt": "21:52:22",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "785",
            "numero_documento_fiscal": "785",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 107
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 5.76
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400707475,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093656,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 5.76
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:20:42",
                "hInc": "22:35:17",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "578",
            "numero_documento_fiscal": "578",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 5.76
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 310.1
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093658,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 310.1
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/11/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:39:16",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "577",
            "numero_documento_fiscal": "577",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 310.1
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 342.7
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093660,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "21/09/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 342.7
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:23:56",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "576",
            "numero_documento_fiscal": "576",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 342.7
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 31
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3400795126,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093662,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 31
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:34:12",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "575",
            "numero_documento_fiscal": "575",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 31
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1486.2
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093664,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1486.2
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:28:31",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "574",
            "numero_documento_fiscal": "574",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1486.2
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
                    "codigo_categoria": "1.01.99",
                    "percentual": 100,
                    "valor": 1019.35
                }
            ],
            "codigo_categoria": "1.01.99",
            "codigo_cliente_fornecedor": 3396227138,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093666,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1019.35
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:29:50",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "573",
            "numero_documento_fiscal": "573",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1019.35
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396691897,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093668,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:54:00",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "570",
            "numero_documento_fiscal": "570",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227129,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093670,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "13:53:55",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "569",
            "numero_documento_fiscal": "569",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227178,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093672,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3520933587,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/06/2025",
                "dInc": "04/07/2023",
                "hAlt": "09:47:17",
                "hInc": "22:35:18",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "numero_documento": "568",
            "numero_documento_fiscal": "568",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421271620,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093674,
            "codigo_tipo_documento": "NF",
            "data_emissao": "16/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "16/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "13:52:47",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "508",
            "numero_documento_fiscal": "508",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421194587,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093676,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "21/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:44:55",
                "hInc": "22:35:18",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "601",
            "numero_documento_fiscal": "601",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 990
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708537,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093678,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 990
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:23:37",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "600",
            "numero_documento_fiscal": "600",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 990
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227196,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093680,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "20/09/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1300
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:22:54",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "598",
            "numero_documento_fiscal": "598",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093682,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1300
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/06/2025",
                "dInc": "04/07/2023",
                "hAlt": "17:37:21",
                "hInc": "22:35:19",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "numero_documento": "597",
            "numero_documento_fiscal": "597",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421178596,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093684,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:15:05",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "596",
            "numero_documento_fiscal": "596",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396693039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093686,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:52:34",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "595",
            "numero_documento_fiscal": "595",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708380,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093688,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:10:01",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "591",
            "numero_documento_fiscal": "591",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227184,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093690,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:13:58",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "589",
            "numero_documento_fiscal": "589",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227042,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093692,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:13:27",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "588",
            "numero_documento_fiscal": "588",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227209,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093694,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:28:53",
                "hInc": "22:35:19",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "587",
            "numero_documento_fiscal": "587",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227160,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093696,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:51:05",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "586",
            "numero_documento_fiscal": "586",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421181464,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093698,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:13:28",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "585",
            "numero_documento_fiscal": "585",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227054,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093700,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/07/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:35:20",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "584",
            "numero_documento_fiscal": "584",
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227063,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093702,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:39:56",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "583",
            "numero_documento_fiscal": "583",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227045,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093704,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/07/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:35:20",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "581",
            "numero_documento_fiscal": "581",
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227012,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093706,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "20/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:37:33",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "580",
            "numero_documento_fiscal": "580",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227230,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093708,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "23:58:24",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "579",
            "numero_documento_fiscal": "579",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227078,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093710,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:45:19",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "578",
            "numero_documento_fiscal": "578",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707575,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093712,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:16:28",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "577",
            "numero_documento_fiscal": "577",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707606,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093714,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:54:21",
                "hInc": "22:35:20",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "576",
            "numero_documento_fiscal": "576",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707606,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093716,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:54:31",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "575",
            "numero_documento_fiscal": "575",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709538,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093718,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "07/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "10:11:59",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "574",
            "numero_documento_fiscal": "574",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227072,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093720,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:05:29",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "573",
            "numero_documento_fiscal": "573",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 300
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708182,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093722,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "22/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 300
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:49:21",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "571",
            "numero_documento_fiscal": "571",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 300
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227141,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093724,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:23:13",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "569",
            "numero_documento_fiscal": "569",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227193,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093726,
            "codigo_tipo_documento": "NF",
            "data_emissao": "30/06/2023",
            "data_previsao": "07/08/2023",
            "data_registro": "30/06/2023",
            "data_vencimento": "05/08/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "27/12/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:09:07",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "568",
            "numero_documento_fiscal": "568",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421192498,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093728,
            "codigo_tipo_documento": "NF",
            "data_emissao": "29/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "29/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:04:58",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "567",
            "numero_documento_fiscal": "567",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227175,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093730,
            "codigo_tipo_documento": "NF",
            "data_emissao": "28/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "28/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "14:05:53",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "566",
            "numero_documento_fiscal": "566",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3448992453,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093732,
            "codigo_tipo_documento": "NF",
            "data_emissao": "26/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "26/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "00:07:14",
                "hInc": "22:35:21",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "562",
            "numero_documento_fiscal": "562",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227039,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093734,
            "codigo_tipo_documento": "NF",
            "data_emissao": "26/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "26/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/01/2024",
                "dInc": "04/07/2023",
                "hAlt": "15:27:40",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "561",
            "numero_documento_fiscal": "561",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400795126,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093736,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "25/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:41:15",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "558",
            "numero_documento_fiscal": "558",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709446,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093738,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "25/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "21:56:53",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "557",
            "numero_documento_fiscal": "557",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400707475,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093740,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "25/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:58:09",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "556",
            "numero_documento_fiscal": "556",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400708452,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093742,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "25/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:40:00",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "555",
            "numero_documento_fiscal": "555",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3400709493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093744,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "25/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:58:39",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "554",
            "numero_documento_fiscal": "554",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1200
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227206,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093746,
            "codigo_tipo_documento": "NF",
            "data_emissao": "25/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "25/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1200
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/07/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:35:22",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "553",
            "numero_documento_fiscal": "553",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 1200
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227227,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093748,
            "codigo_tipo_documento": "NF",
            "data_emissao": "24/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "24/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:47:13",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "552",
            "numero_documento_fiscal": "552",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227224,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093750,
            "codigo_tipo_documento": "NF",
            "data_emissao": "24/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "24/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:37:47",
                "hInc": "22:35:22",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "551",
            "numero_documento_fiscal": "551",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227093,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093752,
            "codigo_tipo_documento": "NF",
            "data_emissao": "24/06/2023",
            "data_previsao": "14/08/2023",
            "data_registro": "24/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:06:12",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "550",
            "numero_documento_fiscal": "550",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227166,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093754,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "23/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "14:06:51",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "549",
            "numero_documento_fiscal": "549",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396745258,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093756,
            "codigo_tipo_documento": "NF",
            "data_emissao": "23/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "23/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:31:44",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "548",
            "numero_documento_fiscal": "548",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421195810,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093758,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "22/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "20:04:26",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "546",
            "numero_documento_fiscal": "546",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421197059,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093760,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "22/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:21:48",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "545",
            "numero_documento_fiscal": "545",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421197904,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093762,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "22/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "11/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "18:51:59",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "544",
            "numero_documento_fiscal": "544",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421230840,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093764,
            "codigo_tipo_documento": "NF",
            "data_emissao": "22/06/2023",
            "data_previsao": "31/07/2023",
            "data_registro": "22/06/2023",
            "data_vencimento": "31/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:11:32",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "543",
            "numero_documento_fiscal": "543",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421271026,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093766,
            "codigo_tipo_documento": "NF",
            "data_emissao": "21/06/2023",
            "data_previsao": "21/08/2023",
            "data_registro": "21/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "16:22:53",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "541",
            "numero_documento_fiscal": "541",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 499
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421228110,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093768,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 499
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "10/06/2025",
                "dInc": "04/07/2023",
                "hAlt": "16:54:34",
                "hInc": "22:35:23",
                "uAlt": "P000842881",
                "uInc": "P000568574"
            },
            "numero_documento": "538",
            "numero_documento_fiscal": "538",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 499
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421230179,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093772,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:23:04",
                "hInc": "22:35:23",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "536",
            "numero_documento_fiscal": "536",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421237692,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093774,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "14:02:49",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "535",
            "numero_documento_fiscal": "535",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421238006,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093776,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "05/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "19:51:52",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "534",
            "numero_documento_fiscal": "534",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421238493,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093778,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "21/08/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/01/2024",
                "dInc": "04/07/2023",
                "hAlt": "14:17:10",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "533",
            "numero_documento_fiscal": "533",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421270420,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093780,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "14:21:26",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "532",
            "numero_documento_fiscal": "532",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421270691,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093782,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "06/08/2023",
                "dInc": "04/07/2023",
                "hAlt": "15:32:13",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "531",
            "numero_documento_fiscal": "531",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227190,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093784,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "27/11/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "14/02/2024",
                "dInc": "04/07/2023",
                "hAlt": "13:49:58",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "530",
            "numero_documento_fiscal": "530",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3421185948,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093786,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "21/08/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 599
                }
            ],
            "id_conta_corrente": 3392011048,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "22/11/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:00:43",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "529",
            "numero_documento_fiscal": "529",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227163,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093788,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/07/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:35:24",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "527",
            "numero_documento_fiscal": "527",
            "status_titulo": "ATRASADO",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 999
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227233,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093790,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 999
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "20/11/2023",
                "dInc": "04/07/2023",
                "hAlt": "10:54:42",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "526",
            "numero_documento_fiscal": "526",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 999
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 1599
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227087,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093792,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "10/08/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 1599
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "12/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:13:47",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "525",
            "numero_documento_fiscal": "525",
            "status_titulo": "RECEBIDO",
            "tipo_agrupamento": "I",
            "valor_documento": 1599
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227000,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093794,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "25/10/2023",
                "dInc": "04/07/2023",
                "hAlt": "17:22:24",
                "hInc": "22:35:24",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "524",
            "numero_documento_fiscal": "524",
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
                    "codigo_categoria": "1.01.02",
                    "percentual": 100,
                    "valor": 799
                }
            ],
            "codigo_categoria": "1.01.02",
            "codigo_cliente_fornecedor": 3396227096,
            "codigo_lancamento_integracao": "",
            "codigo_lancamento_omie": 3449093796,
            "codigo_tipo_documento": "NF",
            "data_emissao": "20/06/2023",
            "data_previsao": "20/07/2023",
            "data_registro": "20/06/2023",
            "data_vencimento": "20/07/2023",
            "distribuicao": [
                {
                    "cCodDep": "3421043882",
                    "cDesDep": "Sales",
                    "nPerDep": 100,
                    "nValDep": 799
                }
            ],
            "id_conta_corrente": 3401054125,
            "id_origem": "MANR",
            "info": {
                "cImpAPI": "N",
                "dAlt": "04/07/2023",
                "dInc": "04/07/2023",
                "hAlt": "22:35:25",
                "hInc": "22:35:25",
                "uAlt": "P000568574",
                "uInc": "P000568574"
            },
            "numero_documento": "523",
            "numero_documento_fiscal": "523",
            "status_titulo": "ATRASADO",
            "tipo_agrupamento": "I",
            "valor_documento": 799
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