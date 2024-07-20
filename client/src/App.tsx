import React, { useState } from 'react';
import axios from 'axios';

import { Map } from './Components/Map';

import './App.scss';

const App = () => {
  const [dbresult, setDbresult] = useState('Loading...');

  async function getTestDBContents() {
    try {
      const response = await axios.get('/testdb');
      console.warn('RESP: ', response.data);
      setDbresult(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getTestDBContents();

  return (
    <div className="App">
      <div className='smw__info'>
        <div className='smw__info--title'>
          <h1>Title</h1>
          <h2>{JSON.stringify(dbresult)}</h2>
        </div>
        <div>Key</div>
      </div>
      <div className='smw__map'>
        <Map />
      </div>
    </div>
  );
}

export default App;
