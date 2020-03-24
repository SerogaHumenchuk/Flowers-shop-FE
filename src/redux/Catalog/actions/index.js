import { catalogActionTypes } from '../ActionTypes';
import * as generalActions from '../../General/actions';

const updateMenuAll = node => (dispatch, getState) => {
  const {
    catalog: { menu },
  } = getState();

  const allMenu = Object.values(menu.all).reduce((acc, el) => {
    if (el.nodeId === node.nodeId) {
      acc[el.nodeId] = { ...el, collapsed: !el.collapsed };
    } else {
      acc[el.nodeId] = { ...el };
    }
    return acc;
  }, {});
  dispatch({
    type: catalogActionTypes.updateMenuAll,
    payload: allMenu,
  });
};

const updateFilteredListOfGoodsActionCreator = payload => ({
  type: catalogActionTypes.updateFilterdListOfGoods,
  payload,
});

export const updateFilteredListOfGoods = node => (dispatch, getState) => {
  const {
    catalog: {
      listOfGoods: { roses, margos, viola },
    },
  } = getState();

  if (typeof node.collapsed === 'boolean') {
    return dispatch(updateMenuAll(node));
  }

  dispatch(generalActions.toggleDrawer(false));

  let filteredListOfGoods = [];
  switch (node.text) {
    case 'Чайно гібридні':
      dispatch(generalActions.updateTitle('Чайно гібридні троянди'));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Штамбові':
      dispatch(generalActions.updateTitle('Штамбові троянди'));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Дрібноквіткові':
      dispatch(generalActions.updateTitle('Дрібноквіткові троянди'));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Плетисті':
      dispatch(generalActions.updateTitle('Плетисті троянди'));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Всі':
      dispatch(generalActions.updateTitle('Троянди'));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses];
      break;
    case 'Маргаритки':
      dispatch(generalActions.updateTitle('Маргаритки'));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...margos];
      break;
    case 'Віола (Анютині очі)':
      dispatch(generalActions.updateTitle('Віола (Анютині очі)'));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...viola];
      break;
    default:
      dispatch(generalActions.updateTitle('Квіти'));
      filteredListOfGoods = [...roses];
  }
  return dispatch(updateFilteredListOfGoodsActionCreator(filteredListOfGoods));
};
