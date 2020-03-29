import { catalogActionTypes } from '../ActionTypes';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

import { roses } from '../../../configs/listOfGoods/reses';
import { margoImages } from '../../../configs/listOfGoods/margaritka/images';
import { vioalImages } from '../../../configs/listOfGoods/viola/images';
import { pelargonia } from '../../../configs/listOfGoods/pelargonia/images';
import { kaltselyaria } from '../../../configs/listOfGoods/kaltselyaria/images';
import { currants } from '../../../configs/listOfGoods/currants/images';


const { ROSES, CALCEOLARIA, CURRANT, MARGARITKA, PELARGONIUM, VIOLA } = listOfGoodsConstants;

const initiaListOfGoods = {
  [`${ROSES}`]: [...roses],
  [`${MARGARITKA}`]: [...margoImages],
  [`${VIOLA}`]: [...vioalImages],
  [`${PELARGONIUM}`]: [...pelargonia],
  [`${CALCEOLARIA}`]: [...kaltselyaria],
  [`${CURRANT}`]: [...currants],
  filtered: [...roses],
};

export const listOfGoodsReducer = (
  state = initiaListOfGoods,
  { type, payload },
) => {
  switch (type) {
    case catalogActionTypes.updateFilteredListOfGoods:
      return {
        ...state,
        filtered: payload,
      };
    default:
      return state;
  }
};
