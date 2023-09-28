import api from './api';

const checkSetup = async () => {
  const res = await api.get('/api/config/setup');
  return res.data;
};

const checkAdmin = async () => {
  const res = await api.get('/api/config/admin');
  return res.data;
};

const createAdmin = async (credentials) => {
  const res = await api.post('/api/config/admin', credentials);
  return res.data;
};

const createImageOrder = async () => {
  const res = await api.post('/api/config/imageOrder');
  return res.data;
};

export default {
  checkSetup,
  checkAdmin,
  createAdmin,
  createImageOrder,
};
