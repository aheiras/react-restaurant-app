import styled from "styled-components";
import { Link } from 'react-router-dom'
import { GrRestaurant } from 'react-icons/gr'
import { PiShoppingCartSimpleBold } from "react-icons/pi";

export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: center;
    font-weight: 700;
    position: relative; /* Ensure positioned children are relative to this */
`;

export const NavLink = styled(Link)`
    color: #fff;
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
    right: 10px; /* Adjusted to make space for NavCart */
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`;

export const Bars = styled(GrRestaurant)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`;

export const NavCart = styled.div`
    display: block;
    position: absolute;
    top: 10px;
    right: 140px; /* Positioned to the left of NavIcon */
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(70%, -120%);
        font-weight: bold;
        color: red;
    }
`;

export const CartIcon = styled(PiShoppingCartSimpleBold)`
    font-size: 2rem;
    transform: translate(-50%, 15%);
`;
