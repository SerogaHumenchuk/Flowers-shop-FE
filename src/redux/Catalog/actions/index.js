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
      dispatch(generalActions.updateTitle({title: 'Чайно гібридні троянди', price: '35 грн'}));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Дрібноквіткові':
      dispatch(generalActions.updateTitle({title: 'Дрібноквіткові троянди', price: '35 грн'}));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Плетисті':
      dispatch(generalActions.updateTitle({title: 'Плетисті троянди', price: '40 грн'}));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Всі':
      dispatch(generalActions.updateTitle({title: 'Троянди', price: '35-40 грн'}));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses];
      break;
    case 'Маргаритки':
      dispatch(generalActions.updateTitle({title: 'Маргаритки', price: '15 грн'}));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...margos];
      break;
    case 'Віола (Анютки)':
      dispatch(generalActions.updateTitle({title: 'Віола (Анютки)', price:  '15 грн'}));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...viola];
      break;
    case 'Пеларгонія':
      dispatch(generalActions.updateTitle({title: 'Пеларгонія', price: '70-120 грн'}));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...pelargonia];
      break;
    case 'Кальцеолярія':
      dispatch(generalActions.updateTitle({title: 'Кальцеолярія', price: '25 грн'}));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...kaltselyaria];
     break;
     case 'Інші рослини':
      dispatch(generalActions.updateTitle({title: 'Інші рослини', price: ''}));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [];
     break;
    default:
      dispatch(generalActions.updateTitle({title: 'Квіти', price: ''}));
      filteredListOfGoods = [...roses];
  }
  return dispatch(updateFilteredListOfGoodsActionCreator(filteredListOfGoods));
};
