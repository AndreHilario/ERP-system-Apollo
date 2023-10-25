import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderContainer>
            <BackGround>
                <Title>
                    <Link to="/">
                        APOLLO SOLUTIONS - ERP system
                    </Link>
                </Title>
            </BackGround>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    font-size: 30px;
`;

const BackGround = styled.div`
    background-color: #030322;
    box-shadow: 0 0 33px 0 rgba(0,0,0,.2);
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    a {
        text-decoration: none; 
        color: #fff;
        font-family: cursive;
    }

`;
