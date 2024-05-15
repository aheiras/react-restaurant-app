import {FC} from 'react';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import { MenuContainer } from './MenuElements';
import { GlobalStyle } from '../../globalStyles';
import Navbar from '../Navbar/Navbar';

const Menu:FC = () => {

    return (
        <>
            <GlobalStyle/>
            <MenuContainer>
                <Navbar/>
                <MenuCategoryList/>
            </MenuContainer>
        </>
      );
    };

export default Menu;