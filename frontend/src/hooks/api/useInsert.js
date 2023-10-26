import useAsync from '../useAsync';
import * as api from '../../services/products/insertApi';

export default function useInsertProduct() {
  const {
    act: insertProduct,
  } = useAsync(api.insertProductApi, false);

  return {
    insertProduct,
  };
}