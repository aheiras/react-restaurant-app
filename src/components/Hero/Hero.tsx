import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeroNavbar from '../HeroNavbar/HeroNavbar'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'
import Sidebar from '../Sidebar/Sidebar'

const Hero: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate();

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const handleOrderClick = () => {
        // Navigate to the MenuCategoryList component
        navigate('/menu/categories');
    }

    return (
        <HeroContainer>
            <HeroNavbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Welcome to Tasty Bytes!</HeroH1>
                    <HeroP>Irresistible dishes and cozy ambiance for an unforgettable experience</HeroP>
                    <HeroBtn onClick={handleOrderClick}>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero