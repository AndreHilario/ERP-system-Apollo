import useDeleteProduct from "../../hooks/api/useDelete";
import { DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Delete({ id, products, setProducts }) {
    const { deleteProduct } = useDeleteProduct();

    const handleDeleteProduct = async () => {
        if (window.confirm(`O produto será apagado permanentemente`)) {
            try {
                await deleteProduct(id);
                toast.success("Produto deletado com sucesso!", {
                    style: { fontSize: 20 }
                });
                setProducts(products);
            } catch (error) {
                toast.error("Erro ao deletar este produto!", {
                    style: { fontSize: 20 }
                });
            }
        }
    }

    return (
        <DeleteOutlined onClick={() => handleDeleteProduct(id)} />
    );
}