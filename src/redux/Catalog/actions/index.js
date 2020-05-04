import { catalogActionTypes } from '../ActionTypes';
import * as generalActions from '../../General/actions';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';
import { filteredListOfGoods } from '../selectors';
import { fetcher, catalogURl } from '../../../API';

const { ALL, ROSES } = listOfGoodsConstants;

export const updateFilteredListOfGoods = (node, name) => (dispatch, getState) => {
  const { catalog: { listOfGoods } } = getState();
  let plantName = node && node.text || name;

  if (plantName === ALL) {
    plantName = ROSES;
  }

  dispatch(generalActions.toggleDrawer(false));

  const plants = listOfGoods[plantName];
  if (plants) {
    dispatch({
      type: catalogActionTypes.updateFilteredListOfGoods,
      payload: plants,
    });
  }
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
