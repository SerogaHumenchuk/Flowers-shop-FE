import React from 'react';
import { Map, Marker } from 'google-maps-react';

export const View = ({ google }) => {
  const mapStyles = {
    maxWidth: 200,
  };
  return (
    <Map
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: 49.452, lng: 28.487 }}
    >
      <Marker
        title={'Садовий центр'}
        name={'SOMA'}
        position={{ lat: 49.4515, lng: 28.4715 }}
        // icon={{
        //   url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQA0cUQdXVZp2HtlwXo5WVQh9qYVROXhUA6eWVQ6MLoKNj4mWR2&usqp=CAU',
        // }}
      />
    </Map>
  );
};
