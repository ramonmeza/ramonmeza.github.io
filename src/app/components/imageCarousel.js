import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

// thanks to https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
export default function ImageCarousel({ images, delay }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        console.log(delay);
        console.log(currentImageIndex);

        return () => { };
    }, [currentImageIndex]);

    const imageElems = images.map((image, index) => {
        return (
            <Image key={index} src={image.path} alt={image.description} width={image.width} height={image.height} className="w-full h-full inline-block rounded-md object-cover" />
        );
    });

    const imageDots = images.map((_, index) => {
        const dotStyles = currentImageIndex === index ? "inline-block h-5 w-5 rounded-full bg-gray-400 mx-1 my-2 cursor-pointer bg-gray-800" : "inline-block h-5 w-5 rounded-full bg-gray-400 mx-1 my-2 cursor-pointer"
        return (
            <div key={index} className={dotStyles} onClick={() => {
                setCurrentImageIndex(index);
            }}></div>
        );
    });

    return (
        <div className="mx-auto overflow-hidden max-w-sm sm:max-w-lg md:max-w-3xl">
            <div className="whitespace-nowrap duration-1000" style={{ transform: `translate3d(${-currentImageIndex * 100}%, 0, 0)` }}>
                {imageElems}
            </div>
            <div className="text-center">
                {imageDots}
            </div>
        </div>
    );
}