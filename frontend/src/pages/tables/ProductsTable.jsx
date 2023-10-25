import { useEffect, useState } from "react";
import { Button, Space, Table } from 'antd';
import useListProducts from "../../hooks/api/useList";
import { formatCurrency } from "../../helpers/formatCurrency";
import Header from "../../constants/Header";
import Delete from "../../components/Delete/Delete";
import styled from "styled-components";
import { FontSizeOutlined } from "@ant-design/icons";

export default function ProductsTable() {
    const [products, setProducts] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const { listProduct } = useListProducts();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allProducts = await listProduct();
                setProducts(allProducts);
            } catch (error) {
                alert(error.response.data);
            }
        }
        fetchData();
    }, [products]);

    const handleChange = (_pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const columns = products.length > 0
        ? Object.keys(products[0])
            .filter(key => key !== 'id' && key !== 'createdAt' && key !== 'updatedAt')
            .map(key => ({
                title: key.toUpperCase(),
                dataIndex: key,
                key,
                sorter: (a, b) => {
                    if (!isNaN(a[key]) && !isNaN(b[key])) {
                        return Number(a[key]) - Number(b[key]);
                    } else {
                        return a[key].localeCompare(b[key]);
                    }
                },
                sortOrder: sortedInfo.columnKey === key ? sortedInfo.order : null,
                ellipsis: true,
                render: (text, record) => {
                    if (key === 'price' || key === 'promotional_price') {
                        return formatCurrency(record[key]);
                    } else if (key === 'name') {
                        return (
                            <>
                                <span>{text}</span><br />
                                <Delete id={record.id} products={products} setProducts={setProducts} />
                            </>
                        );
                    }
                    return text;
                },
                ...(key === 'name' || key === 'product_category'
                    ? {
                        filters: [...new Set(products.map(item => item[key]))].map(value => ({
                            text: value,
                            value: value
                        })),
                        filteredValue: filteredInfo[key] || null,
                        onFilter: (value, record) => record[key].includes(value),
                    }
                    : {}),
            }))
        : [];

    return (
        <>
            <Header />
            <Space
                style={{
                    marginBottom: 16,
                    marginTop: 20
                }}
            >
                <StyledButton onClick={clearFilters}>Limpar filtros</StyledButton>
                <StyledButton onClick={clearAll}>Limpar tudo</StyledButton>
            </Space>
            <Table
                columns={columns}
                dataSource={products}
                onChange={handleChange}
                bordered
            />
        </>
    );
}

const StyledButton = styled(Button)`
    font-size: 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

