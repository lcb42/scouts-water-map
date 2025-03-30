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
        if (feature.properties?.classification === "B1") {
          return { className: 'geo-json-polygon-b1' };
        }
        if (feature.properties?.classification === "B2") {
          return { className: 'geo-json-polygon-b2' };
        }
        if (feature.properties?.classification === "C") {
          return { className: 'geo-json-polygon-c' };
        }
        return {
          className: 'geo-json-polygon',
        };
      }}
    />
  );
};

export default GeoJsonTestElement;