import { createSelector } from 'reselect';

export const selector = createSelector(
  ({ catalog }) => catalog.menu,
  ({ catalog }) => catalog.listOfGoods,
  ({ general }) => general.isOpenDrawer,
  (menu, listOfGoods, isOpenDrawer) => ({
    menu,
    listOfGoods,
    isOpenDrawer,
  }),
);
