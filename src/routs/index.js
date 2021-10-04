import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn } from '../modules/Auth/components/SignIn';
import { SignUp } from '../modules/Auth/components/SignUp';
import { Contacts } from '../modules/Contacts';
import { Grid } from '../modules/Grid';
import { Main } from '../modules/Main/index';

export const Routs = () => {
  return (
    <Switch>
      <Route path="/catalog" exact component={Main} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/catalog/:id" component={Grid} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      {/* <Route path="/" component={Grid} /> */}
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};
