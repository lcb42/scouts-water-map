import React from 'react';

import './style.scss';
import { GeoJson, PigeonProps } from 'pigeon-maps';
import { Feature } from 'geojson';

const geoJsonSample = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [2.0, 48.5]
        },
      "properties": {
          "width": "1"
        }
    }
  ]
};

const GeoJsonTestElement = (
  props: PigeonProps
) => {
  return (
    <GeoJson
      {...props}
      data={geoJsonSample}
      styleCallback={(feature: Feature) => {
        if (feature.geometry.type === "LineString") {
          return { strokeWidth: "1", stroke: "black" };
        }
        return {
          fill: "#d4e6ec99",
          strokeWidth: "1",
          stroke: "white",
          r: "20",
        };
      }}
    />
  );
};

export default GeoJsonTestElement;