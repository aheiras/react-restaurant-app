import { FC, useState } from 'react'
import {Bars, CartIcon, Nav, NavCart, NavIcon, NavLink} from './HeroNavbarElements'
import { useMenuContext } from '../../context/MenuContext';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

interface HeroNavbarProps {
    toggle: () => void;
  }

const HeroNavbar: FC<HeroNavbarProps> = ({toggle}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = useMenuContext();
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };
    
    return (
        <>
            <Nav>
                <NavLink to='/'>Tasty Bytes</NavLink>
                <NavCart onClick={toggleCart}>
                    <CartIcon />
                    <p>{cartItems.length}</p>
                </NavCart>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
            {isCartOpen && <ShoppingCart />}
        </>
    )
}

export default HeroNavbar