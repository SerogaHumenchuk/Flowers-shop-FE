import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid, Button, Tabs, Tab } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { navigation } from '../../configs/navigation';

export const View = ({ toggleDrawer, width, classes }) => {
  const [currentTub, setCurrentTub] = useState(navigation.catalog);

  const handleTab = (event, newValue) => {
    setCurrentTub(newValue);
  };

  const renderMobileHeader = () =>
    <Grid container justify="space-between" alignItems="center" wrap="wrap">
      <Button
        color="primary"
        onClick={() => toggleDrawer(true)}
        className={classes.catalogBtn}
      >
        <Grid container wrap="nowrap" alignItems="center">
          <KeyboardArrowLeftIcon className={classes.btnIcon}/>
          <Typography className={classes.btnText}>Меню</Typography>
        </Grid>
      </Button>
      <Button
        color="primary"
        onClick={() => {
        }}
        className={classes.catalogBtn}
      >
        <Grid container wrap="nowrap" alignItems="center">
          <Typography className={classes.btnText}>Корзина</Typography>
        </Grid>
      </Button>
    </Grid>;

  const renderDesktopHeader = () =>
    <Grid container justify='space-around' alignItems='center'>
      <Tabs
        value={currentTub}
        onChange={handleTab}
        // indicatorColor="secondary"
        // textColor="secondary"
        centered
        className={classes.tabs}
      >
        {Object.entries(navigation).map(([urlParam, { label }], index) =>
          <Tab
            className={classes.tab}
            label={
              <Link to={`/${urlParam}`} className={classes.link}>{label}</Link>
            }
          />,
        )}
      </Tabs>
      <Button
        color="primary"
        onClick={() => {
        }}
        className={classes.catalogBtn}
      >
        <Grid container wrap="nowrap" alignItems="center">
          <Typography className={classes.btnText}>Корзина</Typography>
        </Grid>
      </Button>
    </Grid>;


  const renderContent = () => {
    const isMobile = width === 'xs';
    return isMobile ? renderMobileHeader() : renderDesktopHeader();
  };


  return (
    <div className={classes.headerContainer}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {renderContent()}
        </Toolbar>
      </AppBar>
    </div>
  );
};
