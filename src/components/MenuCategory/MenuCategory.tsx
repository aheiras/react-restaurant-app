import React from 'react';
import {CategoryContainer} from './MenuCategoryElements'
import { MenuCategory as MenuCategoryType} from '../../models/menu';

interface MenuCategoryProps {
  category: MenuCategoryType;
}



const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <CategoryContainer imageUrl={category.image}>
      {/* Display category information */}
      <h2>{category.name}</h2>
      {/* You can add more information like category image if needed */}
    </CategoryContainer>
  );
};

export default MenuCategory;
