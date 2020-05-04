import React from 'react';
import { Drawer, ListItem, List, Grid, Divider } from '@material-ui/core';
import { navigation } from '../../configs/navigation';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Clear';

export const View = ({ toggleDrawer, isOpenDrawer, classes }) => (
  <Drawer
    className={classes.drawer}
    anchor="left"
    open={isOpenDrawer}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Grid container justify='flex-end'>
      <IconButton onClick={() => toggleDrawer(false)}>
        <CloseIcon className={classes.closeDrawerIcon}/>
      </IconButton>
    </Grid>
    <Divider/>
    <List className={classes.list}>
      {Object.entries(navigation).map(([key, { label }]) => (
        <>
          <ListItem
            key={key}
            button
            className={classes.item}
            onClick={() => toggleDrawer(false)}
          >
            <Link to={`/${key}`} className={classes.link}>{label}</Link>
          </ListItem>
          <Divider/>
        </>
      ))}
    </List>
  </Drawer>
);
