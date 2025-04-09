import React from 'react'

const CardItem = ({ src, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
      <div
        style={{ backgroundImage: `url(${src})` }}
        className="bg-cover bg-center h-64 transition-transform duration-300 ease-in-out group-hover:scale-110"
      >
        <p className="w-40 p-8 font-bold text-white uppercase bg-opacity-50">
          {title}
        </p>
      </div>
    </div>
  )
}

export default CardItem
