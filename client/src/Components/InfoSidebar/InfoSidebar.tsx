import React from 'react';

import './style.scss';

const MapContainer = ({
  dbresult
}: {
  dbresult: string
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
        <h2>{ dbresult }</h2>
      </div>
      <div>Key</div>
    </div>
  );
};

export default MapContainer;