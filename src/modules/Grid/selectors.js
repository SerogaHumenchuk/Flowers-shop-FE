import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ general }) => general.gridType,
  ({ general }) => general.title.prices,
  (gridType, prices) => ({
    gridType,
    prices,
  }),
);
