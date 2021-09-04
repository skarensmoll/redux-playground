import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact >
          <Product />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
