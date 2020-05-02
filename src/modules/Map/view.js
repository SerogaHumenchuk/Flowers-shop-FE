import React from 'react';
import { Map, Marker } from 'google-maps-react';

export const View = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={12}
      initialCenter={{ lat: 49.456, lng: 28.487 }}
    >
      <Marker
        title={'Садовий центр'}
        name={'home'}
        position={{ lat: 49.4515, lng: 28.4715 }}
        // icon={{ url: 'https://encrypted-', }}
      />
      <Marker
        title={'Торгівельна точка на ринку'}
        name={'shop'}
        position={{ lat: 49.4529, lng: 28.5225 }}
      />
    </Map>
  );
};
