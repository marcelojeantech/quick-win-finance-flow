
// Configuration to switch between real and mock Omie API
export const API_CONFIG = {
  USE_MOCK_OMIE: import.meta.env.VITE_USE_MOCK_OMIE === 'true',
  OMIE: {
    APP_KEY: import.meta.env.VITE_OMIE_APP_KEY,
    APP_SECRET: import.meta.env.VITE_OMIE_APP_SECRET,
    BASE_URL: import.meta.env.VITE_OMIE_BASE_URL,
  },
  NODE_ENV: import.meta.env.VITE_NODE_ENV,
};

export const isMockMode = () => API_CONFIG.USE_MOCK_OMIE;
export default API_CONFIG;