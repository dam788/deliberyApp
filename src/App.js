import './App.css';
import { GlobalStyle } from './Styles/GlobalStyle';
import { Navbar } from './components/Navbar/Navbar';
import { Orders } from './components/Orders/Orders';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Home from './routes/Home'
import  Checkout from './routes/Checkout'


function App() {
  return (
    <>
      <Router>
      <GlobalStyle />
      <Navbar />
      <Orders />   
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
