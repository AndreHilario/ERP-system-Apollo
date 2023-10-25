import Header from "../../constants/Header";
import Form from "../../components/Form/Form";
import ProductsTable from "../../components/Table/ProductsTable";

export default function Home() {
    return (
        <>
            <Header />
            <Form />
            <ProductsTable />
        </>
    );
}