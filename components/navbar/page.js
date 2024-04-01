'use client';
import React, { useState } from 'react';
import '../../globals.css';
import Image from 'next/image';
import logo from '../../../../public/images/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { MdOutlineGTranslate } from 'react-icons/md';
import { MdCollectionsBookmark } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegCircleUser } from "react-icons/fa6"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const handleClose = ()=>{
    setOpen(false)
  }
  const options = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'About Us',
      link: '/',
    },
    {
      name: 'Contact Us',
      link: '/',
    },
    {
      name: 'Create an Account',
      link: '/',
    },
    {
      name: 'Login',
      link: '/',
      onClick: () => {
        console.log('Login clicked');
      },
    },
  ];
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setIsOpen(false); // Close the dropdown when an option is selected
  };

  return (
    <>
   <div className="h-32 w-full bg-[#124076] bg-opacity-80 opacity-70 transition ease-in-out delay-150 flex items-center justify-evenly p-4 gap-24 m:w-full sm:w-full md:w-full lg:w-full xl:w-full">
  <div className="flex justify-start">
    <Image
      src={logo}
      alt="logo"
      width={200}
      height={200}
      className="cursor-pointer object-contain md:object-cover"
    />
  </div>
  <div className="flex">
    <button
      className="text-white md:block lg:hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={() => setOpen((prev) => !prev)}
    >
      <AiOutlineMenu className="h-8 w-8 text-white-800 cursor-pointer right-0" />
    </button>
    {open && (
      <div className="bg-black top-0 absolute  inset-y-0 right-0  flex flex-col justify-center items-center h-screen overflow-y-auto w-48 flex flex-col p-2 rounded gap-4 transition ease-in-out delay-150">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setOpen((prev) => !prev)}
            className="text-white bg-black vh-100 hover:text-green-300  font-semibold cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 duration-300 text-md lg:text-md lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1"
          >
            {option.name}
          </div>
        ))}
      </div>
    )}
    
    <div className="lg:block md:hidden">
      <div className="hidden md:block">
        <div className="w-full text-white bg-black p-2 rounded flex flex-row gap-4 z-50 font-semibold justify-center align-middle">
          {options.map((option, index) => (
            <div
              key={index}
              className="hover:text-green-300 bg-black bg-blue cursor-pointer font-semibold transition ease-in-out delay-150 hover:-translate-x-1 duration-300 text-md lg:text-md lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1"
            >
              {option.name}
            </div>
          ))}
        </div>
        
        {isOpen && (
          <>
            <div className="absolute bg-white border rounded-md p-2 flex justify-end top-20 right-2 z-10 cursor-pointer w-auto">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="p-2 outline-none flex flex-col w-full"
              >
                <option value="">Select an option</option>
                <option value="Tamil">Tamil 1</option>
                <option value="English">Option 2</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;
