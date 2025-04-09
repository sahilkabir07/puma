import React from 'react'
import jsonData from '../constants/ProductsInfo.json'

const SliderCards = () => {
  return (
    <div className='flex overflow-x-auto'>
      <div className="flex gap-4 p-4">
        {jsonData.map((item) => (
          <div
            className="w-[300px] bg-white shadow-md rounded-lg p-4 flex flex-col "
            key={item.id}
          >
            <div className="text-center">
              <p className="text-sm text-green-600 font-bold">{item.discount}</p>
              <img
                src={item.image}
                className="w-full h-48 object-cover rounded-md mt-2"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.shoeType}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-gray-800 font-semibold">{item.price}</p>
                <p className="text-sm line-through text-red-500">{item.dropPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SliderCards