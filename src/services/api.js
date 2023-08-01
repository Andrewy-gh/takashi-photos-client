import axios from 'axios';
import { removeToken } from './authStorage';

const api = axios.create({
  baseURL: 'https://takashi-photos.fly.dev',
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
      config.headers['max-age'] = '3600';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // If the 'Clear-Token' header is present, delete the token from local storage
    if (response.headers['Clear-Token'] === 'true') {
      // localStorage.removeItem('loggedPortfolioUser'); // Replace 'your_jwt_token_key' with your actual JWT token key
      removeToken()
    }
    return response;
  },
  (error) => {
    // Handle error
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
