import React from 'react'

const MotorSportsCards = ({ src, title, description }) => {
    return (
        <div className='flex-col justify-items-center w-96  h-[400px]'>
            <img
                src={src}
                className="w-102 h-102 object-cover "
            />
            <div className="flex flex-col items-center justify-center text-center p-0">
                <p className="text-xl p-4 font-bold">{title}</p>
                <p className="mb-4 text-xs">{description}</p>
                <button className="bg-black text-white px-16 py-2  hover:bg-gray-800 transition">
                    SHOP NOW
                </button>
            </div>
        </div>
    )
}

export default MotorSportsCards