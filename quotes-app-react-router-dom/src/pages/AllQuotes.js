import React, {useEffect} from 'react';
import QuoteList from '../components/quotes/QuoteList';
import { useHistory, useLocation } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
  const history = useHistory();
  const location = useLocation();
  const { sendRequest,
          status,
          data: loadedQuotes,
          error } = useHttp(getAllQuotes, true);

  useEffect(() => {

    sendRequest();
  }, [sendRequest]);


  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if(error) {
    return <p className="centered focused">{error}</p>
  }

  if(status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />
  }

  const quotes = [
    {
      id: 'quote_1',
      author: 'John',
      text: 'This is John smith quote'
    },
    {
      id: 'quote_2',
      author: 'Karen',
      text: 'This is Karen quote'
    },

    {
      id: 'quote_4',
      author: 'Arquimedes',
      text: 'This is Arquimedes smith quote'
    }
  ];



  const queryParams = new URLSearchParams(location.search);
  const isAscending = queryParams.get('sort') === 'asc';
  const sortHandler = () => {

    history.push({
      pathname: location.pathname,
      search: `?sort=${isAscending ? 'desc' : 'asc'}`
    })
  };

  const sortLabel = isAscending ? 'Descending' : 'Ascending';

  const sortedQuotes = () => {

    return loadedQuotes.sort((a, b) => {
      if(a.id < b.id) {
        return  isAscending ? -1 : 1;
      }

      return isAscending ? 1 : -1;
    });
  }

  return (
    <>
    {console.log(sortedQuotes())}
      <section>
        <button onClick={sortHandler}>{sortLabel}</button>
        <hr />
        <QuoteList quotes={loadedQuotes} />
      </section>
    </>
  )
}

export default AllQuotes;