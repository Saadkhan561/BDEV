import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import LocationMarker from './components/location';
import { locations } from './locations';

import { MapContainer, TileLayer } from 'react-leaflet';

// https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&cnt=5&appid=${key}

function App() {
  // const [position, setPosition] = useState([24.899674, 67.206464]);
  const [position, setPosition] = useState({lat: 24.899674, lon: 67.206464});
  const [id, setId] = useState('0');
  const [key, setKey] = useState('09386c9fb35b3d7b3b6c888674a466a2');
  const [input, setInput] = useState();
  // const location = useRef(null);
  // const name = useRef(null);
  // useEffect(() => {
  //   setPosition(locations[id].loc);
  // });
  
  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&cnt=5&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosition({...position, lat: data.coord.lat, lon: data.coord.lon})
      })
      .catch((err) => console.log(err));
  };

  console.log(position)

  // const handleMouseOver = () => {
  //   location.current.classList.toggle('location-div');
  //   name.current.classList.remove('hidden')
  // };

  // const handleMouseLeave = () => {
  //   location.current.classList.remove('location-div');
  // };

  return (
    <div className='relative'>
      {/* <div
        // location={location}
        // onMouseOver={handleMouseOver}
        // onMouseLeave={handleMouseLeave}
        className='absolute top-20 right-20 z-1000 p-4 bg-white rounded-2xl'
      >
        <div
          // onMouseOver={handleMouseOver}
          // onMouseLeave={handleMouseLeave}
          className='flex mb-4 cursor-pointer'
        >
          <img src='./images/home.png' alt='' height={25} width={25} />
          <p
            name={name}
            id='0'
            onClick={handleClick}
            className='ml-2 font-medium hover:underline'
          >
            Home
          </p>
        </div>
        <div
          // onMouseOver={handleMouseOver}
          // onMouseLeave={handleMouseLeave}
          className='flex mb-4 cursor-pointer'
        >
          <img src='./images/gym.png' alt='' height={25} width={25} />
          <p
            name={name}
            id='1'
            onClick={handleClick}
            className='ml-2 font-medium hover:underline '
          >
            Gym
          </p>
        </div>
        <div
          // onMouseOver={handleMouseOver}
          // onMouseLeave={handleMouseLeave}
          className='flex mb-4 cursor-pointer'
        >
          <img src='./images/university.png' alt='' height={25} width={25} />
          <p
            name={name}
            id='2'
            onClick={handleClick}
            className='ml-2 font-medium hover:underline '
          >
            University
          </p>
        </div>
      </div> */}
      <div className='absolute z-1000 left-[550px] med-display:left-[300px] top-5 flex justify-between items-center w-2/5 mob-display:w-3/5 mob-display:left-[130px] rounded-full bg-black border'>
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
