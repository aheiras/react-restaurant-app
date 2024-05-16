import {FC, useEffect, useState} from 'react';
import MenuCategoryList from '../MenuCategoryList/MenuCategoryList';
import { MenuContainer } from './MenuElements';
import { GlobalStyle } from '../../globalStyles';
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom';
import { MenuItem as MenuItemType } from '../../models/menu';
import { fetchItemsByCategoryId } from '../../services/api';
import Spinner from '../Spinner/Spinner';
import MenuItemList from '../MenuItemList/MenuItemList';

const Menu:FC = () => {
    const { categoryId, categoryName } = useParams<{ categoryId: string; categoryName: string }>();
    const [items, setItems] = useState<MenuItemType[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        if (categoryId) {
          const fetchedItems = await fetchItemsByCategoryId(Number(categoryId));
          setItems(fetchedItems);
        }
        setLoading(false);
      };
  
      fetchData();
    }, [categoryId]);
  
    if (loading) {
      return <Spinner/>;
    }

    return (
        <>
            <GlobalStyle/>
            <MenuContainer>
                <Navbar/>
                {categoryId ? <MenuItemList heading={categoryName ?? 'Products'} items={items} /> : <MenuCategoryList />}
            </MenuContainer>
        </>
      );
    };

export default Menu;