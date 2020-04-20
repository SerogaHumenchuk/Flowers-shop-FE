import { GoogleApiWrapper } from 'google-maps-react';
import { View } from './view';

export const Map = GoogleApiWrapper({
  apiKey: 'AIzaSyDXn6QTJL7v1JjMAxxjZYB2_tDAXBgN_Os'
})(View);