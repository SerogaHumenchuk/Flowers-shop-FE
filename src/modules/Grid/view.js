import React, { useEffect } from 'react';
import { Gallery } from '../Gallary';
import { GridCards } from '../GridCards';
import { Table, TableRow, TableCell } from '@material-ui/core';

export const View = ({ updateFilteredListOfGoods, gridType, prices, history: { location: { pathname } }, classes }) => {

  useEffect(() => {
    const plantNameFromUrl = pathname.slice(9);
    plantNameFromUrl && updateFilteredListOfGoods(null, plantNameFromUrl);
  }, []);

  return (
    <div>
      <Table className={classes.table}>
        {prices && Object.entries(prices).map(priceParam => (
          <TableRow>
            <TableCell className={classes.td}>{priceParam[0]}</TableCell>
            <TableCell className={classes.td}>{priceParam[1]}</TableCell>
          </TableRow>
        ))}
      </Table>
      {gridType === 'cards' ? <GridCards/> : <Gallery/>}
    </div>
  );
};
