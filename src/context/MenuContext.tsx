import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { MenuItem, MenuCategory } from '../models/menu';
import { initialMenuItems, initialMenuCategories } from '../mocks/menuData';

interface CartItem extends MenuItem {
    quantity: number;
  }

interface MenuContextType {
  menuItems: MenuItem[];
  cartItems: CartItem[];
  menuCategories: MenuCategory[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  createOrderFromCart: () => void;
}

const MenuContext = createContext<MenuContextType>({
    menuItems: [],
    cartItems: [],
    menuCategories: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    createOrderFromCart: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

interface MenuProviderProps {
    children: ReactNode;
  }

export const MenuProvider:FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>(initialMenuCategories);

  const addToCart = (item: MenuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const createOrderFromCart = () => {
    // For simplicity, just log the cart items for now
    console.log('Creating order from cart:', cartItems);
  };

  return (
    <MenuContext.Provider value={{ menuItems, cartItems, menuCategories, addToCart, removeFromCart, clearCart, createOrderFromCart }}>
      {children}
    </MenuContext.Provider>
  );
};
