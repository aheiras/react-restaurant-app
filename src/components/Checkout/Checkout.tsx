import { FC, useState, FormEvent } from 'react';
import { useMenuContext } from '../../context/MenuContext';
import { simulatePayment } from '../../services/api';

const Checkout: FC = () => {
  const { cartItems, createOrderFromCart } = useMenuContext();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failure'>('pending');

  const handlePaymentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Simulate payment processing
    try {
      console.log('rtest');
      await simulatePayment();
      createOrderFromCart(); // Create order from cart items
      setPaymentStatus('success');
    } catch (error) {
        console.error('Error occurred during payment:', error);
      setPaymentStatus('failure');
    }
  };

  console.log('paymentStatus:', paymentStatus);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {/* Display cart items */}
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handlePaymentSubmit}>
        {/* Payment form fields */}
        {/* Card number, expiration date, CVV, billing address, etc. */}
        <button type="submit">Complete Purchase</button>
      </form>
      {/* Display payment status */}
      {paymentStatus === 'success' && <p>Payment successful!</p>}
      {paymentStatus === 'failure' && <p>Payment failed. Please try again.</p>}
    </div>
  );
};

export default Checkout;