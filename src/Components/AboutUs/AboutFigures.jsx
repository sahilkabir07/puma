import React from 'react'

const AboutFigures = () => {
    return (
        <div className='mt-24'>
            <p className='hover:text-red-400 ml-12 font-semibold text-6xl text-gray-800'>PUMA IN FIGURES</p>
            <div className='flex flex-wrap p-12 gap-8 text-center'>
                <span>
                    <p className='hover:text-blue-400 text-6xl font-bold text-gray-800'>8.602</p>
                    <p className='hover:text-blue-400 font-bold text-xl text-gray-800'>BILLION EURO SALES IN 2023</p>
                </span>
                <span>
                    <p className='hover:text-blue-400 text-6xl font-bold  text-gray-800'>622</p>
                    <p className='hover:text-blue-400 font-bold text-xl  text-gray-800'>MILLION EUROS EBIT IN 2023</p>
                </span>
                <span>
                    <p className='hover:text-blue-400 text-6xl font-bold  text-gray-800'>&asymp;21,000</p>
                    <p className='hover:text-blue-400 font-bold text-xl  text-gray-800'>EMPLOYEES</p>
                </span>
                <span>
                    <p className='hover:text-blue-400 text-6xl font-bold  text-gray-800'>1948</p>
                    <p className='hover:text-blue-400 font-bold text-xl  text-gray-800'>FOUNDING YEAR</p>
                </span>
            </div>
        </div>
    )
}

export default AboutFigures