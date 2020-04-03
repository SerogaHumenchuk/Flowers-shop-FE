import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ catalog }) => catalog.listOfGoods.filtered.gridType,
  ({ catalog }) => catalog.listOfGoods.filtered.prices,
  (gridType, prices) => ({
    gridType,
    prices,
  }),
);
