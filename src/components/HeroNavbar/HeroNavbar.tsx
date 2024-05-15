import { FC } from 'react'
import {Bars, Nav, NavIcon, NavLink} from './HeroNavbarElements'

interface HeroNavbarProps {
    toggle: () => void;
  }

const HeroNavbar: FC<HeroNavbarProps> = ({toggle}) => {
    
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

export default HeroNavbar