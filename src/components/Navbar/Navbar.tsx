import { FC } from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements'

interface NavbarProps {
    toggle: () => void;
  }

const Navbar: FC<NavbarProps> = ({toggle}) => {
    
    return (
        <>
            <Nav>
                <NavLink to='/'>Tasty Bytes</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar