import React from 'react'
import AboutUsData from './AboutUsData'
import AboutUsCards from './AboutUsCards'
import AboutUsCarousel from './AboutUsCarousel'
import AboutManagement from './AboutManagement'
import AboutFigures from './AboutFigures'

const AboutUsPage = () => {
    return (
        <div>
            <AboutUsData />
            <AboutUsCards />
            <AboutUsCarousel />
            <AboutManagement />
            <AboutFigures />
        </div>
    )
}

export default AboutUsPage