import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componet={SignIn} />
      <Route path="/register" exact componet={SignUp} />

      <Route path="/profile" exact componet={Profile} />
      <Route path="/dashboard" exact componet={Dashboard} />
    </Switch>
  );
}
