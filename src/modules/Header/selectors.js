import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ general }) => general.title,
  (title) => ({
    title,
  }),
);


