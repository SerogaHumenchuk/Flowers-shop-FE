import { catalogActionTypes } from '../ActionTypes';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

const { ROSES, TEA_HYBRID_ROSES, SMALL_FLOWERED_ROSES, WICKER_ROSES, CALCEOLARIA, CURRANT, MARGARITKA, PELARGONIUM, VIOLA } = listOfGoodsConstants;

const initiaListOfGoods = {
  [`${ROSES}`]: {},
  [`${TEA_HYBRID_ROSES}`]: {},
  [`${SMALL_FLOWERED_ROSES}`]: {},
  [`${WICKER_ROSES}`]: {},
  [`${MARGARITKA}`]: {},
  [`${VIOLA}`]: {},
  [`${PELARGONIUM}`]: {},
  [`${CALCEOLARIA}`]: {},
  [`${CURRANT}`]: {},
  filtered: {},
};

export const listOfGoodsReducer = (
  state = initiaListOfGoods,
  { type, payload },
) => {
  switch (type) {
    case catalogActionTypes.updateFilteredListOfGoods:
    case catalogActionTypes.handleShowMore:
      return {
        ...state,
        filtered: payload,
      };
    default:
      return state;
  }
};
