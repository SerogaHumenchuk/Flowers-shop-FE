import { generalActionTypes } from '../actionTypes';

const initialState = {
  gridType: 'cards', // cards, gallery
  title: 'Троянди',
  isOpenDrawer: true,
};

export const generalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case generalActionTypes.updateGridType:
      return {
        ...state,
        gridType: payload,
      };
    case generalActionTypes.updateTitle:
      return {
        ...state,
        title: payload,
      };
    case generalActionTypes.toggleDrawer:
      return {
        ...state,
        isOpenDrawer: payload,
      };
    default:
      return state;
  }
};
