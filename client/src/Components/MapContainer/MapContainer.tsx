import {
  Map,
  Marker
} from "pigeon-maps"
import { GeoJsonTestElement } from '../GeoJsonTestElement'; 

import './style.scss';

const MapContainer = () => {
  // Default centre should be current location (or default to southampton if not available?)

  return (
    <div className='swm__map'>
      <Map defaultCenter={[51.345, 1.135]} defaultZoom={11}>
        <Marker width={50} anchor={[51.345, 1.135]} />
        <GeoJsonTestElement />
      </Map>
    </div>
  );
};

export default MapContainer;