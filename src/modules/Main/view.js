import React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';

export const View = ({
  listOfGoods: { all, heads },
  updateFilteredListOfGoods,
  classes,
  history,
}) => {
  const handleUpdateFilteredListOfGoods = (node) => () => {
    updateFilteredListOfGoods(node);
    history.push(`/catalog/${node.text}`);
  };

  return (
    <List class={classes.list}>
      {heads.map((item) => {
        const node = all[item];

        return (
          <ListItem
            key={node.nodeId}
            class={classes.item}
            onClick={handleUpdateFilteredListOfGoods(node)}
          >
            <img class={classes.img} src={node.image} alt="flowers" />
            <Typography class={classes.text}>{node.text}</Typography>
          </ListItem>
        );
      })}
    </List>
  );
};
