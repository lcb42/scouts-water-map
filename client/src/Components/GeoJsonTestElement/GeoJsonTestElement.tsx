import React from 'react';

import './style.scss';
import { GeoJson, PigeonProps } from 'pigeon-maps';
import { Feature } from 'geojson';
import { testData } from './geoJsonTestData';

interface GeoJsonTestElementProps extends PigeonProps {
  setSelectedArea: Function;
}

const GeoJsonTestElement = ({
  setSelectedArea,
  ...props
}: GeoJsonTestElementProps) => {
  const handlePolygonClick = (event: any) => {
    const classification = event.payload?.properties?.classification;
    if (classification) {
      // Handle the click event and set the selected area
      // For example, you can call a function passed via props
      setSelectedArea({
        classification: classification
      });
      console.log(`Clicked on polygon with classification: ${classification}`);
    }
  };

  return (
    <GeoJson
      {...props}
      data={testData}
      onClick={handlePolygonClick}
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