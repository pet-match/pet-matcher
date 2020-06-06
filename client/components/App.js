import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './SignIn';

const App = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={SignIn} />
    </Switch>
  );
};

export default App;
