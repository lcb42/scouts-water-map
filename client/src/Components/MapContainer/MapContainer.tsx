import React from 'react';
import { Map, Marker } from "pigeon-maps"

import './style.scss';

const MapContainer = () => {
  // Load all geo shapes into map from db
  // Default centre should be current location (or default to southampton if not available?)

  return (
    <div className='swm__map'>
      <Map defaultCenter={[51.345, 1.135]} defaultZoom={11}>
        <Marker width={50} anchor={[51.345, 1.135]} />
      </Map>
    </div>
  );
};

export default MapContainer;