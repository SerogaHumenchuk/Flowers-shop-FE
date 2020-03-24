import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export const View = ({ toggleDrawer, isOpen, title, classes }) => (
  <div className={classes.headerContainer}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
          edge="start"
          className={`${classes.menuButton} ${isOpen && classes.hide}`}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);
