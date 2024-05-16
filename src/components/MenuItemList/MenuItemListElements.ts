import styled from 'styled-components';

export const MenuItemsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-image: linear-gradient(to right, #ffefba, #ffffff);
    background-position: center;
    background-size: cover;
  color: #000;
`;

export const MenuItemsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;