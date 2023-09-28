import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './components/location';
import { locations } from './locations';

import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  const [position, setPosition] = useState([24.899674, 67.206464]);
  const [id, setId] = useState('0');
  const location = useRef(null);
  const name = useRef(null);
  useEffect(() => {
    setPosition(locations[id].loc);
  });
  const handleClick = (e) => {
    setId(e.target.id);
  };

  const handleMouseOver = () => {
    location.current.classList.toggle('location-div');
    name.current.classList.remove('hidden')
  };

  const handleMouseLeave = () => {
    location.current.classList.remove('location-div');
  };

  return (
    <div className='relative'>
      <div
        location={location}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        className='absolute top-20 right-20 z-1000 p-4 bg-white rounded-2xl'
      >
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className='flex mb-4 cursor-pointer'
        >
          <img src='./images/home.png' alt='' height={25} width={25} />
          <p
            name={name}
            id='0'
            onClick={handleClick}
            className='ml-2 font-medium hover:underline hidden'
          >
            Home
          </p>
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className='flex mb-4 cursor-pointer'
        >
          <img src='./images/gym.png' alt='' height={25} width={25} />
          <p
            name={name}
            id='1'
            onClick={handleClick}
            className='ml-2 font-medium hover:underline hidden'
          >
            Gym
          </p>
        </div>
        <div
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          className='flex mb-4 cursor-pointer'
        >
          <img src='./images/university.png' alt='' height={25} width={25} />
          <p
            name={name}
            id='2'
            onClick={handleClick}
            className='ml-2 font-medium hover:underline hidden'
          >
            University
          </p>
        </div>
      </div>
      <MapContainer
        center={position}
        zoom={25}
        style={{ widht: '100vw', height: '100vh' }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=EoMzDRhwwXt2ofCWmALr'
        />
        <LocationMarker id={id} position={position} />
      </MapContainer>
    </div>
  );
}

export default App;
