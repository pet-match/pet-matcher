import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppProvider } from './AppContext';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import Main from '../pages/Main';

const App = () => {
  return (
    <AppProvider>
      <Switch>
        <Route exact path={'/'} render={() => <Landing />} />
        <Route exact path={'/signin'} render={() => <SignIn />} />
        <Route exact path={'/main'} render={() => <Main />} />
        {/* <Route exact path={'/signin'} component={SignIn} /> */}
      </Switch>
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
