import styled from 'styled-components';
import InputMask from 'react-input-mask';

interface MessageProps {
  success?: boolean;
}

export const CheckoutContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(to right, #ffefba, #ffffff);
  background-position: center;
  background-size: cover;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px; /* Add padding to account for the fixed navbar height */
`;

export const CheckoutWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const CartItems = styled.div`
  margin-bottom: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.p`
  margin: 0;
`;

export const ItemQuantity = styled.p`
  margin: 0;
`;

export const ItemPrice = styled.p`
  margin: 0;
`;

export const Total = styled.div`
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #f44336;
  margin-right: 0;  // Remove the margin-right from CancelButton

  &:hover {
    background-color: #d32f2f;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Message = styled.p<MessageProps>`
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: ${(props) => (props.success ? 'green' : 'red')};
`;

export const MaskedInput = styled(InputMask)`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;
