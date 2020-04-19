import React, { useEffect } from 'react';
import { Gallery } from '../Gallary';
import { GridCards } from '../GridCards';
import { Table, TableRow, TableCell, Button, Grid } from '@material-ui/core';

export const View = ({
                       updateFilteredListOfGoods,
                       handleShowMore,
                       filtered: { gridType, prices, images, pagination },
                       history: { location: { pathname } },
                       classes,
                     }) => {

  useEffect(() => {
    const plantNameFromUrl = pathname.slice(9);

    if (plantNameFromUrl) {
      updateFilteredListOfGoods(null, plantNameFromUrl);
    }
  }, []);

  return (
    <div>
      <Table className={classes.table}>
        {prices && Object.entries(prices).map(([count, price]) => (
          <TableRow key={count + price}>
            <TableCell className={classes.td}>{count}</TableCell>
            <TableCell className={classes.td}>{price}</TableCell>
          </TableRow>
        ))}`
      </Table>
      {gridType === 'cards' ? <GridCards/> : <Gallery/>}
      {pagination < images.length && (
        <Grid className={classes.showMoreBtnContainer}>
          <Button
            variant="contained"
            color='primary'
            onClick={handleShowMore}
          >
            Показати більше
          </Button>
        </Grid>
      )}
    </div>
  );
};
