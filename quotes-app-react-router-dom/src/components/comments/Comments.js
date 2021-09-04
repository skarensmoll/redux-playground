import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';


const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const history = useHistory();

  const startAddCommentHandler = () => {
    history.push('/');
    setIsAddingComment(true);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
      <p>Comments...</p>
    </section>
  );
};

export default Comments;
