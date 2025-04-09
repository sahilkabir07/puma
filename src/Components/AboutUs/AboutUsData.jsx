import React from 'react';

const AboutUsData = () => {
    return (
        <div className='w-screen pt-32 pb-32'>
            <img
                className='w-screen h-[70%] bg-center'
                src="https://about.puma.com/sites/default/files/styles/dd_hero_tablet/public/media/hero/images/header-puma.png?itok=cQTRp9nk"
                alt="Puma Banner"
            />

            <p className='uppercase font-bold text-xl text-gray-800 pr-12 pl-12 mt-20'>
                When you’re fast, you set the pace. The game moves slower. The ball looks bigger. This is how the greats change the game. This is how they win. PUMA invites you to break through your limits, unlock transcendent athletic performance, and see the game like we do: FOREVER. FASTER.
            </p>
            <div className="flex justify-center mt-10">
                <iframe
                    className="w-full max-w-4xl aspect-video rounded-sm shadow-lg mt-16"
                    src="https://www.youtube.com/embed/LRJP140fv3E"
                    title="Puma Video"

                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default AboutUsData;
