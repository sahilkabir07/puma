import React from 'react'
import MotorSportsCards from './MotorSportsCards'

const MotorSportsCardsItems = () => {
    return (
        <div className='h-[700px] w-screen '>
            <div className='w-full h-24 flex items-center justify-center'>
                <p className='font-bold text-3xl'>FAST CARS. FAST STYLES.</p>
            </div>
            <div className='flex justify-items-center gap-4 ml-8  '>
                <MotorSportsCards src="https://i0.wp.com/luxexpose.com/wp-content/uploads/2021/01/LuxExpose-PUMA_Scuderia_Ferrari_Collection_SS21_4.jpg?fit=1200%2C900&ssl=1" title="PUMA x Scuderia Ferrari" description="Rev up your team pride on raceday and everyday" />
                <MotorSportsCards src="https://about.puma.com/sites/default/files/styles/dd_hero_tablet/public/media/news/images/24aw-pr-ms-bmw-mms-neon-energy-look-1-0551-16x9-1920x1080px.jpg?itok=Vc6D5Uxz" title="PUMA x BMW M Motorsports" description="Unleash the rebel in you with bold styles" />
                <MotorSportsCards src="https://www.puma-catchup.com/wp-content/uploads/2023/07/PUMA-x-Porsche-_H2-750x421.jpg" title="PUMA x Porsche Legacy" description="Celebrate the legacy of Porsche with sleek and premium designs" />
            </div>
        </div>
    )
}

export default MotorSportsCardsItems