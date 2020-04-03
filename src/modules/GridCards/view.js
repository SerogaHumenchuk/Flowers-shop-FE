import React from 'react';
import { Card, List, ListItem } from '@material-ui/core';

export const View = ({ filtered: { images }, classes }) => {
  return (
    <List className={classes.list}>
      {images.map(img => (
        <ListItem key={img} className={classes.item}>
          <Card className={classes.card}>
            <img className={classes.img} src={img} alt={img}/>
          </Card>
        </ListItem>
      ))}
    </List>
  );
};
