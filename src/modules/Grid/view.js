import React from 'react';
import { Gallery } from '../Gallary';
import { GridCards } from '../GridCards';

export const View = ({ gridType }) => {
  return gridType === 'cards' ? <GridCards /> : <Gallery />;
};
