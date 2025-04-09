import React from 'react';

const MotorSportsWomenCards = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-full gap-4 p-4">
            <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 p-4">
                <img
                    className="w-full h-64 object-cover md:h-auto"
                    src="https://about.puma.com/sites/default/files/media/gallery/25ss-pr-ms-bmw-mms-m4-look-1-1699-16x9-1920x1080px.jpg"
                    alt="PUMA x BMW M Motorsport"
                />
                <p className="font-bold text-xl mt-4">PUMA x BMW M Motorsport</p>
                <p className="text-xs mt-2">
                    Street-ready collection with rebellious spirit in all designs
                </p>
                <button className="bg-black text-white px-8 py-2 hover:bg-gray-800 transition mt-2">
                    SHOP WOMEN
                </button>
            </div>
            <div className="flex flex-col items-center justify-center text-center w-full md:w-1/2 p-4">
                <img
                    className="w-full h-80 object-cover "
                    src="https://about.puma.com/sites/default/files/styles/dd_hero_wide/public/media/news/images/64a6e1fdac750.jpg?itok=O08KTL_f"
                    alt="PUMA x Scuderia Ferrari"
                />
                <p className="font-bold text-xl mt-4">PUMA x Scuderia Ferrari</p>
                <p className="text-xs mt-2">
                    Premium materials & forward-thinking designs come together in this collection of street-ready styles
                </p>
                <button className="bg-black text-white px-8 py-2 hover:bg-gray-800 transition mt-2">
                    SHOP WOMEN
                </button>
            </div>
        </div>
    );
};

export default MotorSportsWomenCards;
