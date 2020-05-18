import React, { useEffect } from 'react';
import { Gallery } from '../Gallary';
import { GridCards } from '../GridCards';
import { Button, Grid } from '@material-ui/core';
import { fetcher } from '../../API';

export const View = ({
                       updateFilteredListOfGoods,
                       handleShowMore,
                       filtered: { gridType, prices, images, pagination },
                       history, history: { location: { pathname } },
                       classes,
                     }) => {
  useEffect(() => {
    fetcher(`https://flowers-api-fc5b2.firebaseio.com/listOfGoods/${history.location.state}.json`)
      .then(response => updateFilteredListOfGoods(response));
  }, []);

  // useEffect(() => {
  //   fetch('https://flowers-api-fc5b2.firebaseio.com/listOfGoods/pelargonia.json', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(vioalConfig),
  //   }).then(response => response.json());
  // }, []);

  return images ? (
    <div className={classes.grid}>
      {gridType === 'cards' ? <GridCards/> : <Gallery/>}
      {pagination < images.length && (
        <Grid className={classes.showMoreBtnContainer}>
          <Button variant="contained" color='primary' onClick={handleShowMore}>
            Показати більше
          </Button>
        </Grid>
      )}
    </div>
  ) : <div />;
};
