import { catalogActionTypes } from '../ActionTypes';

import { roses } from '../../../configs/listOfGoods/reses';
import { margoImages } from '../../../configs/listOfGoods/margaritka/images';
import { vioalImages } from '../../../configs/listOfGoods/viola/images';
import { pelargonia } from '../../../configs/listOfGoods/pelargonia/images';
import { kaltselyaria } from '../../../configs/listOfGoods/kaltselyaria/images'

const initiaListOfGoods = {
  roses: [...roses],
  margos: [...margoImages],
  viola: [...vioalImages],
  pelargonia: [...pelargonia],
  kaltselyaria: [...kaltselyaria],
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
