import { FC } from 'react';
import { useMenuContext } from '../../context/MenuContext';
import { CartContainer, CartItem, CartItemName, CartItemPrice, RemoveButton, ClearButton } from './ShoppingCartElements';

const ShoppingCart: FC = () => {
  const { cartItems, removeFromCart, clearCart } = useMenuContext();

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
        </>
      )}
    </CartContainer>
  );
};

export default ShoppingCart;