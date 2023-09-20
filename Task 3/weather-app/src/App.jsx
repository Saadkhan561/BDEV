import './App.css';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <img className='absolute inset-0 h-full w-full object-cover' src="./images/cloudy.jpg" alt="" />
      <div className='absolute inset-0 bg-blue-900 bg-opacity-70'></div>
      <div className='relative rounded-3xl lg:w-7/12 search-bar:w-4/5 h-3/5 mob-display:h-4/5 flex flex-col justify-center items-center p-4 bg-gradient-to-r from-gray-300 to-blue-300'>
        <div className='flex justify-between items-center w-11/12 rounded-full bg-white border'>
          <div className='w-full p-2'>
            <input
              className='w-full ml-2 focus:outline-none'
              type='search'
              placeholder='Searh here'
            />
          </div>
          <div className='p-2 cursor-pointer'>
            <img src='./images/search.png' alt='' height={25} width={25} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='font-sans text-4xl font-semibold mt-8'>
            New York
          </p>
          <div className='flex items-center mt-2'>
            <img src='./images/cloudy.png' alt='' width={60} height={60} />
            <p className='text-5xl ml-4 text-blue-500'>20&deg; C</p>
          </div>
        </div>
        <div className='mt-16 mob-display:mt-24 flex justify-evenly mob-display:flex-col w-full border'>
          <div className='flex shrink-0 mob-display:justify-between p-6 border bg-gray-200 rounded-2xl'>
            <img src='./images/humidity.png' alt='' height={40} width={50} />
            <div className='text-lg font-semibold ml-4'>
              <p>64%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className='flex shrink-0 mob-display:justify-between mob-display:mt-4 p-6 border bg-gray-200 rounded-2xl'>
            <img src='./images/wind.png' alt='' height={40} width={50} />
            <div className='text-lg font-semibold ml-4'>
              <p>18 Km/Hr</p>
              <p>Wind Speed</p>
            </div>
          </div>
          <div className='flex shrink-0 mob-display:justify-between mob-display:mt-4 p-6 border bg-gray-200 rounded-2xl'>
            <img src='./images/pressure.png' alt='' height={40} width={50} />
            <div className='text-lg font-semibold ml-4'>
              <p>1015</p>
              <p>Pressure</p>
            </div>
          </div>
          <div className='flex shrink-0 mob-display:justify-between mob-display:mt-4 p-6 border bg-gray-200 rounded-2xl'>
            <img src='./images/visibility.png' alt='' height={40} width={50} />
            <div className='text-lg font-semibold ml-4'>
              <p>10000</p>
              <p>Visibility</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
