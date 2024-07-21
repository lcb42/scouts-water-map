import React from 'react';
import { Map, Marker } from "pigeon-maps"

import './style.scss';

const MapContainer = () => {
  // Add your component logic here

  return (
    // Add your JSX code here
    <Map defaultCenter={[51.345, 1.135]} defaultZoom={11}>
      <Marker width={50} anchor={[51.345, 1.135]} />
    </Map>
  );
};

export default MapContainer;