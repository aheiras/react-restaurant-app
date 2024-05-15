import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { MenuItem, MenuCategory } from '../models/menu';
import { initialMenuItems, initialMenuCategories } from '../mocks/menuData';

interface MenuContextType {
  menuItems: MenuItem[];
  cartItems: MenuItem[];
  menuCategories: MenuCategory[];
  addToCart: (item: MenuItem) => void;
  createOrderFromCart: () => void;
}

const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  cartItems: [],
  menuCategories: [],
  addToCart: () => {},
  createOrderFromCart: () => {},
});

export const useMenuContext = () => useContext(MenuContext);

interface MenuProviderProps {
    children: ReactNode;
  }

export const MenuProvider:FC<MenuProviderProps> = ({ children }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const [cartItems, setCartItems] = useState<MenuItem[]>([]);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>(initialMenuCategories);

  const addToCart = (item: MenuItem) => {
    setCartItems([...cartItems, item]);
  };

  const createOrderFromCart = () => {
    // For simplicity, just log the cart items for now
    console.log('Creating order from cart:', cartItems);
  };

  return (
    <MenuContext.Provider value={{ menuItems, cartItems, menuCategories, addToCart, createOrderFromCart }}>
      {children}
    </MenuContext.Provider>
  );
};
