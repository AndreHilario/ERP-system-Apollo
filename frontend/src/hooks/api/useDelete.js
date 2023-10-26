import useAsync from '../useAsync';
import * as api from '../../services/products/deleteApi';

export default function useDeleteProduct() {
  const {
    act: deleteProduct,
  } = useAsync(api.deleteProductApi, false);

  return {
    deleteProduct,
  };
}