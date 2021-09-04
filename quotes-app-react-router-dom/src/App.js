import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';

import Header from './components/navigation/Header';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.App_content}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes/:idQuote">
            <Quote />
          </Route>
          <Route path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
