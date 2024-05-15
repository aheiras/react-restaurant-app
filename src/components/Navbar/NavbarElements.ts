import styled from "styled-components";
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: center;
    font-weight: 700;
    margin-bottom: 30px;

    @media screen and (max-width: 400px) {
        margin-bottom: 60px;
    }
`;

export const NavLink = styled(Link)`
    color: #000;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #000;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Cart = styled(PiShoppingCartSimpleBold)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;
