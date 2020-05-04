import React, { useEffect } from 'react';
import { List, ListItem, Typography, Grow } from '@material-ui/core';

export const View = ({
                       listOfGoods: { all, heads },
                       updateFilteredListOfGoods,
                       classes,
                       history,
                       fetchCatalog,
                     }) => {
  useEffect(() => {
    fetchCatalog();

    // fetch('gs://flowers-api-fc5b2.appspot.com', )
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
  }, []);

  const handleUpdateFilteredListOfGoods = (node) => () => {
    updateFilteredListOfGoods(node);
    history.push(`/catalog/${node.text}`);
  };

  return (
    <List class={classes.list}>
      {heads.length && heads.map((item, index) => {
        const node = all[item];

        return (
          <Grow
            in
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: index * 350 }}
          >
            <ListItem
              key={node.nodeId}
              class={classes.item}
              onClick={handleUpdateFilteredListOfGoods(node)}
            >
              <img className={classes.img} src={node.image} alt="flowers"/>
              <Typography class={classes.text}>{node.text}</Typography>
            </ListItem>
          </Grow>
        );
      })}
    </List>
  );
};
