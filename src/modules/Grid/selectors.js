import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ general }) => general.gridType,
  gridType => ({
    gridType,
  }),
);
