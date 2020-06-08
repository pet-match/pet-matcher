import React, { Component } from 'react';
// import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Landing from '../pages/Landing';
import Main from '../pages/Main';

const App = () => {
  return (
    <AppProvider>
      {/* <Router> */}
        <Switch>
          <Route exact path={'/'} render={() => <Landing />} />
          <Route exact path={'/signin'} render={() => <SignIn />} />
          <Route exact path={'/signup'} render={() => <SignUp />} />
          <Route exact path={'/main'} render={() => <Main />} />
          {/* <Route exact path={'/signin'} component={SignIn} /> */}
        </Switch>
      {/* </Router> */}
    </AppProvider>
  );
};

export default App;
