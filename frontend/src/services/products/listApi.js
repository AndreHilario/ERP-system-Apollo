import api from '../api';

export async function listProductsApi() {
  const response = await api.get('/products');
  return response.data;
}