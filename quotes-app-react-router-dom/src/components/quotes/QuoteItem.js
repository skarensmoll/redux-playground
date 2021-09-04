import classes from './QuoteItem.module.css';
import { Link } from 'react-router-dom';

const QuoteItem = (props) => {
  return (
    <li className={classes.item}>
      {console.log(props)}
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={
        {
          pathname: `/quotes/${props.id}`,
          state: {...props}
        }
      }>View Fullscreen</Link>
    </li>
  );
};

export default QuoteItem;
