import { FC, useMemo, useState } from 'react';
import { useMenuContext } from '../../context/MenuContext';
import { simulatePayment } from '../../services/api';
import {
  Button,
  CartItem,
  CartItems,
  CheckoutContainer,
  CheckoutWrapper,
  Form,
  Input,
  ItemName,
  ItemPrice,
  Label,
  Message,
  Title,
  MaskedInput,
  Total,
  ItemDetails,
  ItemQuantity,
  CancelButton,
  ButtonGroup
} from './CheckoutElements';
import { GlobalStyle } from '../../globalStyles';
import { useNavigate } from 'react-router-dom';
import HeroNavbar from '../HeroNavbar/HeroNavbar';

const Checkout: FC = () => {
  const { cartItems, createOrderFromCart, clearCart } = useMenuContext();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failure'>('pending');
  const navigate = useNavigate();

  const handlePaymentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Simulate payment processing
    try {
      await simulatePayment();
      createOrderFromCart(); // Create order from cart items
      setPaymentStatus('success');
    } catch (error) {
      // Handle payment failure
      setPaymentStatus('failure');
    }
  };

  const handleCancelOrder = () => {
    clearCart();
    navigate('/');
  };

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  return (
    <>
      <GlobalStyle />
      <CheckoutContainer>
      <HeroNavbar />
        <CheckoutWrapper>
          <Title>Checkout</Title>
          <CartItems>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
                </ItemDetails>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </CartItem>
            ))}
            <Total>Total: ${totalAmount}</Total>
          </CartItems>
          <Form onSubmit={handlePaymentSubmit}>
            <Label htmlFor="cardNumber">Card Number</Label>
            <MaskedInput
              mask="9999 9999 9999 9999"
              placeholder="1234 5678 9012 3456"
              id="cardNumber"
              name="cardNumber"
              required
            />

            <Label htmlFor="expirationDate">Expiration Date</Label>
            <MaskedInput
              mask="99/99"
              placeholder="MM/YY"
              id="expirationDate"
              name="expirationDate"
              required
            />

            <Label htmlFor="cvv">CVV</Label>
            <MaskedInput
              mask="999"
              placeholder="123"
              id="cvv"
              name="cvv"
              required
            />

            <Label htmlFor="billingAddress">Billing Address</Label>
            <Input
              type="text"
              id="billingAddress"
              name="billingAddress"
              placeholder="123 Main St, Apt 4B"
              required
            />

            <ButtonGroup>
              <Button type="submit">Complete Purchase</Button>
              <CancelButton type="button" onClick={handleCancelOrder}>Cancel Order</CancelButton>
            </ButtonGroup>
          </Form>
          {paymentStatus === 'success' && <Message success>Payment successful!</Message>}
          {paymentStatus === 'failure' && <Message>Payment failed. Please try again.</Message>}
        </CheckoutWrapper>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
