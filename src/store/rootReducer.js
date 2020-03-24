import { combineReducers } from 'redux';

import { catalogReducer } from '../redux/Catalog/reducers';
import { generalReducer } from '../redux/General/reducers';

export const reducers = combineReducers({
  catalog: catalogReducer,
  general: generalReducer,
});
