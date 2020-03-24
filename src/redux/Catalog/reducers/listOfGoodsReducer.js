import { catalogActionTypes } from '../ActionTypes';

import { roses } from './configs/listOfGoods/reses';
import { margoImages } from './configs/listOfGoods/margaritka/images';
import { vioalImages } from './configs/listOfGoods/viola/images';

const initiaListOfGoods = {
  roses: [...roses],
  margos: [...margoImages],
  viola: [...vioalImages],
  filtered: [...roses],
};

export const listOfGoodsReducer = (
  state = initiaListOfGoods,
  { type, payload },
) => {
  switch (type) {
    case catalogActionTypes.updateFilterdListOfGoods:
      return {
        ...state,
        filtered: payload,
      };
    default:
      return state;
  }
};
