import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';

const CartButton = (props) => {

  const dispatcher = useDispatch();
  const quantity = useSelector(state=> state.cart.quantity);

  const displayCartDispatcher = () => {
    console.log('hey I´ve been pushed');
    dispatcher(cartActions.displayCart());
  }

  return (
    <button onClick={displayCartDispatcher} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
