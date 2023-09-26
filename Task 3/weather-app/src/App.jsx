import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // 09386c9fb35b3d7b3b6c888674a466a2
  const [input, setInput] = useState();
  const [key, setKey] = useState('09386c9fb35b3d7b3b6c888674a466a2');
  const [weather, setWeather] = useState({
    name: '',
    temp: 0,
    humidity: 0,
    windSpeed: 0,
    pressure: 0,
    visibility: 0,
    type: '',
  });
  const [img, setImg] = useState('sun.png');
  const [bgImg, setbgImg] = useState('sky.jpg');
  const [errStatus, setErrStatus] = useState(false);
  const [err, setErr] = useState();

  const handleImg = (type) => {
    if (type == 'Clouds') {
      setImg('clouds.png');
      setbgImg('cloudy.jpg');
    } else if (type == 'Clear') {
      setImg('sun.png');
      setbgImg('sky.jpg');
    } else if (type == 'Rain') {
      setImg('shower.png');
      setbgImg('rain.jpg');
    } else if (type == 'Thunderstorm') {
      setImg('thunderstorm.png');
      setbgImg('storm.jpg');
    } else if (type == 'Snow') {
      setImg('snowflake.png');
      setbgImg('snow.jpg');
    } else if (type == 'Mist' || type == 'Smoke') {
      setImg('fog.png');
      setbgImg('mist.jpeg');
    } else if (type == 'Haze') {
      setImg('fog.png');
      setbgImg('haze.jpg');
    } else if (type == 'Dust' || type == 'Sand') {
      setImg('dust.png');
      setbgImg('dust.jpg');
    } else if (type == 'Ash') {
      setImg('thunderstorm.png');
      setbgImg('ash.jpg');
    } else if (type == 'Squall') {
      setImg('clouds.png');
      setbgImg('cloudy.jpg');
    } else if (type == 'Tornado') {
      setImg('tornado.png');
      setbgImg('tornado.jpg');
    } else if (errStatus) {
      setbgImg('error.jpg');
    } 
  };

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&cnt=5&appid=${key}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod == '404') {
          console.log(data);
          setErr(data.message);
          setErrStatus(true);
          setbgImg('error.jpg');
          setWeather({
            ...weather,
            name: '',
            temp: 0,
            humidity: 0,
            windSpeed: 0,
            pressure: 0,
            visibility: 0
          });
        } else {
          console.log(data);
          setErrStatus(false);
          handleImg(data.weather[0].main);
          setWeather({
            ...weather,
            name: data.name,
            temp: data.main.temp,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            pressure: data.main.pressure,
            visibility: data.visibility,
            type: data.weather[0].main,
          });
        }
      });
  };

  const displayDiv = () => {
    return (
      <div className='relative flex flex-col justify-center text-white mt-4'>
        <div className='flex items-center mt-2'>
          {weather && (
            <img src={`./images/${img}`} alt='' width={80} height={80} />
          )}
          <p className='mob-display:text-3xl text-6xl font-bold ml-4'>
            {weather && weather.temp}&deg; C
          </p>
        </div>
        <p className='font-display mob-display:text-3xl text-6xl font-bold mt-8'>
          {weather && weather.name}
        </p>
        <p className='font-display mob-display:text-xl text-3xl font-bold mt-4'>
          {weather && weather.type}
        </p>
      </div>
    );
  };

  const displayError = () => {
    return (
      <div className='relative flex justify-items-center items-center mt-8'>
        <img src="./images/error.png" alt="" height={60} width={60}/>
        <p className='ml-4 text-4xl mob-display:text-2xl text-white font-semibold uppercase'>{err}</p>
      </div>
    );
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <img
        className='absolute inset-0 h-screen w-full object-cover'
        src={`./images/${bgImg}`}
        alt=''
      />
      <div className='absolute inset-0 bg-gray-900 bg-opacity-70'></div>
      <div className='relative rounded-3xl lg:w-10/12 search-bar:w-4/5 h-4/5 mob-display:h-95 flex flex-col justify-center items-center p-4 bg-gradient-to-r from-gray-300 to-blue-300'>
        <img
          className='absolute inset-0 h-full w-full object-cover rounded-3xl'
          src={`./images/${bgImg}`}
          alt=''
        />
        <div className='absolute inset-0 bg-blue-900 bg-opacity-10'></div>
        <div className='relative flex justify-between items-center w-7/12 mob-display:w-11/12 rounded-full bg-white border'>
          <div className='w-full p-2'>
            <input
              className='w-full ml-2 focus:outline-none'
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
        {errStatus ? displayError() : displayDiv()}
        <div className='relative mt-56 mob-display:mt-8 flex justify-evenly mob-display:flex-col w-4/5 text-white'>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between p-6  rounded-2xl bg-black bg-opacity-50'>
            <img src='./images/humidity.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-xl font-semibold ml-4'>
              <p>
                {weather && weather.humidity} gm/m<sup>-3</sup>
              </p>
              <p>Humidity</p>
            </div>
          </div>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between mob-display:mt-4 p-6  rounded-2xl bg-black bg-opacity-50'>
            <img src='./images/wind.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-xl font-semibold ml-4'>
              <p>{weather && weather.windSpeed} km/hr</p>
              <p>Wind Speed</p>
            </div>
          </div>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between mob-display:mt-4 p-6  rounded-2xl bg-black bg-opacity-50'>
            <img src='./images/pressure.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-xl font-semibold ml-4'>
              <p>{weather && weather.pressure} Pa</p>
              <p>Pressure</p>
            </div>
          </div>
          <div className='flex mob-display:flex-row flex-col items-center shrink-0 mob-display:justify-between mob-display:mt-4 p-6  rounded-2xl bg-black bg-opacity-50'>
            <img src='./images/visibility.png' alt='' height={40} width={50} />
            <div className='flex flex-col items-center text-xl font-semibold ml-4'>
              <p>{weather && weather.visibility} m</p>
              <p>Visibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
