import React, { useState } from 'react';
import { MapContainer } from './Components/MapContainer';

import './App.scss';
import { InfoSidebar } from './Components/InfoSidebar';

const App = () => {
  const [selectedArea, setSelectedArea] = useState();

  return (
    <div className="App">
      <InfoSidebar selectedArea={selectedArea} />
      <MapContainer setSelectedArea={setSelectedArea} />
    </div>
  );
}

export default App;
