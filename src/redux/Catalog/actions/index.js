import { catalogActionTypes } from '../ActionTypes';
import * as generalActions from '../../General/actions';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { ROSES, CALCEOLARIA, CURRANT, MARGARITKA, PELARGONIUM, VIOLA, WICKER_ROSES, TEA_HYBRID_ROSES, SMALL_FLOWERED_ROSES, ALL } = listOfGoodsConstants;

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
  type: catalogActionTypes.updateFilteredListOfGoods,
  payload,
});

export const updateFilteredListOfGoods = (node, name) => (dispatch, getState) => {
  const { catalog: { listOfGoods } } = getState();
  const plantName = node && node.text || name;

  if (node && typeof node.collapsed === 'boolean') {
    return dispatch(updateMenuAll(node));
  }

  node && dispatch(generalActions.toggleDrawer(false));

  let filteredListOfGoods = [];
  switch (plantName) {
    case TEA_HYBRID_ROSES:
      dispatch(generalActions.updateTitle({
          title: TEA_HYBRID_ROSES,
          prices: {
            ['1-50 шт.']: '35 грн',
            ['Більше 50 шт.']: '30 грн',
            ['Більше 500 шт.']: 'Ціна договірна',
          },
        },
      ));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...listOfGoods[`${ROSES}`]].filter(el => el.type === plantName);
      break;
    case SMALL_FLOWERED_ROSES:
      dispatch(generalActions.updateTitle({
        title: SMALL_FLOWERED_ROSES,
        prices: {
          ['1-50 шт.']: '35 грн',
          ['Більше 50 шт.']: '30 грн',
          ['Більше 500 шт.']: 'Ціна договірна',
        },
      }));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...listOfGoods[`${ROSES}`]].filter(el => el.type === plantName);
      break;
    case WICKER_ROSES:
      dispatch(generalActions.updateTitle({
        title: WICKER_ROSES,
        prices: {
          ['1-50 шт.']: '40 грн',
          ['Більше 50 шт.']: '35 грн',
          ['Більше 500 шт.']: 'Ціна договірна',
        },
      }));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...listOfGoods[`${ROSES}`]].filter(el => el.type === plantName);
      break;
    case ALL:
      dispatch(generalActions.updateTitle({
        title: ROSES,
        prices: null,
      }));
      dispatch(generalActions.updateGridType('cards'));
      filteredListOfGoods = [...listOfGoods[`${ROSES}`]];
      break;
    case MARGARITKA:
      dispatch(generalActions.updateTitle({
        title: MARGARITKA,
        prices: {
          ['1-50 шт.']: '15 грн',
          ['більше 50 шт.']: '12 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...listOfGoods[`${MARGARITKA}`]];
      break;
    case VIOLA:
      dispatch(generalActions.updateTitle({
        title: 'Віола (Анютки)',
        prices: {
          ['1-50 шт.']: '15 грн',
          ['більше 50 шт.']: '12 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...listOfGoods[`${VIOLA}`]];
      break;
    case PELARGONIUM:
      dispatch(generalActions.updateTitle({
        title: PELARGONIUM,
        prices: {
          ['Ринка 12см в діаметрі']: '70 грн',
          ['Кашпо 23см в діаметрі']: '120 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...listOfGoods[`${PELARGONIUM}`]];
      break;
    case CALCEOLARIA:
      dispatch(generalActions.updateTitle({
        title: CALCEOLARIA,
        prices: {
          ['1-50 шт.']: '25 грн',
          ['більше 50 шт.']: '20 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...listOfGoods[`${CALCEOLARIA}`]];
      break;
    case CURRANT:
      dispatch(generalActions.updateTitle({
        title: CURRANT,
        prices: {
          ['1-100 шт.']: '20 грн',
          ['більше 100']: '15 грн',
        },
      }));
      dispatch(generalActions.updateGridType('gallery'));
      filteredListOfGoods = [...listOfGoods[`${CURRANT}`]];
      break;
    default:
      dispatch(generalActions.updateTitle({ title: 'Квіти', price: null }));
      filteredListOfGoods = [...listOfGoods[`${ROSES}`]];
  }
  return dispatch(updateFilteredListOfGoodsActionCreator(filteredListOfGoods));
};
