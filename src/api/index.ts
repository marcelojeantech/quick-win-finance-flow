
import axios from 'axios';

const api = axios.create({
	baseURL: 'https://app.omie.com.br/api/v1',
	headers: {
		'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
	},
});

export default api;
