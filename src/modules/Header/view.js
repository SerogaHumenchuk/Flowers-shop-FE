import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export const View = ({ toggleDrawer, isOpen, title, classes }) => (
  <div className={classes.headerContainer}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center" wrap="wrap">
          <Button
            color="primary"
            onClick={() => toggleDrawer(true)}
            className={classes.catalogBtn}
          >
            <Grid container wrap="nowrap" alignItems="center">
              <KeyboardArrowLeftIcon className={classes.btnIcon} />
              <Typography className={classes.btnText}>Каталог</Typography>
            </Grid>
          </Button>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);
