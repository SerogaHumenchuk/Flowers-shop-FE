import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

// import MenuIcon from '@material-ui/icons/Menu';
// import IconButton from '@material-ui/core/IconButton';

export const View = ({ toggleDrawer, isOpen, title: {price, title}, classes }) => (
  <div className={classes.headerContainer}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
      <Grid container justify='space-between' alignItems='center' wrap='wrap'> 
        <Button color="primary" onClick={() => toggleDrawer(true)} className={classes.catalogBtn}>
          <Grid container wrap='nowrap' alignItems='center'>
            <KeyboardArrowLeftIcon className={classes.btnIcon}/>
            <Typography className={classes.btnText}>Каталог</Typography>
          </Grid>
        </Button>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => toggleDrawer(true)}
          edge="start"
          className={`${classes.menuButton} ${isOpen && classes.hide}`}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      </Toolbar>
    </AppBar>
  </div>
);
