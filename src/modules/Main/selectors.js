import { createSelector } from 'reselect';
import { filteredListOfGoods } from '../../redux/Catalog/selectors';

export const selector = createSelector(
  filteredListOfGoods,
  ({ catalog }) => catalog.menu,
  ({ catalog }) => catalog.listOfGoods,

  (menu, listOfGoods, filtered) => ({
    menu,
    listOfGoods,
    filtered,
  }),
);
