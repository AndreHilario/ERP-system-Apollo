import { useState } from "react";
import styled from "styled-components";
import ButtonForm from "../Buttons/ButtonForm";
import useInsertProduct from "../../hooks/api/useInsert";

export default function Form() {
    const [form, setForm] = useState({ name: '', description: '', color: '', product_category: '', price: '' });
    const [disabled, setDisabled] = useState(false);

    const { name, description, color, product_category, price } = form;
    const { insertProduct } = useInsertProduct();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function getProductInfos(e) {
        e.preventDefault();
        setDisabled(true);

        try {
            const body = {
                name,
                description,
                color,
                product_category,
                price: Number(price)
            };
            await insertProduct(body);
            setDisabled(false);
        } catch (error) {
            alert(error.message);
            setDisabled(false);
        }
    }

    return (
        <FormContainer>
            <FormControlWrapper>
                <FormControl onSubmit={getProductInfos}>
                    <Input
                        name="name"
                        value={name}
                        type="text"
                        onChange={handleForm}
                        placeholder="Name"
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="description"
                        value={description}
                        type="text"
                        onChange={handleForm}
                        placeholder="description"
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="color"
                        value={color}
                        type="text"
                        onChange={handleForm}
                        placeholder="color"
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="product_category"
                        value={product_category}
                        type="text"
                        onChange={handleForm}
                        placeholder="Product_category"
                        disabled={disabled}
                        required
                    />
                    <Input
                        name="price"
                        value={price}
                        type="number"
                        onChange={handleForm}
                        placeholder="Price"
                        disabled={disabled}
                        required
                    />
                    <ButtonForm disabled={disabled} />
                </FormControl>
            </FormControlWrapper>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: circular, sans-serif;
`;

const FormControlWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FormControl = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const Input = styled.input`
    width: 220px;
    height: 40px;
    border: 1px solid #666;
    border-radius: 10px;
    margin-right: 10px;
    font-size: 18px;
    outline: none;

    &:focus {
        border: 2px solid #1414b8;
    }
`;