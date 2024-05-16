import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoBackIcon, CartIcon, Nav, NavLink } from './NavbarElements';

const Navbar: FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); //
    };

    return (
        <>
            <Nav>
                <GoBackIcon onClick={handleGoBack} />
                <NavLink to='/'>Tasty Bytes</NavLink>
                <CartIcon />
            </Nav>
        </>
    )
}

export default Navbar