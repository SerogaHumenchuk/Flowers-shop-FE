import { generalActionTypes } from '../actionTypes';

export const toggleDrawer = payload => ({
  type: generalActionTypes.toggleDrawer,
  payload,
});

export const updateTitle = payload => ({
  type: generalActionTypes.updateTitle,
  payload,
});
