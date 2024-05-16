import { FC } from 'react';
import { useMenuContext } from '../../context/MenuContext';
import { useNavigate } from 'react-router-dom';
import { CartContainer, CartItem, CartItemName, CartItemPrice, RemoveButton, ClearButton, CheckoutButton } from './ShoppingCartElements';

const ShoppingCart: FC = () => {
  const { cartItems, removeFromCart, clearCart } = useMenuContext();

  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to the MenuCategoryList component
    navigate('/checkout');
}

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <CartItemName>{item.name}</CartItemName>
              <CartItemPrice>${item.price} x {item.quantity}</CartItemPrice>
              <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
          <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
          <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
        </>
      )}
    </CartContainer>
  );
};

export default ShoppingCart;