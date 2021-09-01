import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import Notification from './components/UI/Notification';
import { updateCart, fetchCart } from './store/cart-actions';

let isInitial = true;

function App() {
  const cart = useSelector(state => state.cart.products);
  const notification = useSelector(state => state.global.notification)
  const dispatch = useDispatch();

  useEffect( ()=> {
    dispatch(fetchCart());
  }  ,[dispatch])

  useEffect(() => {
    if (isInitial) { isInitial = false; return; }
    dispatch(updateCart(cart))

  }, [cart, dispatch])

  return (
    <Fragment>
      {console.log(notification)}
      {notification &&
        <Notification {...notification}></Notification>
      }
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
