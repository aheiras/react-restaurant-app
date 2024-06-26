import { FC, useEffect, useState } from 'react';
import { MenuCategory as MenuCategoryType} from '../../models/menu';
import MenuCategory from '../MenuCategory/MenuCategory';
import { CategoryListContainer, MenuCategoryHeading, MenuCategoryWrapper } from './MenuCategoryListElements';
import { fetchCategories } from '../../services/api';
import Spinner from '../Spinner/Spinner';


const MenuCategoryList: FC = () => {
    const [categoriesList, setCategoriesList] = useState<MenuCategoryType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchCategories().then((data) => {
          setCategoriesList(data);
        }).finally(() => {
            setLoading(false); 
        });
      }, []);
      
      if (loading) {        
        return <Spinner />; 
    }

  return (
    <CategoryListContainer>
         <MenuCategoryHeading>Categories</MenuCategoryHeading>
         <MenuCategoryWrapper>
      {categoriesList.map(category => (
        <MenuCategory key={category.id} category={category} />
      ))}
      </MenuCategoryWrapper>
    </CategoryListContainer>
  );
};

export default MenuCategoryList;
