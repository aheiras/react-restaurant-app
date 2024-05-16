import styled from 'styled-components';

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #D4A506;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #D4A506;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #6AA73A;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;