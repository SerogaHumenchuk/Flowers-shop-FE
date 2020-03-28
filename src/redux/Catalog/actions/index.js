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
      listOfGoods: { roses, margos, viola, pelargonia, kaltselyaria, currants },
    },
  } = getState();

  if (typeof node.collapsed === 'boolean') {
    return dispatch(updateMenuAll(node));
  }

  dispatch(generalActions.toggleDrawer(false));

  let filteredListOfGoods = [];
  switch (node.text) {
    case 'Чайно гібридні':
      dispatch(generalActions.updateTitle({
          title: 'Чайно гібридні троянди',
          prices: {
            ['1-50 шт.']: '35 грн',
            ['Більше 50 шт.']: '30 грн',
            ['Більше 500 шт.']: 'Ціна договірна',
          },
        },
      ));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Дрібноквіткові':
      dispatch(generalActions.updateTitle({
        title: 'Дрібноквіткові троянди',
        prices: {
          ['1-50 шт.']: '35 грн',
          ['Більше 50 шт.']: '30 грн',
          ['Більше 500 шт.']: 'Ціна договірна',
        },
      }));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Плетисті':
      dispatch(generalActions.updateTitle({
        title: 'Плетисті троянди',
        prices: {
          ['1-50 шт.']: '40 грн',
          ['Більше 50 шт.']: '35 грн',
          ['Більше 500 шт.']: 'Ціна договірна',
        },
      }));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses].filter(el => el.type === node.text);
      break;
    case 'Всі':
      dispatch(generalActions.updateTitle({
        title: 'Троянди',
        prices: null,
      }));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...roses];
      break;
    case 'Маргаритки':
      dispatch(generalActions.updateTitle({
        title: 'Маргаритки',
        prices: {
          ['1-50 шт.']: '15 грн',
          ['більше 50 шт.']: '12 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...margos];
      break;
    case 'Віола (Анютки)':
      dispatch(generalActions.updateTitle({
        title: 'Віола (Анютки)',
        prices: {
          ['1-50 шт.']: '15 грн',
          ['більше 50 шт.']: '12 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...viola];
      break;
    case 'Пеларгонія':
      dispatch(generalActions.updateTitle({
        title: 'Пеларгонія',
        prices: {
          ['Ринка 12см в діаметрі']: '70 грн',
          ['Кашпо 23см в діаметрі']: '120 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...pelargonia];
      break;
    case 'Кальцеолярія':
      dispatch(generalActions.updateTitle({
        title: 'Кальцеолярія',
        prices: {
          ['1-50 шт.']: '25 грн',
          ['більше 50 шт.']: '20 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...kaltselyaria];
      break;
    case 'Смородина':
      dispatch(generalActions.updateTitle({
        title: 'Смородина',
        prices: {
          ['1-100 шт.']: '20 грн',
          ['більше 100']: '15 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...currants];
      break;
    default:
      dispatch(generalActions.updateTitle({ title: 'Квіти', price: null }));
      filteredListOfGoods = [...roses];
  }
  return dispatch(updateFilteredListOfGoodsActionCreator(filteredListOfGoods));
};
