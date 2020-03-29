import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ general }) => general.gridType,
  ({ general }) => general.title.prices,
  ({ catalog }) => catalog.listOfGoods,
  (gridType, prices) => ({
    gridType,
    prices,
  }),
);
