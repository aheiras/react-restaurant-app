import { FC, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMenuContext } from '../../context/MenuContext';
import { simulatePayment } from '../../services/api';
import { Button, CartItem, CartItems, CheckoutContainer, CheckoutWrapper, Form, Input, ItemName, ItemPrice, Label, Message, Title, MaskedInput, Total, ItemDetails, ItemQuantity, CancelButton, ButtonGroup } from './CheckoutElements';
import { GlobalStyle } from '../../globalStyles';
import Spinner from '../Spinner/Spinner';
import Swal from 'sweetalert2';
import HeroNavbar from '../HeroNavbar/HeroNavbar';

const Checkout: FC = () => {
  const { cartItems, createOrderFromCart, clearCart } = useMenuContext();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failure'>('pending');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handlePaymentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // Simulate payment processing
    try {
      await simulatePayment();
      createOrderFromCart(); 
      setPaymentStatus('success');
      setLoading(false); 
      Swal.fire({
        title: 'Payment successful!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        clearCart();
        navigate('/');
      });
    } catch (error) {
      setPaymentStatus('failure');
      setLoading(false); 
      Swal.fire({
        title: 'Payment failed',
        text: 'Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/checkout');
      });
    }
  };

  const totalAmount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  return (
    <>
      <GlobalStyle/>
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
              <CancelButton type="button" onClick={() => navigate('/')}>Cancel Order</CancelButton>
            </ButtonGroup>
          </Form>
          {loading && <Spinner />}
          {paymentStatus === 'success' && <Message success>Payment successful!</Message>}
          {paymentStatus === 'failure' && <Message>Payment failed. Please try again.</Message>}
        </CheckoutWrapper>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
