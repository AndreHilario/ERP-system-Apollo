import api from '../api';

export async function deleteProductApi(id) {
  const response = await api.delete(`/products/${id}`);
  return response.data;
}