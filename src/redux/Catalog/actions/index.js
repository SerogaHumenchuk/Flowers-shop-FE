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
      listOfGoods: { roses, margos, viola, pelargonia,  kaltselyaria },
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
    case 'Віола (Анютки)':
      dispatch(generalActions.updateTitle('Віола (Анютки)'));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...viola];
      break;
    case 'Пеларгонія':
      dispatch(generalActions.updateTitle('Пеларгонія'));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...pelargonia];
      break;
    case 'Кальцеолярія':
      dispatch(generalActions.updateTitle('Кальцеолярія'));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...kaltselyaria];
     break;
    default:
      dispatch(generalActions.updateTitle('Квіти'));
      filteredListOfGoods = [...roses];
  }
  return dispatch(updateFilteredListOfGoodsActionCreator(filteredListOfGoods));
};
