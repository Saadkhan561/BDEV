import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // 09386c9fb35b3d7b3b6c888674a466a2
  const [input, setInput] = useState()
  const [key, setKey] = useState('09386c9fb35b3d7b3b6c888674a466a2')
  const [weather, setWeather] = useState({
    name: '',
    temp: 0,
    humidity: 0,
    windSpeed: 0,
    pressure: 0,
    visibility: 0
  })

  const handleClick = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=${key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setWeather({...weather, name: data.name, temp: data.main.temp, humidity: data.main.humidity, windSpeed: data.wind.speed, pressure: data.main.pressure, visibility: data.visibility})
      })
      .catch((err) => {
        setWeather({err: err})
      })
  }


  return (
    <div className='flex justify-center items-center h-screen'>
      <img className='absolute inset-0 h-full w-full object-cover' src="./images/cloudy.jpg" alt="" />
      <div className='absolute inset-0 bg-blue-900 bg-opacity-70'></div>
      <div className='relative rounded-3xl lg:w-7/12 search-bar:w-4/5 h-3/5 mob-display:h-95 flex flex-col justify-center items-center p-4 bg-gradient-to-r from-gray-300 to-blue-300'>
        <div className='flex justify-between items-center w-11/12 rounded-full bg-white border'>
          <div className='w-full p-2'>
            <input
              className='w-full ml-2 focus:outline-none'
              type='search'
              id='search-field'
              placeholder='Searh here'
              onChange={e=> setInput(e.target.value)}
            />
          </div>
          <button onClick={handleClick} className='p-2 cursor-pointer'>
            <img src='./images/search.png' alt='' height={25} width={25} />
          </button>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-sans text-4xl font-semibold mt-8'>
            {weather && weather.name}
          </p>
          <div className='flex items-center mt-2'>
            <img src='./images/cloudy.png' alt='' width={60} height={60} />
            <p className='text-5xl ml-4 text-blue-500'>{weather && weather.temp}&deg; C</p>
          </div>
        </div>
        <div className='mt-16 mob-display:mt-8 flex justify-evenly mob-display:flex-col w-full'>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between p-6  rounded-2xl'>
            <img src='./images/humidity.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-lg font-semibold ml-4'>
              <p>{weather && weather.humidity}</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between mob-display:mt-4 p-6  rounded-2xl'>
            <img src='./images/wind.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-lg font-semibold ml-4'>
              <p>{weather && weather.windSpeed}</p>
              <p>Wind Speed</p>
            </div>
          </div>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between mob-display:mt-4 p-6  rounded-2xl'>
            <img src='./images/pressure.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-lg font-semibold ml-4'>
              <p>{weather && weather.pressure}</p>
              <p>Pressure</p>
            </div>
          </div>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between mob-display:mt-4 p-6  rounded-2xl'>
            <img src='./images/visibility.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-lg font-semibold ml-4'>
              <p>{weather && weather.visibility}</p>
              <p>Visibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
