import {FC} from 'react';
import { MenuItem as MenuItemType } from '../../models/menu';
import { ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './MenuItemElements';
import { useMenuContext } from '../../context/MenuContext';

interface MenuItemProps {
    product: MenuItemType;
  }

const MenuItem:FC<MenuItemProps> = ({ product }) => {
    const { addToCart } = useMenuContext();

    return (
        <ProductCard key={product.id}>
        <ProductImg src={product.image} alt={product.name} />
        <ProductInfo>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductDesc>{product.description}</ProductDesc>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductButton onClick={() => addToCart(product)}>Add to Cart</ProductButton>
        </ProductInfo>
      </ProductCard>
      );
    };

export default MenuItem;