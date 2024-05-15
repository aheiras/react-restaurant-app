import { FC } from 'react'
import { Cart, Nav, NavIcon, NavLink } from './NavbarElements';

const Navbar: FC = () => {
    
    return (
        <>
            <Nav>
                <NavLink to='/'>Tasty Bytes</NavLink>
                <NavIcon>
                    <p>Menu</p>
                    <Cart />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar