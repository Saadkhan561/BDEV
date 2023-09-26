import { useRef, useState } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './components/location';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  // const center = [24.899217099044925, 67.2077518256693]
  const center = [24.929860319118212, 67.11530515066774];

  return (
    <MapContainer
      center={center}
      zoom={25}
      style={{ widht: '100vw', height: '100vh' }}
    >
      <TileLayer
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EoMzDRhwwXt2ofCWmALr'
      />
      <LocationMarker />
      {/* <Marker position={center}>
        <Popup>
          Pak Star Ground
        </Popup>
      </Marker> */}
    </MapContainer>
  );
}

export default App;
