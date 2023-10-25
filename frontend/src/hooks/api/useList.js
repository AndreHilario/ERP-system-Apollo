import useAsync from '../useAsync';
import * as api from '../../services/products/listApi';

export default function useListProducts() {
    const {
        loading: listProductLoading,
        error: listProductError,
        act: listProduct,
    } = useAsync(api.listProductsApi, false);

    return {
        listProductLoading,
        listProductError,
        listProduct,
    };
}