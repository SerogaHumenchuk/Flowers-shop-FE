import { catalogActionTypes } from '../ActionTypes';
import * as generalActions from '../../General/actions';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { ALL, ROSES } = listOfGoodsConstants;

export const updateFilteredListOfGoods = (node, name) => (dispatch, getState) => {
  const { catalog: { listOfGoods, menu: { all } } } = getState();
  let plantName = node && node.text || name;
  if (plantName === ALL) plantName = ROSES;

  if (node && typeof node.collapsed === 'boolean') {
    return dispatch({
      type: catalogActionTypes.updateMenuAll,
      payload: { ...all, [node.nodeId]: { ...node, collapsed: !node.collapsed } },
    });
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