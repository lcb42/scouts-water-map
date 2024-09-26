import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MapContainer } from './Components/MapContainer';

import './App.scss';
import { InfoSidebar } from './Components/InfoSidebar';

const App = () => {
  const [dbresult, setDbresult] = useState('Loading...');

  useEffect(() => {
    
    const getTestDBContents = async () => {
      try {
        const response = await axios.get('/testdb');
        console.warn('RESP: ', response.data);
        setDbresult(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getTestDBContents();

  }, []);

  return (
    <div className="App">
      <InfoSidebar dbresult={JSON.stringify(dbresult)} />
      <MapContainer />
    </div>
  );
}

export default App;
