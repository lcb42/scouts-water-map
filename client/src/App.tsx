import React, { useState } from 'react';
import axios from 'axios';

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
      <h1>This is an app with a map</h1>
      <h1>{JSON.stringify(dbresult)}</h1>
    </div>
  );
}

export default App;
