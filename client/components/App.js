import React, { Component, useState, useContext } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AppContext } from './AppContext';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Landing from '../pages/Landing';
import Main from '../pages/Main';

const App = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <>
      <Router basename={'/'}>
        <Route exact path={'/'}>
          {state.isLoggedIn ? <Main /> : <SignIn />}
        </Route>
        <Route exact path={'/signin'} render={() => <SignIn />} />
        <Route exact path={'/signup'} render={() => <SignUp />} />
        <Route exact path={'/main'} render={() => <Main />} />
      </Router>
    </>
  );
};

export default App;
