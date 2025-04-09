import React from 'react';

import { SelectedAreaType } from '../../types';
import './style.scss';

const InfoSidebar = ({
  selectedArea
}: {
  selectedArea: SelectedAreaType | undefined;
}) => {

  // title
  // common locations
  // submit a permit area
  // description of selected permit area as per scouts website

  // is collapsible

  return (
    <div className="swm__info">
      <div className='swm__info--title'>
        <h1>UK Scouting Water Classifications</h1>
      </div>
      <div>
        <h2>Selected Area</h2>
        {selectedArea ? (
          <h3>{selectedArea.classification}</h3>
        ) : (
          <p>Select an area to see more information</p>
        )}
      </div>
    </div>
  );
};

export default InfoSidebar;
