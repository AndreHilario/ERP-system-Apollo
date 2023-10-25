import { useState } from "react";
import styled from "styled-components";
import ButtonForm from "../../components/Buttons/ButtonForm";
import useInsertProduct from "../../hooks/api/useInsert";
import Header from "../../constants/Header";
import { useNavigate } from "react-router-dom";

export default function Form() {
    const [form, setForm] = useState({ name: '', description: '', color: '', product_category: '', price: '' });
    const [disabled, setDisabled] = useState(false);

    const { name, description, color, product_category, price } = form;
    const { insertProduct } = useInsertProduct();

    const navigate = useNavigate();

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
            navigate("/");
        } catch (error) {
            alert(error.message);
            setDisabled(false);
        }
    }

    return (
        <>
            <Header />
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
                            placeholder="Description"
                            disabled={disabled}
                            required
                        />
                        <Input
                            name="color"
                            value={color}
                            type="text"
                            onChange={handleForm}
                            placeholder="Color"
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
        </>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: circular, sans-serif;
    margin-top: 30px;
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
    background-image: linear-gradient(#20aee3, #20aee3), linear-gradient(#bfbfbf, #bfbfbf);
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
    float: none;
    background-color: transparent;
    background-position: center bottom, center calc(100% - 1px);
    background-repeat: no-repeat;
    background-size: 0 2px, 100% 1px;
    padding: 0;
    transition: background 0s ease-out 0s;
    color: #bfbfbf;
    min-height: 60px;
    display: initial;
    width: 1000px;
    outline: none;
    font-size: 20px;
    &:focus {
        background-size: 100% 2px, 100% 1px;
        outline: 0 none;
        transition-duration: 0.3s;
        color: #525252;
        }
`;