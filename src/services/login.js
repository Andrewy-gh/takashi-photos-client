import api from './api';

export const getLoginUrl = async () => {
  const response = await api.get('/login');
  console.log('services', reponse);
  return response.data.url;
};
