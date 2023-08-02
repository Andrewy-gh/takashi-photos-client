import axios from 'axios';
import { removeToken } from './authStorage';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  // baseURL: 'https://takashi-photos.fly.dev',
  withCredentials: true,
});

let token = null;

export const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

api.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = token;
      config.headers['Cache-Control'] = 'public';
      config.headers['max-age'] = '15';
      // config.headers['max-age'] = '3600';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log('response headers', response.headers);
    return response;
  },
  (error) => {
    if (error.response.data.error === 'token expired') {
      console.log('token expired');
      removeToken();
      return Promise.reject('token expired');
    }
    return Promise.reject(error);
  }
);

export default api;
