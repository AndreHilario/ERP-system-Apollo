import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function ButtonForm({ disabled }) {

  return (
    <Button type="submit" disabled={disabled}>
      <p>Registrar</p>
    </Button>
  );
}

const Button = styled.button`
    height: 75px;
    width: 300px;
    color: #fff;
    background-color: #5482B9;
    border-radius: 10px;
    border: 1px solid #fff;
    font-size: 26px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #6167E3;
    }
`;

ButtonForm.propTypes = {
  disabled: PropTypes.bool.isRequired,
};