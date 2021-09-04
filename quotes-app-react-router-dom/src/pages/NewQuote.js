import React, { useEffect } from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';
import { useHistory } from 'react-router-dom';


const NewQuote = ()=> {
  const {sendRequest, status} = useHttp(addQuote);
  const history =  useHistory();


  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  }

  useEffect(() => {
    if(status === 'completed') {
      history.push('/quotes')
    }
  }, [status, history]);


  return (<QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} isLoading={false} />)
}

export default NewQuote;