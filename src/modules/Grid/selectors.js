import { createSelector } from 'reselect';
import { filteredListOfGoods } from '../../redux/Catalog/selectors';

export const selector = createSelector(
  filteredListOfGoods,
  (filtered) => ({
    filtered
  }),
);
