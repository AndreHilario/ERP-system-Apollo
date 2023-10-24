import api from '../api';

export async function insertProductApi(body) {
    const response = await api.post(`/products`, body);
    return response.data;
}