import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Cart = (props) => {

  const displayCart = useSelector(state => state.cart.displayCart);
  const products = useSelector(state => state.cart.products);
  const dispatcher = useDispatch();

  const addQuantityHandler = (idProd, quantity) => {
    dispatcher(cartActions.addQuantityProd( { idProd, quantity }))
  }


  return (
    <>
      {displayCart &&
        (<Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            {
              Object.keys(products).map(idProd => (
                <CartItem
                  key={idProd}
                  item={products[idProd]}
                  onAdd={(quantity) => addQuantityHandler(idProd, quantity)}
                />
              ))
            }
          </ul>
        </Card>)
      }
    </>
  );
};

export default Cart;
