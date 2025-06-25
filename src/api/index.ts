
import axios from 'axios';
// import env from 'config/env';
// import { auth } from 'config/firebaseConfig';

const api = axios.create({
	baseURL: 'https://app.omie.com.br/api/v1',
	headers: {
		'Content-Type': 'application/json',
	},
});

// curl -s https://app.omie.com.br/api/v1/financas/contareceber/ \
//  -H 'Content-type: application/json' \
//  -d '{"call":"ListarContasReceber","param":[{"pagina":1,"registros_por_pagina":100,"apenas_importado_api":"N"}],"app_key":"#APP_KEY#","app_secret":"#APP_SECRET#"}'


// omie_api.interceptors.request.use(
// 	async (config) => {
//     // const idToken = await auth.currentUser?.getIdToken();
//     // if (idToken) {
//     //   config.headers['Authorization'] = `Bearer ${idToken}`;
//     // }
//     return config
//   },
// 	(error) => {
// 		return Promise.reject(error);
// 	}
// );

export default api;
