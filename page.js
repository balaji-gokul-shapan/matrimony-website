'use client'
import Section from './components/section/page';
import Carousel from './components/carousel/page';
import Main from './components/main/page';
import Article from './components/article/page';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaAngleDoubleUp } from "react-icons/fa";
import Ads from './ads/page';
import React from 'react';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <Carousel />
      <Section />
      <Main />
      <Ads />
      <Article />
      <div className="fixed bottom-10 right-5 ">
        <button className="p-2 bg-green-500 text-white rounded-full cursor-pointer" >
          <IoLogoWhatsapp size={40}  />
        </button>
      </div>

      <div className="fixed bottom-10 left-5 ">
        <button onClick={scrollToTop} className="p-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <FaAngleDoubleUp size={40}  />
        </button>
      </div>
    </>

  );
}
