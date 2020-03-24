import { generalActionTypes } from '../actionTypes';

export const updateGridType = payload => ({
  type: generalActionTypes.updateGridType,
  payload,
});

export const toggleDrawer = payload => ({
  type: generalActionTypes.toggleDrawer,
  payload,
});

export const updateTitle = payload => ({
  type: generalActionTypes.updateTitle,
  payload,
});
