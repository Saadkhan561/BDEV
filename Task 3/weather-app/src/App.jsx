import './App.css';

function App() {
  return (
    <div className='flex justify-center items-center h-screen bg-blue-200'>
      <div className='rounded-3xl lg:w-2/5 search-bar:w-4/5 h-3/5 mob-display:h-4/5 flex flex-col justify-center items-center p-4 bg-[url("./images/clouds.gif")] bg-cover bg-opacity-100'>
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
          <p className='font-sans text-4xl font-semibold text-gray-500 mt-8'>
            New York
          </p>
          <div className='flex items-center mt-2'>
            <img src='./images/cloudy.png' alt='' width={60} height={60} />
            <p className='text-5xl ml-4 text-blue-500'>20&deg; C</p>
          </div>
        </div>
        <div className='mt-16 mob-display:mt-32 flex mob-display:flex-col justify-between w-4/5'>
          <div className='flex mob-display:justify-between p-6 border bg-gray-200 rounded-2xl'>
            <img src='./images/humidity.png' alt='' height={40} width={50} />
            <div className='text-lg font-semibold ml-4'>
              <p>64%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className='flex mob-display:justify-between mob-display:mt-4 p-6 border bg-gray-200 rounded-2xl'>
            <img src='./images/wind.png' alt='' height={40} width={50} />
            <div className='text-lg font-semibold ml-4'>
              <p>18 Km/Hr</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
