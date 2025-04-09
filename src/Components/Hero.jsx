import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (timerActive) {
      const interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerActive]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  };

  return (
    <div className=' relative h-[50vh] md:h-screen w-screen bg-fixed bg-cover bg-center flex-col  
bg-[url("https://images.unsplash.com/photo-1572295293833-2d7556b54324?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVtYXxlbnwwfHwwfHx8MA%3D%3D")] text-white'>


      <div className='absolute top-1/2 left-0 transform -translate-y-1/2 text-white p-4 space-y-4 md:mt-24'>
        <div className="group">
          <p className="text-3xl font-bold ml-8 md:ml-16 transition-all duration-300 group-hover:text-orange-500 group-hover:scale-110">
            FLAT 40% OFF
          </p>
          <p className="text-xl font-medium transition-all duration-300 group-hover:text-blue-500 group-hover:scale-105">
            + EXTRA 5% OFF ON ONLINE PAYMENTS
          </p>
        </div>

        <div className='flex gap-4'>
          <div className="flex gap-4">
            <Link to="/Men">
              <button className="bg-white text-black border flex items-center justify-center h-8 w-28 font-bold 
      transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
                FOR HIM
              </button>
            </Link>

            <Link to="/Women">
              <button className="bg-white text-black border flex items-center justify-center h-8 w-28 font-bold 
      transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
                FOR HER
              </button>
            </Link>

            <Link to="/Kids">
              <button className="bg-white text-black border flex items-center justify-center h-8 w-28 font-bold 
      transition-all duration-300 hover:bg-black hover:text-white hover:scale-105">
                FOR KIDS
              </button>
            </Link>
          </div>

        </div>
      </div>

      <div className='hidden sm:flex absolute top-2/3 right-6 transform -translate-y-1/2 text-white p-4 space-y-4 flex-col items-center'>
        <p className='font-bold text-3xl text-orange-500'>LIMITED PERIOD OFFER</p>
        <p className='font-bold text-6xl text-blue-600 bg-white rounded-lg px-6'>{formatTime(timeLeft)}</p>
        <p className='text-lg font-semibold'>HOURS MINUTES SECONDS</p>
      </div>

    </div>

  )
}

export default Hero