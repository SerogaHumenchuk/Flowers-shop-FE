import React, { useState } from 'react';
import { Card, List, ListItem } from '@material-ui/core';

export const View = ({ filtered: { images, pagination }, classes }) => (
  <List className={classes.list}>
    {images.slice(0, pagination).map(img => (
      <ListItem key={img} className={classes.item}>
        <Card className={classes.card}>
          <img className={classes.img} src={img} alt={img}/>
        </Card>
      </ListItem>
    ))}
  </List>
);
