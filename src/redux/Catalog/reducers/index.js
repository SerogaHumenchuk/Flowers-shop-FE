import { combineReducers } from 'redux';

import { listOfGoodsReducer } from './listOfGoodsReducer';
import { menuReducer } from './menuReducer';

export const catalogReducer = combineReducers({
  menu: menuReducer,
  listOfGoods: listOfGoodsReducer,
});
