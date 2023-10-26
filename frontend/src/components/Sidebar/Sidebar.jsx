import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle>Bem-vindo(a) ao sistema ERP da Apollo Solutions</SidebarTitle>
      <SidebarMain>
        <Link to="/tables">
          <SidebarTable>Veja os produtos</SidebarTable>
        </Link>
        <Link to="/register">
          <SidebarRegister>Registre seu novo produto</SidebarRegister>
        </Link>
      </SidebarMain>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
    height: 1150px;
    background-image: url(//apollosolutionsdev.com/wp-content/uploads/2022/09/Banners-scaled.jpg);
    font-family: "Poppins", Sans-serif;
`;

const SidebarTitle = styled.h2`
    color: #fff;
    font-size: 26px;
    padding: 10px 100px;
`;
const SidebarMain = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 200px;
`;

const SidebarTable = styled.button`
    font-size: 25px;
    color: #fff;
    background-color: #5482B9;
    border-radius: 100px 100px 100px 100px;
    border: 2px solid #fff;
    width: 400px;
    height: 100px;

    cursor: pointer;

    &:hover {
        background-color: #6167E3;
    }
`;

const SidebarRegister = styled.button`
    font-size: 25px;
    color: #fff;
    background-color: #5482B9;
    border-radius: 100px 100px 100px 100px;
    border: 2px solid #fff;
    width: 400px;
    height: 100px;

    cursor: pointer;

    &:hover {
        background-color: #6167E3;
    }
`;