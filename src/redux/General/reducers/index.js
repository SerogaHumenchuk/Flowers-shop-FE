import { generalActionTypes } from '../actionTypes';

const initialState = {
  isOpenDrawer: false,
};

export const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case generalActionTypes.toggleDrawer:
      return {
        ...state,
        isOpenDrawer: payload,
      };
    default:
      return state;
  }
};
