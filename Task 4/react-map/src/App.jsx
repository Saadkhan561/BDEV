import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './components/location';
import { locations } from './locations';

import { MapContainer, TileLayer } from 'react-leaflet';

// https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&cnt=5&appid=${key}
function App() {
  const [position, setPosition] = useState({lat: 24.884267863497296, lon: 66.99199101860874});
  const [id, setId] = useState('0');
  const [key, setKey] = useState('09386c9fb35b3d7b3b6c888674a466a2');
  const [input, setInput] = useState();
  const [name, setName] = useState()
  
  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&cnt=5&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setName(data.name)
        setPosition({...position, lat: data.coord.lat, lon: data.coord.lon})
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='relative'>
      <div className='absolute z-1000 left-[550px] med-display:left-[300px] top-5 flex justify-between items-center w-2/5 mob-display:w-3/5 mob-display:left-[130px] small-display:left-[100px] rounded-full bg-black border'>
        <div className='text-white w-full p-2'>
          <input
            className='bg-black w-full ml-2 focus:outline-none'
            type='search'
            id='search-field'
            placeholder='Searh here'
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className='p-2 cursor-pointer'>
          <img src='./images/search.png' alt='' height={25} width={25} />
        </button>
      </div>
      <div>
        
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
        <LocationMarker name={name} position={position} />
      </MapContainer>
    </div>
  );
}

export default App;
