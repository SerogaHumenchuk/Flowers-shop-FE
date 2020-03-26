import React from 'react';
import { Card, Typography, Grid, List, ListItem } from '@material-ui/core';

export const View = ({ filtered, classes }) => {
  return (
    <List className={classes.list}>
      {filtered.map(({ img }) => (
        <ListItem key={img} className={classes.item}>
          <Card className={classes.card}>
            <img className={classes.img} src={img} alt={img} />
            {/* <Grid className={classes.description}>
              <Typography className={classes.name}>{name}</Typography>
              <Grid container wrap="nowrap" justify="space-between">
                <Typography className={classes.type}>{type}</Typography>
                <Typography
                  className={classes.price}
                >{`${price} грн`}
                </Typography>
              </Grid>
            </Grid> */}
          </Card>
        </ListItem>
      ))}
    </List>
  );
};
