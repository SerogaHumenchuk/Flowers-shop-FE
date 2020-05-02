import React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import { Routs } from '../routs';
import { Header } from '../modules/Header';
import { Drawer } from '../modules/Drawer';

const App = ({ classes }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Drawer />
      <Routs />
    </div>
  );
};

export default withStyles(styles)(App);
