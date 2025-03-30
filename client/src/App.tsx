import { MapContainer } from './Components/MapContainer';

import './App.scss';
import { InfoSidebar } from './Components/InfoSidebar';

const App = () => {
  return (
    <div className="App">
      <InfoSidebar />
      <MapContainer />
    </div>
  );
}

export default App;
