import { useEffect, useState } from "react";
import { Button, Space, Table } from 'antd';
import useListProducts from "../../hooks/api/useList";
import { formatCurrency } from "../../helpers/formatCurrency";

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
                sorter: (a, b) => a[key] - b[key],
                sortOrder: sortedInfo.columnKey === key ? sortedInfo.order : null,
                ellipsis: true,
                render: (text, record) => {
                    if (key === 'price' || key === 'promotional_price') {
                        return formatCurrency(record[key]);
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
            <Space
                style={{
                    marginBottom: 16,
                }}
            >
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table
                style={{ backgroundColor: 'lightblue' }}
                columns={columns}
                dataSource={products}
                onChange={handleChange}
            />
        </>
    );
}