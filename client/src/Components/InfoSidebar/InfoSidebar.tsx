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

  // const getMoreInfo = (classification: string) => {
  //   switch (classification) {
  //     case 'A':
  //       return '';
  //     case 'B1':
  //       return '';
  //     case 'B2':
  //       return '';
  //     case 'B3':
  //       return '';
  //     case 'C':
  //       return '';
  //   }
  // }

  return (
    <div className="swm__info">
      <div className='swm__info--title'>
        <h1>UK Scouting Water Classifications</h1>
      </div>
      <div>
        <h2>Selected Area</h2>
        {selectedArea ? (
          <div>
            <p>The permit classification for the area you have selected is: <strong>{selectedArea.classification}</strong></p>
            <p>This means you should have a permit of at least the above in the water sport that you want to lead.</p>
            {/* <p>{getMoreInfo(selectedArea.classification)}</p> */}
          </div>
        ) : (
          <p>Select an area to see more information</p>
        )}
      </div>
    </div>
  );
};

export default InfoSidebar;
