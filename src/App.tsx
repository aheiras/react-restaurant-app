import { FC } from 'react';
import './App.css';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';
import MenuItemList from './components/MenuItemList/MenuItemList';
import Footer from './components/Footer/Footer';


const App: FC = () => {
  return (
    <>
        <GlobalStyle/>
        <Hero/>
        <MenuItemList heading='Check our featured products' categoryId='FP'/>
        <Footer />
    </>
  );
}

export default App;
