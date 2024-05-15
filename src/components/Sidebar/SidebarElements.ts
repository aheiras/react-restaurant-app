import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa" 

interface SidebarContainerProps {
    isOpen: boolean;
  }

export const SidebarContainer = styled.aside<SidebarContainerProps>`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #ffefba;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }

     ${({ isOpen }) => isOpen ? `
        right: 0;
    ` : `
        right: -1000px;
    `}
`;

export const CloseIcon =  styled(FaTimes)`
    color: #000;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 60px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 40px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        color: #000;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(Link)`
    background: #D4A506;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #6AA73A;
        color: #fff;
    }
`;
