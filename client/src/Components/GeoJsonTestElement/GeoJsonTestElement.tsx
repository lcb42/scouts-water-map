import React from 'react';

import './style.scss';
import { GeoJson, PigeonProps } from 'pigeon-maps';
import { Feature } from 'geojson';
import { testData } from './geoJsonTestData';

const GeoJsonTestElement = (
  props: PigeonProps
) => {
  return (
    <GeoJson
      {...props}
      data={testData}
      styleCallback={(feature: Feature) => {
        if (feature.geometry.type === "LineString") {
          return { strokeWidth: "1", stroke: "green" };
        }
        return {
          className: 'geo-json-polygon',
        };
      }}
    />
  );
};

export default GeoJsonTestElement;