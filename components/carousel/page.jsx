'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import banner1 from '../../../../public/carousel/banner1.jpg';
import banner2 from '../../../../public/carousel/banner2.jpg';
import banner3 from '../../../../public/carousel/banner3.jpg';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { MdOutlineSkipPrevious } from 'react-icons/md';

const Carousel = () => {
  const images = [banner1, banner2, banner3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  useEffect(() => {
    const time = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);
    return () => clearInterval(time);
  }, [images.length]);
  return (
    <div className="flex w-full  bg-gray-800">
      <button
        className="absolute  top-1/3 lg:top-1/3 md:top-1/3 sm:top-1/3   left-0 lg:left-2 md:left-2 p-2 bg-gray-800 opacity-50 text-white rounded-l-lg"
        onClick={prevImage}>
        <MdOutlineSkipPrevious />
      </button>

      <button
        className="absolute  top-1/3 lg:top-1/3 md:top-1/3 sm:top-1/3   right-0 lg:right-2 p-2 bg-gray-800 opacity-50 text-white rounded-r-lg"
        onClick={nextImage}>
        <MdOutlineNavigateNext />
      </button>
      <div className="flex  overflow-hidden w-full vh-100">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`-   w-full ${
              index === currentImageIndex ? 'block' : 'hidden'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
