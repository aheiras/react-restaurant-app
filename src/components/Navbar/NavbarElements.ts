import styled from "styled-components";
import { Link } from 'react-router-dom'
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaArrowLeft } from 'react-icons/fa';

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

export const GoBackIcon = styled(FaArrowLeft)`
  font-size: 2rem;
  position: absolute;
  left: 10px;
  transform: translate(50%, 30%);
  cursor: pointer;
  color: #000;
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
  display: flex;
  right: 10px;
  align-items: center;
  cursor: pointer;
  position: absolute;

  p {
    margin-left: 5px;
    transform: translate(-100%, 40%);
    font-weight: bold;
    color: red;
  }
`;

export const CartIcon = styled(PiShoppingCartSimpleBold)`
    font-size: 2rem;
    transform: translate(-50%, 30%);
    color: #000;
`;
