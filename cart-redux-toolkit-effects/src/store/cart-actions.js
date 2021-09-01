
import { globalActions } from './global';
import { cartActions } from './cart';

const API = 'https://react-my-burger-34f7d.firebaseio.com/cart.json';

export const fetchCart = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(API);

      if (!response.ok) {
        throw new Error('Could not fetch data');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log('cartData', cartData);
      dispatch(cartActions.updateCart( { products: {...cartData} } ))

    } catch (err) {
      dispatch(globalActions.showNotification({
        notification: {
          status: 'error',
          title: 'Error',
          message: 'Sending cart data failed',
        }
      }));
    }
  }
}

export const updateCart = (cart) => (dispatch) => {
  dispatch(globalActions.showNotification({
    notification: {
      status: 'pending',
      title: 'sending...',
      message: 'Sending cart data...',
    }
  }));
  (async () => {
    const response =
      await fetch(API,
        {
          method: 'PUT',
          body: JSON.stringify({ ...cart })
        });

    if (!response.ok) {
      throw new Error('Sending cart data failed');
    }

    dispatch(globalActions.showNotification({
      notification: {
        status: 'success',
        title: 'Success!',
        message: 'Data Cart sent successfully',
      }
    }))


  })().catch(error => {
    dispatch(globalActions.showNotification({
      notification: {
        status: 'error',
        title: 'Error',
        message: 'Sending cart data failed',
      }
    }));
  });
}