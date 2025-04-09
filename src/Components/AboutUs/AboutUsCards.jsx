import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
    "https://about.puma.com/sites/default/files/styles/dd_preview_slider/public/media/images/tommie-smith.png?itok=Zrfy8b6i",
    "https://about.puma.com/sites/default/files/styles/dd_preview_slider/public/media/images/confident.png?itok=QSiVUXmQ",
    "https://about.puma.com/sites/default/files/styles/dd_preview_slider/public/media/images/determined.png?itok=Hf_BxJYq",
    "https://about.puma.com/sites/default/files/styles/dd_preview_slider/public/media/images/joyful.png?itok=N4eQ8sby"
];
const imgInfo = [
    "We are never afraid to take risks. We stand up for our beliefs and are prepared to make the choices that will push sports forward.",
    "Everything we do, we do with conviction . We back our instinct to do the right thing and we are always bold in our actions.",
    "Nothing deters us from realising our dreams. We believe success is an endless pursuit to improve ourselves and the way we play.",
    "For us sport is more than winning at all costs. We live to play the game and revel in the pure joy of sporting competition."
];
const headInfo = ["be brave", "be confident", "be determined", "be joyful"];

const AboutUsCards = () => {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-10 flex gap-8">
            <motion.img
                src={images[current]}
                alt="Carousel Slide"
                className="w-[60%] h-[500px] object-cover rounded-lg shadow-lg"
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            />
            <div className="flex flex-col justify-center w-[40%]">

                <motion.p
                    className="uppercase font-bold text-4xl text-gray-700 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    {headInfo[current]}
                </motion.p>


                <motion.p
                    className="mt-4 text-lg font-semibold text-gray-800"
                    key={current}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    {imgInfo[current]}
                </motion.p>
            </div>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                ❮
            </button>


            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div>
    );
};

export default AboutUsCards;
