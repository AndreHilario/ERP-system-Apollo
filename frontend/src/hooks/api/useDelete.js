import useAsync from '../useAsync';
import * as api from '../../services/products/deleteApi';

export default function useDeleteProduct() {
    const {
        loading: deleteProductLoading,
        error: deleteProductError,
        act: deleteProduct,
    } = useAsync(api.deleteProductApi, false);

    return {
        deleteProductLoading,
        deleteProductError,
        deleteProduct,
    };
}