import React from 'react';
import Hero from './Hero';
import Cards from './Cards';
import SecondBanner from './SecondBanner';
import ThirdBanner from './ThirdBanner';
import TravelBanner from './TravelBanner';
import Squidgame from './Squidgame';
import SoftrideBanner from './SoftrideBanner';
import SliderCards from './SliderCards';


const HomePage = () => {
    return (
        <div>
            <Hero />
            <Cards />
            <SecondBanner />
            <ThirdBanner />
            <TravelBanner />
            <Squidgame />
            <SoftrideBanner />
            <SliderCards />
        </div>
    )
}

export default HomePage