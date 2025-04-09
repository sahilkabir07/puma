import React from 'react'
import OfferBanner from '../Trending/OfferBanner'
import MotorSportsBanner from './MotorSportsBanner'
import MotorSportsCardsItems from './MotorSportsCardsItems'
import MotorSportsWomenCards from './MotorSportsWomenCards'

const MotorSportsPage = () => {
    return (
        <div>
            <OfferBanner />
            <MotorSportsBanner />
            <MotorSportsCardsItems />
            <MotorSportsWomenCards />
        </div>
    )
}

export default MotorSportsPage