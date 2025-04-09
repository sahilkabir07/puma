import React from 'react'
import CollaborationCards from './CollaborationCards'
import OfferBanner from '../Trending/OfferBanner'
import TagsCard from '../Trending/TagsCard'

const CollaborationPage = () => {
    return (
        <div>
            <OfferBanner />
            <CollaborationCards />
            <TagsCard />
        </div>
    )
}

export default CollaborationPage