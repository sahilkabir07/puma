import React from 'react'

const WinterBanner = () => {
  return (
    <div className='bg-fixed bg-[url("https://about.puma.com/sites/default/files/styles/dd_image_slider/public/media/news/images/64a6e064e99ed.jpg?itok=v3VGPnFW")] bg-cover bg-center mt-16 w-screen h-screen relative'>
        <div className='absolute bottom-20 right-10'>
            <p className='text-white font-bold text-3xl'>
                FLAT 40% OFF
            </p>
            <p className='text-white font-bold text-3xl'>
                ON WINTERWEAR
            </p>
            <p className='text-white text-xl'>
                WARM FITS FOR COLD GATEWAYS
            </p>
            <button className='bg-white w-24 h-10 mt-4 font-bold'>
                SHOP NOW
            </button>
        </div>
    </div>
  )
}

export default WinterBanner