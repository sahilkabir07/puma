import React from 'react'

const AboutManagementCards = ({ src, title, info }) => {
    return (
        <div
            style={{ backgroundImage: `url(${src})` }}
            className="flex-col justify-items-center bg-cover bg-center h-64 w-1/3 relative"
        >
            <p
                className="mt-16 p-8 font-bold text-white uppercase transition-transform transform duration-300 ease-in-out hover:scale-110 hover:translate-y-2 hover:text-blue-400"
            >
                {title}
            </p>
            <p
                className="text-white transition-transform transform duration-300 ease-in-out hover:scale-110 hover:translate-y-2 hover:text-blue-400"
            >
                {info}
            </p>
        </div>

    )
}

export default AboutManagementCards