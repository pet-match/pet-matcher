import React, { Component, useState, useContext } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AppContext } from './AppContext';
// Import our Various Components
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Landing from '../pages/Landing';
import Main from '../pages/Main';

const App = () => {
  const [state, setState] = useContext(AppContext);
  // We did NOT do this right! Please tell us how you fixed it.
  return (
    <>
      <Router basename={'/'}>
        {/* Render our Landing component from the main route */}
        <Route exact path={'/'} render={() => <Landing />} />
        <Route exact path={'/signin'}>
          {/* If our logged in state is true, route to main, else sigin */}
          {state.isLoggedIn ? <Main /> : <SignIn />}
        </Route>
        <Route exact path={'/signup'} render={() => <SignUp />} />
        <Route exact path={'/main'} render={() => <Main />} />
      </Router>
    </>
  );
};

export default App;
