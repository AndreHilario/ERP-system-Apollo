import styled from "styled-components";
import PropTypes from "prop-types";

export default function ButtonForm({ disabled }) {
    
    return (
        <Button type="submit" disabled={disabled}>
            <p>Registrar</p>
        </Button>
    );
}

const Button = styled.button`
    height: 44px;
    background-color: #a9a9a9;
    border-radius: 10px;
    border: 1px solid #000;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        background-color: #3af33a;
        border: 2px solid #1414b8;
    }
`;

ButtonForm.propTypes = {
    disabled: PropTypes.bool.isRequired,
};