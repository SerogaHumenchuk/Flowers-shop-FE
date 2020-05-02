import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Contacts } from '../modules/Contacts';
import { Grid } from '../modules/Grid';
import { Main } from '../modules/Main/index';

export const Routs = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/catalog/:id" component={Grid} />
      {/* <Route path="/" component={Grid} /> */}
      {/* <Redirect to="/" /> */}
    </Switch>
  );
};
