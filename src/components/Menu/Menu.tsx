import {FC } from 'react';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import { MenuContainer } from './MenuElements';
import { GlobalStyle } from '../../globalStyles';
import { useParams } from 'react-router-dom';
import MenuItemList from '../MenuItemList/MenuItemList';
import HeroNavbar from '../HeroNavbar/HeroNavbar';

const Menu:FC = () => {
    const { categoryId, categoryName } = useParams<{ categoryId: string; categoryName: string }>();
    
    return (
        <>
            <GlobalStyle/>
            <MenuContainer>
                <HeroNavbar/>
                {categoryId ? <MenuItemList heading={categoryName ?? 'Products'} categoryId={categoryId} /> : <MenuCategoryList />}
            </MenuContainer>
        </>
      );
    };

export default Menu;