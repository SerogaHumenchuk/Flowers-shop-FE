import { catalogActionTypes } from '../ActionTypes';
import { menu } from '../../../configs/menu';

const initialMenu = {
  all: { ...menu },
  heads: [1, 7, 8, 9, 10, 11],
};

export const menuReducer = (state = initialMenu, { type, payload }) => {
  switch (type) {
    case catalogActionTypes.updateMenuAll:
      return {
        ...state,
        all: payload,
      };
    default:
      return state;
  }
};
