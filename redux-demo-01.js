const redux = require('./redux-playground/node_modules/redux');

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  }
}

const store = redux.createStore(counterReducer, { counter : 0 });

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });