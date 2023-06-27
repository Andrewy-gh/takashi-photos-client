import axios from 'axios';

const api = axios.create({
  baseURL: 'https://takashi-photos-api.onrender.com',
  withCredentials: true,
});

let token = null;

export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = token;
      config.headers['Cache-Control'] = 'public';
      config.headers['max-age'] = '3600';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
