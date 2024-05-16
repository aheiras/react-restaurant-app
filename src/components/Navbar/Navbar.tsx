import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoBackIcon, CartIcon, Nav, NavLink, NavIcon } from './NavbarElements';
import { useMenuContext } from '../../context/MenuContext';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Navbar: FC = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartItems } = useMenuContext();
    const navigate = useNavigate();
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
      };

    const handleGoBack = () => {
      navigate(-1); //
    };

    return (
        <>
            <Nav>
                <GoBackIcon onClick={handleGoBack} />
                <NavLink to='/'>Tasty Bytes</NavLink>
                <NavIcon onClick={toggleCart}>
                    <CartIcon />
                    <p>{cartItems.length}</p>
                </NavIcon>
            </Nav>
            {isCartOpen && <ShoppingCart />}
        </>
    )
}

export default Navbar