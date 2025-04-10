import React from 'react';

import './style.scss';
import { GeoJson, PigeonProps } from 'pigeon-maps';
import { Feature, GeoJsonProperties } from 'geojson';
import { testData } from './geoJsonTestData';
import { SelectedAreaType } from '../../types';

interface GeoJsonTestElementProps extends PigeonProps {
  selectedArea: SelectedAreaType | undefined;
  setSelectedArea: Function;
}

const GeoJsonTestElement = ({
  selectedArea,
  setSelectedArea,
  ...props
}: GeoJsonTestElementProps) => {
  const handlePolygonClick = (event: any) => {
    const properties = event.payload?.properties;
    const classification = properties?.classification;
    const id = properties?.id;

    if (classification && id) {
      setSelectedArea({
        id: id,
        classification: classification,
      });
      console.log(`Clicked on polygon with classification: ${classification} and id: ${id}`);
    }
  };

  const getClassificationClassname = (classification: string) => {
    switch (classification) {
      case "A":
        return 'geo-json-polygon-a';
      case "B1":
        return 'geo-json-polygon-b1';
      case "B2":
        return 'geo-json-polygon-b2';
      case "B3":
        return "geo-json-polygon-b3";
      case "C":
        return 'geo-json-polygon-c';
      default:
        return'geo-json-polygon';
    }
  }

  const getClassname = (properties: GeoJsonProperties) => {
    let classname = '';
    classname = getClassificationClassname(properties?.classification);
    if (properties?.id === selectedArea?.id) {
      classname += ' selectedArea';
    }
    return classname;
  }

  return (
    <GeoJson
      {...props}
      data={testData}
      onClick={handlePolygonClick}
      styleCallback={(feature: Feature) => {
        return {
          className: getClassname(feature.properties),
        };
      }}
    />
  );
};

export default GeoJsonTestElement;