import {
  Map,
  Marker
} from "pigeon-maps"
import { GeoJsonTestElement } from '../GeoJsonTestElement'; 

import './style.scss';
import { SelectedAreaType } from "../../types";

const MapContainer = ({
  selectedArea,
  setSelectedArea
}: {
  selectedArea: SelectedAreaType | undefined;
  setSelectedArea: Function;
}) => {
  // Default centre should be current location (or default to southampton if not available?)

  return (
    <div className='swm__map'>
      <Map defaultCenter={[50.9289, -1.4085]} defaultZoom={11}>
        <Marker width={50} anchor={[51.345, 1.135]} />
        <GeoJsonTestElement
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
        />
      </Map>
    </div>
  );
};

export default MapContainer;
