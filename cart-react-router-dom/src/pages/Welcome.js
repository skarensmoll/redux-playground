import React from 'react';
import { Route } from 'react-router-dom';
import NewUser from './NewUser';

const Welcome = () => {
  return (
    <>
      <h1>Hello this is the welcome page</h1>
      <Route path="/welcome/new-user">
        <NewUser />
      </Route>
    </>
  )
}

export default Welcome;