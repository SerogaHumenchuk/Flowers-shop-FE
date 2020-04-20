import React from 'react';
import { Map } from 'google-maps-react';

export const View = ({ google }) => {
  const mapStyles = {
    height: '100%',
    margin: 0,
    padding: 0
  };
  return (
    <Map
      google={google}
      zoom={8}
      style={mapStyles}
      initialCenter={{ lat: 47.444, lng: 122.176 }}
    />
  );
};
