import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Products = (props) => {

  const listProducts = useSelector(state => state.products.products);
  const dispatcher = useDispatch();
  console.log(listProducts);
  const addProductHandler = (product) => {
    dispatcher(cartActions.addProduct(product));
  }

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Object.keys(listProducts).map((key) => {
          const { title, price, description } = listProducts[key];
          return (
            <ProductItem
              key={key}
              id={key}
              title={title}
              price={price}
              description={description}
              onAdd={() => addProductHandler({
                id: key,
                product: {
                  title,
                  price,
                  description
                }
              })}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
