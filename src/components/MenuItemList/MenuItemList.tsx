import {FC, useEffect, useState} from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { MenuItem as MenuItemType } from '../../models/menu';
import { MenuItemsContainer, MenuItemsHeading, MenuItemsWrapper } from './MenuItemListElements';
import { fetchFeaturedItems, fetchItemsByCategoryId } from '../../services/api';
import Spinner from '../Spinner/Spinner';

interface MenuItemListProps {
    heading: string;
    categoryId: string;
  }

const MenuItemList:FC<MenuItemListProps> = ({ heading, categoryId }) => {
    const [items, setItems] = useState<MenuItemType[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        if (categoryId) {
            let fetchedItems:MenuItemType[] = [];
            if(categoryId === 'FP') {
                fetchedItems = await fetchFeaturedItems();
            }else{
                fetchedItems = await fetchItemsByCategoryId(Number(categoryId));
            }
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
        <MenuItemsContainer>
            <MenuItemsHeading>{heading}</MenuItemsHeading>
            <MenuItemsWrapper>
                {items.map((item) => (
                <MenuItem key={item.id} product={item} />
                ))}
            </MenuItemsWrapper>
        </MenuItemsContainer>
      );
    };

export default MenuItemList;