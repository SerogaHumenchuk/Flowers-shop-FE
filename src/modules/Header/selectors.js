import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ general }) => general.title,
  ({ general }) => general.isOpenDrawer,
  (title, isOpenDrawer) => ({
    title,
    isOpenDrawer,
  }),
);
