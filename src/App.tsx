import { FC, useEffect, useState } from 'react';
import './App.css';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';
import MenuItemList from './components/MenuItemList/MenuItemList';
import { MenuItem as MenuItemType } from './models/menu';
import { fetchFeaturedItems } from './services/api';
import Spinner from './components/Spinner/Spinner';


const App: FC = () => {
    const [items, setItems] = useState<MenuItemType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeaturedItems().then((data) => {
          setItems(data);
          setLoading(false);
        });
      }, []);

      if (loading) {
        return <Spinner />;
      }

  return (
    <>
        <GlobalStyle/>
        <Hero/>
        <MenuItemList heading='Check our featured products' items={items} />
    </>
  );
}

export default App;
