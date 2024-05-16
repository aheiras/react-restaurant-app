import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  top: 50px;
  right: 20px;
  width: 300px;
  padding: 20px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CartItemName = styled.span`
  font-weight: bold;
`;

export const CartItemPrice = styled.span`
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
`;

export const ClearButton = styled.button`
  background: black;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
`;

export const CheckoutButton = styled.button`
  background: green;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 10px;
  margin-left: 20px;
`;
