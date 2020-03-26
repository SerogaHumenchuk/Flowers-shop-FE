import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ catalog }) => catalog.menu,
  ({ catalog }) => catalog.listOfGoods,
  ({ general }) => general.isOpenDrawer,
  ({ general }) => general.title,
  (menu, listOfGoods, isOpenDrawer, title) => ({
    menu,
    listOfGoods,
    isOpenDrawer,
    title,
  }),
);
