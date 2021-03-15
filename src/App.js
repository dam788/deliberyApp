import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { Menu } from './components/Menu/Menu';
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { useOpenFood } from './hooks/useOpenFood';
import { Orders } from './components/Orders/Orders';

function App() {
  const openFood = useOpenFood();

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} />
      <Navbar />
      <Orders />
      <Banner>
        <h1>La mejor comida del Valle</h1>
        <p>Pedi Fácil y Rápido!</p>
      </Banner>
      <Menu {...openFood} />
    </>
  );
}

export default App;
