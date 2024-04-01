import React from 'react';

const Ads = () => {
  return (
    <>
      <div className="flex flex-row h-auto bg-[#74E291] p-2 rounded-md gap-4 m-2 justify-evenly shadow-md">
        <div className="flex flex-col gap-2 items-center justify-evenly">
          <h1 className="text-[#211C6A] md:text-4xl lg:text-5xl sm:text-4xl text-3xl text-center font-white font-bold m-1 p-1">
            Our Latest Videos
          </h1>
          <div className="flex flex-row gap-2 p-2 items-center justify-evenly">
            <div className="w-full md:w-3/4 mx-auto hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl shadow-lg shadow-slate-500 shadow-xl">
              <iframe
                className="w-full h-auto"
                src="https://youtu.be/9j89dmRTGx8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>

            <div className="w-full md:w-3/4 mx-auto hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl shadow-lg shadow-slate-500 shadow-xl">
              <iframe
                className="w-full h-auto"
                src="https://youtu.be/MM6EygDy-dI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;
