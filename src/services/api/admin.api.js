import api from './api';

const API_PREFIX = 'api';

const getHutList = async (params) => {
  const response = await api.get(`${API_PREFIX}/huts`, { params });
  return response;
};

const savingServices = async (params) => {
  console.log(params, 'params from admin api');
  const response = await api.post(`${API_PREFIX}/add-hut-service`, { params });
  console.log('error', response.data);
  return response;
};

export { getHutList, savingServices };
