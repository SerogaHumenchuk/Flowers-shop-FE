import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Contacts } from '../modules/Contacts';
import { Grid } from '../modules/Grid';
import { Other } from '../modules/Other';

export const Routs = () => {
  return (
    <Switch>
      <Route path="/contacts" component={Contacts} />
      <Route path="/catalog" component={Grid} />
      <Route path="/catalog/Інші рослини" component={Other} />
      <Route path="/" component={Grid} />
    </Switch>
  );
};
