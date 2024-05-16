import {FC} from 'react';
import MenuItem from '../MenuItem/MenuItem';
import { MenuItem as MenuItemType } from '../../models/menu';
import { MenuItemsContainer, MenuItemsHeading, MenuItemsWrapper } from './MenuItemListElements';

interface MenuItemListProps {
    heading: string;
    items: MenuItemType[];
  }

const MenuItemList:FC<MenuItemListProps> = ({ heading, items }) => {

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