import React from 'react'
import AboutManagementCards from './AboutMangementCards'

const AboutManagement = () => {
    return (
        <div>
            <p className='font-bold text-xl text-center mt-10 hover:text-red-500 hover:underline'>
                MANAGEMENT BOARD
            </p>
            <div className='flex gap-8 mt-12 p-4'>
                <AboutManagementCards src="https://about.puma.com/sites/default/files/styles/dd_default_mobile/public/media/images/arne-freundt.png?itok=mq8aGWde" title="ARNE FREUNDT" info="CEO,CCO" />
                <AboutManagementCards src="https://about.puma.com/sites/default/files/styles/dd_default_mobile/public/media/images/m22_markusneubrand_1.jpg?itok=GhSc7Gfg" title="MARKS NEUBRAND" info="CHIEF FINANCIAL OFFICER" />
                <AboutManagementCards src="https://about.puma.com/sites/default/files/styles/dd_default_mobile/public/media/images/m22_mariavaldes.jpg?itok=qTF9xfAD" info="CHIEF PRODUCT OFFICER" title="MARIA VALDES" />
            </div>
        </div>
    )
}

export default AboutManagement