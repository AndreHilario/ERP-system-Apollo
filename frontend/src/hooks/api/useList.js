import useAsync from '../useAsync';
import * as api from '../../services/products/listApi';

export default function useListProducts() {
    const {
        act: listProduct,
    } = useAsync(api.listProductsApi, false);

    return {
        listProduct,
    };
}