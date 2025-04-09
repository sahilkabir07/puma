import React from 'react'
import OfferBanner from '../Trending/OfferBanner'
import SportsCards from './SportsCards'
import TagsCard from '../Trending/TagsCard'
import Cards from '../Cards'

const SportsPage = () => {
    return (
        <div className='pt-32'>
            <Cards />
            <SportsCards />
            <TagsCard />
        </div>
    )
}

export default SportsPage