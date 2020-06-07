import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import Main from '../pages/Main';
import { AppProvider } from './AppContext';

const App = () => {
  return (
    <AppProvider>
      <Switch>
        <Route exact path={'/main'} render={() => <Main />} />
        <Route exact path={'/'} render={() => <SignIn />} />
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
