import { FC } from 'react';
import './App.css';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/Hero';


const App: FC = () => {
  return (
    <>
        <GlobalStyle/>
        <Hero/>
    </>
  );
}

export default App;
