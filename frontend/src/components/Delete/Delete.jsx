import useDeleteProduct from "../../hooks/api/useDelete";
import { DeleteOutlined } from "@ant-design/icons";

export default function Delete({ id, products, setProducts }) {
    const { deleteProduct } = useDeleteProduct();

    const handleDeleteProduct = async () => {
        if (window.confirm(`O produto será apagado permanentemente`)) {
            try {
                await deleteProduct(id);
                setProducts(products);
            } catch (error) {
                alert(error.response.data);
            }
        }
    }

    return (
        <DeleteOutlined onClick={() => handleDeleteProduct(id)} />
    );
}