import { Link } from 'react-router-dom';
import React from 'react';

const ThirdBanner = () => {
  return (
    <div className="flex flex-col md:flex-row w-full mt-16">

      <img
        className="w-full md:w-1/3 object-cover"
        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/624709/01/mod01/fnd/IND/fmt/png/PUMA-x-X-GIRL-Women's-Jacket"
        alt="PUMA Jacket"
      />

      <div className="flex flex-col items-center justify-center w-full md:w-1/3 bg-gray-600 py-12 text-white text-center">
        <p className="text-3xl font-bold">MMQ</p>
        <p className="mt-2">HOLIDAY-READY WARDROBE</p>
        <Link to="/New">
          <button className="mt-4 bg-black text-white w-28 h-10 rounded-md hover:bg-gray-800 transition">
            SHOP NOW
          </button>
        </Link>
      </div>


      <img
        className="w-full md:w-1/3 object-cover"
        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/525724/01/mod01/fnd/IND/fmt/png/PUMA-FIT-Woven-Full-Zip-Men's-Training-Jacket"
        alt="PUMA Training Jacket"
      />
    </div>
  );
};

export default ThirdBanner;
