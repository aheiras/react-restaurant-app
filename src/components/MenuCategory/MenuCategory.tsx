import React from 'react';
import {CategoryContainer} from './MenuCategoryElements'
import { MenuCategory as MenuCategoryType} from '../../models/menu';
import { useNavigate } from 'react-router-dom';

interface MenuCategoryProps {
  category: MenuCategoryType;
}



const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
    const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/menu/${category.id}/${category.name}`);
  };
  
  return (
    <CategoryContainer imageUrl={category.image} onClick={handleCategoryClick}>
      <h2>{category.name}</h2>
    </CategoryContainer>
  );
};

export default MenuCategory;
