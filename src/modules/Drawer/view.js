import React from 'react';
import {
  Drawer,
  ListItem,
  Typography,
  Divider,
  List,
  Collapse,
  Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const View = ({
  toggleDrawer,
  isOpenDrawer,
  updateFilteredListOfGoods,
  menu,
  updateTitle,
  history,
  title,
  classes,
}) => {
  const hendleredirectToContacts = () => {
    toggleDrawer(false);
    updateTitle('Контакти');
    history.push('/contacts');
  };

  const handleUpdateFilteredListOfGoods = node => () => {
    updateFilteredListOfGoods(node);
    history.push(`/catalog/${title}`);
  };

  return (
    <Drawer
      className={classes.drawer}
      anchor="left"
      open={isOpenDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <Typography className={classes.closeDrawerTitle}>Катлог</Typography>
        <IconButton onClick={() => toggleDrawer(false)}>
          <ChevronLeftIcon className={classes.closeDrawerIcon} />
        </IconButton>
      </div>
      <Divider />
      <List>
        {menu.heads.map(nodeId => {
          const node = menu.all[nodeId];
          return (
            <div key={nodeId}>
              <ListItem
                button
                className={classes.item}
                onClick={handleUpdateFilteredListOfGoods(node)}
              >
                {typeof node.collapsed === 'boolean' ? (
                  node.collapsed ? (
                    <div className={classes.collapseContainer}>
                      <ExpandMoreIcon />
                    </div>
                  ) : (
                    <div className={classes.collapseContainer}>
                      <ExpandLessIcon />
                    </div>
                  )
                ) : (
                  <div className={classes.collapseContainer} />
                )}
                <Typography>{node.text}</Typography>
              </ListItem>
              {node.children.map(childId => (
                <Collapse
                  in={node.collapsed}
                  className={classes.collapse}
                  key={childId}
                >
                  <ListItem
                    button
                    className={`${classes.item} ${classes.subItem}`}
                    onClick={handleUpdateFilteredListOfGoods(menu.all[childId])}
                  >
                    <Typography>{menu.all[childId].text}</Typography>
                  </ListItem>
                </Collapse>
              ))}
              <Divider />
            </div>
          );
        })}
      </List>
      <Button
        className={classes.contactsBtn}
        variant="contained"
        color="primary"
        onClick={hendleredirectToContacts}
      >
        <Link to="/contacts" className={classes.contactLink}>
          Контакти
        </Link>
      </Button>
    </Drawer>
  );
};
