import React from 'react';
import { data } from '@/app/data/datas/page';
import { bride } from '../../data/bride/page';
import Image from 'next/image';
import { Image1 } from '../../../../public/main/image-1.jpg';
const Main = () => {
  return (
    <>
      <div className="flex flex-col px-4 m-4 gap-4  bg-[#aac784] rounded">
        <div className="flex justify-center items-center flex-0 p-1 flex-col flex-row">
          <h1 className="text-[#067453] md:text-4xl lg:text-5xl sm:text-4xl text-3xl font-white font-bold m-1 p-1">
            Latest Profile
          </h1>
          <div className="flex justify-center items-center">
            <div className="p-2 flex flex-col">
              <h1 className="text-gray-200 md:text-2xl m-2 lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1 bg-[#619b67] w-3/4 shadow-lg shadow-slate-500 shadow-2xl">
                Grooms List
              </h1>
              <div className="flex justify-center items-center m- 2 shadow-lg shadow-slate-300 shadow-xl">
                <div className="border-x-8 border-gray-800 rounded p-2 text-black font-bold shadow-lg shadow-slate-500 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-2 shadow-lg shadow-slate-500 shadow-xl">
                    {data.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col bg-slate-200 rounded p-2">
                        <Image
                          src={item.img}
                          alt="book"
                          width={200}
                          height={200}
                          className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl shadow-lg shadow-slate-500 shadow-xl"
                        />
                        <h1 className="text-center text-[#2e373a] md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
                          {item.name}
                        </h1>
                        <h1 className="text-center text-[#2e373a] md:text-xl lg:text-xl sm:text-xl text-lg font-white font-bold m-1 p-1">
                          {item.id}
                        </h1>
                        <p className="text-center text-[#2e373a] text-md">
                          {item.community}
                        </p>
                        <p className="text-center text-[#2e373a] text-md">
                        Age: {item.age}
                        </p>
                        <div className="text-center p-2">
                          <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded mx-auto">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center m-4">
                <button className="w-40 md:w-48 lg:w-56 xl:w-64 h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-4 m-2 rounded">
                  View All
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
          <div className="border-x-8 border-black"></div>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-2 flex flex-col">
              <div className="p-2">
              <h1 className="text-gray-200 ml-2 md:text-2xl lg:text-2xl sm:text-2xl m-2 text-xl font-white font-bold m-2 p-2 bg-[#619b67] w-3/4 shadow-lg shadow-slate-500 shadow-2xl">
                Bride List
              </h1>

              </div>
              <div className="flex justify-center items-center m-2">
                <div className="border-x-8 border-gray-800 rounded p-2 text-black font-bold shadow-lg shadow-slate-500 shadow-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-2 shadow-lg shadow-slate-500 shadow-xl">
                    {bride.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col bg-slate-200 rounded p-2">
                        <Image
                          src={item.img}
                          alt="book"
                          width={200}
                          height={200}
                          className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-xl shadow-lg shadow-slate-500 shadow-xl"
                        />
                        <h1 className="text-center text-[#2e373a] md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
                          {item.name}
                        </h1>
                        <h4 className="text-center text-[#2e373a] md:text-xl lg:text-xl sm:text-xl text-lg font-white font-bold m-1 p-1">
                          {item.id}
                        </h4>
                        <p className="text-center text-[#2e373a] text-md">
                          {item.community}
                        </p>
                        <p className="text-center text-[#2e373a] text-md">
                          Age: {item.age}
                        </p>
                        <div className="text-center p-2">
                          <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded mx-auto">
                            View Profile
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center m-4">
                <button className="w-40 md:w-48 lg:w-56 xl:w-64 h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-4 m-2 rounded">
                  View All
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
