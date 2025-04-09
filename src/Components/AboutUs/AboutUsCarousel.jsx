import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/yaroslava-mahuchikh.png?itok=CuUgmX8T",
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/karsten-warholm.png?itok=bpC5rn0U",
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/24ss-br-yos-duplantis-cropped.jpg?itok=HGG1GVLo",
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/usain-bolt.png?itok=fgfgtkhq"
];

const imgInfo = [
    "I sometimes imagine that I am a bird.",
    "Whatever I do, I do it with passion.",
    "I believed, I just had to wake everybody else up.",
    "My single goal is to become the greatest. If I get to be a legend, I've achieved my goal."
];

const headInfo = ["Yaroslava Mahuchikh", "Karsten Warholm", "Armand Mondo Duplantis", "Usain Bolt"];

const AboutUsCarousel = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-10 flex flex-col md:flex-row gap-8 items-center px-4">
            <motion.img
                src={images[current]}
                alt="Carousel Slide"
                className="w-full md:w-[60%] h-[300px] md:h-[500px] object-cover rounded-lg shadow-lg"
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            />


            <div className="flex flex-col justify-center w-full md:w-[40%] text-center md:text-left">
                <motion.p
                    className="uppercase font-bold text-xl md:text-4xl text-gray-700"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    {headInfo[current]}
                </motion.p>

                <motion.p
                    className="mt-4 text-3xl font-light md:text-5xl  text-gray-800"
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
                className="absolute left-4 md:left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 md:p-3 rounded-full"
                onClick={prevSlide}
            >
                ❮
            </button>

            <button
                className="absolute right-4 md:right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 md:p-3 rounded-full"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div>
    );
};

export default AboutUsCarousel;
