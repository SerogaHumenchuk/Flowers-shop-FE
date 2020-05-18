import { catalogActionTypes } from '../ActionTypes';
import * as generalActions from '../../General/actions';
import { filteredListOfGoods } from '../selectors';
import { fetcher, catalogURl } from '../../../API';

export const updateFilteredListOfGoods = payload => dispatch => {
  dispatch(generalActions.toggleDrawer(false));
  dispatch({
    type: catalogActionTypes.updateFilteredListOfGoods,
    payload,
  });
};

export const handleShowMore = () => (dispatch, getState) => {
  const filtered = filteredListOfGoods(getState());

  return dispatch({
    type: catalogActionTypes.handleShowMore,
    payload: {
      ...filtered,
      pagination: filtered.pagination += 10,
    },
  });
};

export const fetchCatalog = () => async dispatch => {
  const payload = await fetcher(catalogURl);
  dispatch({
    type: catalogActionTypes.fetchCatalog,
    payload,
  });
};
