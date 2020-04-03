import { catalogActionTypes } from '../ActionTypes';
import { listOfGoodsConstants } from '../../../constants/listOfGoods';

import {
  allRosesConfig,
  smallFloweredRosesConfig,
  teaHybridRosesConfig,
  wickerRosesConfig,
} from '../../../configs/listOfGoods/reses';
import { margoConfig } from '../../../configs/listOfGoods/margaritka';
import { vioalConfig } from '../../../configs/listOfGoods/viola';
import { pelargoniaConfig } from '../../../configs/listOfGoods/pelargonia';
import { caltselyariaConfig } from '../../../configs/listOfGoods/caltselyaria';
import { carrantConfig } from '../../../configs/listOfGoods/currants';


const { ROSES, TEA_HYBRID_ROSES, SMALL_FLOWERED_ROSES, WICKER_ROSES, CALCEOLARIA, CURRANT, MARGARITKA, PELARGONIUM, VIOLA } = listOfGoodsConstants;

const initiaListOfGoods = {
  [`${ROSES}`]: allRosesConfig,
  [`${TEA_HYBRID_ROSES}`]: smallFloweredRosesConfig,
  [`${SMALL_FLOWERED_ROSES}`]: teaHybridRosesConfig,
  [`${WICKER_ROSES}`]: wickerRosesConfig,
  [`${MARGARITKA}`]: margoConfig,
  [`${VIOLA}`]: vioalConfig,
  [`${PELARGONIUM}`]: pelargoniaConfig,
  [`${CALCEOLARIA}`]: caltselyariaConfig,
  [`${CURRANT}`]: carrantConfig,
  filtered: allRosesConfig,
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
