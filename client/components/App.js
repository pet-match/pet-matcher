import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path={'/'} render={() => <SignIn />} />
          <Route exact path={'/main'} render={() => <Main />} />
          <Route exact path={'/signup'} render={() => <SignUp />} />
          {/* <Route exact path={'/signin'} component={SignIn} /> */}
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;

/*
<Route
  path='/dashboard'
  render={(props) => <Dashboard props ={...props} testProp={'hi''} />}
/>
*/
