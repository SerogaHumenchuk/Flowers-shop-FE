import { catalogActionTypes } from '../ActionTypes';

const initialMenu = {
  all: {},
  heads: [],
  status: -1,
};

export const menuReducer = (state = initialMenu, { type, payload }) => {
  switch (type) {
    case catalogActionTypes.fetchCatalog:
      return {
        ...payload,
      };
    case catalogActionTypes.updateMenuAll:
      return {
        ...state,
        all: payload,
      };
    default:
      return state;
  }
};
