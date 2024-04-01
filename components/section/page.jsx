'use client';
import React, { useState } from 'react';
import { IoLogIn } from 'react-icons/io5';
import { FiSearch, FiUserPlus } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import BoxContainer from '../boxContainer/page';
import SearchBoxContainer from '../searchBoxContainer/page';
import UserLogin from '../userlogin/page';
const Section = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupUserOpen, setIsPopupUserOpen] = useState(false);
  const [isPopupOpenSearch, setIsPopupOpenSearch] = useState(false);
  const handleSearchBoxClick = () => setIsPopupOpenSearch(true);
  const handleSearchBoxCloseClick = () => setIsPopupOpenSearch(false);
  const handleButtonClick = () => setIsPopupOpen(true);
  const handleUserButtonClick = () => setIsPopupUserOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleUserButtonCloseClick = () => setIsPopupUserOpen(false);
  return (
    <>
      <div className="flex flex-col px-4 m-4 gap-4 bg-[#d3bb98] h-auto rounded-md">
        <div className="flex p-2 flex-col gap-2">
          <h1 className="text-red-600 md:text-5xl lg:text-6xl sm:text-5xl text-4xl font-white font-bold mt-2 p-2">
            Weaving Dre
            <span className="text-white">ams into Reality..!!</span>
          </h1>
          <h4 className="h-auto text-lg md:text-md sm:text-lg text-[#a13838] font-bold  h-full pl-8 ml-4 text-left">
            Where Love Meets Elegance..!!
          </h4>
        </div>
        <div className="flex p-2 m-2 gap-4 flex-col ">
          <label className="text-[#1e2519] font-semibold pl-4">
            Search your Person..
          </label>
          <div className="flex flex-col gap-4 items-center md:flex-row">
   <input
    type="text"
    className="py-2 h-12 bg-white color-[#1d4136] left-2 text-black w-full md:w-1/2 rounded-full ml-4 outline-none pl-2"
    placeholder="Search Here"
   />
   <button className="flex items-center justify-center text-semibold p-2 h-8 text-center bg-green-500 hover:bg-green-700 text-[#fcf5e5] rounded-xl md:h-12">
    Search
   </button>
   <button className="flex items-center w-2/5 text-semibold justify-between p-2 h-8 text-center text-xs md:text-lg lg:text-lg bg-green-500 hover:bg-green-700 text-[#fcf5e5] rounded-xl md:h-12 md:w-1/2">
    Remarraige Search
    <BsFillSearchHeartFill className="h-6 w-6 ml-2 text-red-500" />
   </button>
</div>
          
        </div>
        <div className="flex flex-row h-20 bg-[#a37a4c] p-2 rounded-md gap-4 m-2 justify-evenly m-4 shadow-md hover:opacity-80  shadow-lg shadow-slate-500 shadow-xl shadow-right">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div
              className="text-xl text-sm md:text-md lg-text-lg flex-col active:color-yellow-400 font-semibold hover:text-white flex items-center justify-center cursor-pointer hover: transition-x-1 ease-in-out delay-150 hover:-translate-y-1 duration-300"
              onClick={handleSearchBoxClick}>
              <FaSearch className="mr-2 text-sm md:text-md lg-text-lg xl:text-xl"/>
              <span className='text-xs md:text-lg lg:text-lg xl:text-xl text-[#ffffff]'>Search</span>
              
            </div>
            {isPopupOpenSearch && (
              <SearchBoxContainer
                handleSearchBoxCloseClick={handleSearchBoxCloseClick}
              />
            )}
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <button className="text-xl flex-col font-semibold hover:text-white flex items-center justify-center cursor-pointer hover: transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
            onClick={handleUserButtonClick}>
              <FiUserPlus className="mr-2 text-md md:text-md lg-text-lg xl:text-xl "/>
              <span className='text-xs md:text-lg lg:text-lg xl:text-xl text-[#ffffff]'>New User</span>
            </button>
          </div>
          {isPopupUserOpen && (
            <UserLogin handleUserButtonCloseClick={handleUserButtonCloseClick}/>
          )}
          <div className="flex flex-col gap-2 items-center justify-center">
            <div
              className="text-xl flex-col font-semibold hover:text-white flex items-center justify-center cursor-pointer hover: transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
              onClick={handleButtonClick}>
              <IoLogIn className="mr-2 text-md md:text-md lg-text-lg xl:text-xl"/>
              <span className='text-xs md:text-lg lg:text-xl xl:text-xl text-[#ffffff]'>Login</span>
            </div>
            {isPopupOpen && (
              <BoxContainer handleClosePopup={handleClosePopup} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
