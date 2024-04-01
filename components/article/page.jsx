import React from 'react';
import { FaBell, FaFacebook, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MdCollectionsBookmark } from 'react-icons/md';
import { IoMdTime } from 'react-icons/io';
import { FaBlenderPhone } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
const Article = () => {
  return (
    <>
      <div className="flex flex-row h-auto bg-[#DBAFA0] p-2 rounded-md gap-4 m-2 justify-evenly shadow-md">
        <div className="flex flex-col gap-2 items-center justify-evenly">
          <h1 className="text-red-900 md:text-4xl lg:text-5xl sm:text-4xl text-3xl text-center font-white font-bold m-1 p-1">
            Get Touch Us
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 p-2 items-center justify-evenly md:justify-evenly">
            <div className="bg-[#f09fb0] gap-2 p-2 items-center  flex flex-col sm:flex-row md:flex-col shadow-lg shadow-slate-500 shadow-2xl">
              <div class="text-lg sm:text-md md:text-lg lg:text-lg xl:text-lg font-semibold text-white rounded-md">
                Customer Care
              </div>
              <div class="text-md  sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                For any Assistance Call
              </div>
              <div className="flex flex-row">
                <div className="flex items-center gap-1">
                  <IoMdTime className="h-4 w-4" />
                  <div class="text-md font-semibold sm:text-sm md:text-md lg:text-md xl:text-md">
                    10 AM to 7.30 PM
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 p-2">
                <div className="flex flex-row gap-4">
                  <div className="flex items-center gap-1">
                    <FaBlenderPhone className="h-6 w-6 ml-auto text-blue-500" />
                    <div className="text-md font-semibold sm:text-sm md:text-md lg:text-md xl:text-md">
                      735 876 8433
                    </div>
                  </div>
                  <div className="flex items-center gap-1 ">
                    <FaPhoneAlt className="h-6 w-6 ml-auto text-blue-500" />
                    <div class="text-md font-semibold sm:text-sm md:text-md lg:text-md xl:text-md">
                      044 - 4856 0155
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f09fb0] gap-2 p-2 items-center  flex flex-col sm:flex-row md:flex-col h-36 shadow-lg shadow-slate-500 shadow-2xl">
              <div class="text-md sm:text-md md:text-lg lg:text-lg xl:text-lg font-semibold text-white rounded-md">
                Easy Registration
              </div>
              <div class="text-md sm:text-sm md:text-lg lg:text-lg xl:text-lg">
                Please Send photos, Horoscope,<br></br> Bio - Data Through
              </div>
              <div className="flex flex-row">
                {/* <div class="text-base sm:text-sm md:text-md lg:text-md xl:text-md"> */}
                <div className="flex items-center gap-1">
                    <FaWhatsapp className="h-6 w-6 ml-auto text-green-500" />
                    <div class="text-md font-semibold sm:text-sm md:text-md lg:text-md xl:text-md">
                    733 887 4957
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
            <div className="bg-[#f09fb0] gap-2 p-2 items-center flex flex-col sm:flex-row md:flex-col h-36 shadow-lg shadow-slate-500 shadow-2xl">
              <div class="text-lg sm:text-md md:text-lg lg:text-lg xl:text-lg font-semibold text-white">
                Stay Tuned With Us
              </div>
              <div class="text-md sm:text-sm md:text-md lg:text-md xl:text-md">
                <div className="flex flex-row gap-2 p-2">
                  <FaFacebook className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  <FaTwitter className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  <FaYoutube className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  <FaBell className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                  <MdCollectionsBookmark className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
