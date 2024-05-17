import { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Bars, CartIcon, Nav, NavCart, NavIcon, NavLink, GoBackIcon } from './HeroNavbarElements';
import { useMenuContext } from '../../context/MenuContext';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

interface HeroNavbarProps {
  toggle?: () => void;
}

const HeroNavbar: FC<HeroNavbarProps> = ({ toggle = () => {} }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useMenuContext();
  const location = useLocation();
  const navigate = useNavigate();

  const showGoBackIcon = location.pathname !== '/';
  const hideShoppingCartIcon = location.pathname === '/checkout';

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Nav showGoBackIcon={showGoBackIcon}>
        {showGoBackIcon ? (
        //   <GoBackIcon onClick={handleGoBack} />
          <NavIcon onClick={handleGoBack} showGoBackIcon={showGoBackIcon}>
            <GoBackIcon />
          </NavIcon>
        ) : (
          <NavIcon onClick={toggle} showGoBackIcon={showGoBackIcon}>
            <Bars />
            <p>Menu</p>
          </NavIcon>
        )}
        <NavLink to='/' showGoBackIcon={showGoBackIcon}>Tasty Bytes</NavLink >
        <NavCart onClick={toggleCart} hideShoppingCartIcon={hideShoppingCartIcon}>
          <CartIcon showGoBackIcon={showGoBackIcon}/>
          <p>{cartItems.length}</p>
        </NavCart>
      </Nav>
      {isCartOpen && <ShoppingCart />}
    </>
  );
}

export default HeroNavbar;
