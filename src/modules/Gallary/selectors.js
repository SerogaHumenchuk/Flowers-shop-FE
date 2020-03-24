import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ catalog }) => catalog.listOfGoods.filtered,
  filtered => ({
    filtered,
  }),
);
