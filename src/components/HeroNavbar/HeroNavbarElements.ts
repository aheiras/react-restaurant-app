import styled from "styled-components";
import { Link } from 'react-router-dom';
import { GrRestaurant } from 'react-icons/gr';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { FaArrowLeft } from 'react-icons/fa';

interface ShowGoBackIconProps {
    showGoBackIcon: boolean;
}

interface HideCartIconProps {
    hideShoppingCartIcon: boolean;
}

export const Nav = styled.nav<ShowGoBackIconProps>`
  background: ${(props) => (props.showGoBackIcon ? 'linear-gradient(to right, #ffefba, #ffffff)' : '#0d0909' )};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const NavLink = styled(Link)<ShowGoBackIconProps>`
color: ${(props) => (props.showGoBackIcon ? '#000' : '#fff')};
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const NavCart = styled.div<HideCartIconProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1.5rem;
  visibility: ${(props) => (props.hideShoppingCartIcon ? 'hidden' : 'visible')};

  p {
    margin-left: 0.5rem;
    font-weight: bold;
    color: red;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-left: 0.3rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const CartIcon = styled(PiShoppingCartSimpleBold)<ShowGoBackIconProps>`
  color: ${(props) => (props.showGoBackIcon ? '#000' : '#fff')};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const NavIcon = styled.div<ShowGoBackIconProps>`
  color: ${(props) => (props.showGoBackIcon ? '#000' : '#fff')};
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    margin-left: 0.5rem;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-left: 0.3rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export const Bars = styled(GrRestaurant)`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const GoBackIcon = styled(FaArrowLeft)`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
