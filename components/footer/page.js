import Image from 'next/image';
import React from 'react';
import { FaBell, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdCollectionsBookmark } from 'react-icons/md';
import payMoney from '../../../../public/images/payumoney.png';
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
  },
];
const Footer = () => {
  return (
    // <>
    //   <div
    //     className={
    //       'h-auto bg-gray-800 text-white p-4 flex flex-col text-center flex flex-col m:w-full sm:w-full md:w-full lg:w-full xl:w-full'
    //     }>
    //     <div className="flex h-auto bg-red-800 p-4 m-2 leading-6 flex flex-col rounded-md items-center">
    //       <h1 className="text-3xl font-bold m-2 p-2">Kettimelam</h1>
    //       Marriages are fixed in &quot;HEAVEN&quot; Whereas
    //       kettimelammatrimony.com is conducting the marriages. In Tamil one
    //       proverb is there that Marriage is a thousand era Crop. In which
    //       selecting of proper alliance is very important. In todays modern
    //       world, the latest technology is also required to get good alliance.
    //       Through our organisation necessary services, suggestions and
    //       assistance be provided by good experts to the Bride, Bridegrooms and
    //       parents. Our website is created in such a way to differentiate with
    //       other similar website and to serve people who are all registered and
    //       non-registered users. You can choose your life partner through your
    //       finger tips. Through our website all your Dreams Come True. Aims or
    //       Goals can be missed; But Trying should not be stopped. Please come and
    //       share whatever we know! &amp; Know whatever we don&quot;t know!! Get
    //       together! Think together!! And Bang the Kettimelam to our success!!!
    //       Be confident that marriages will come to Success.
    //       <button className='p-2 z-auto lg:w-1/6 w-2/6 m-4 justify-center items-center -z-0 bg-green-300'>Read more</button>
    //       {/* <button className='p-2 z-10 lg:w-1/6 w-2/6 m-4 justify-center items-center text-center bg-green-500 text-white rounded-lg hover:bg-green-700 translate-y-0 hover:-translate-y-1 drop-shadow-xl active:bg-yellow-600 sm:p-4'>Read More</button> */}
    //     </div>
    //     <div className="flex flex-row gap-2 h-auto p-4 space-x-2 justify-evenly">
    //       <div className="flex flex-col gap-2 ">
    //         {options.map((option, index) => (
    //           <div
    //             key={index}
    //             className="text-white font-semibold hover:text-green-300 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300 lg:text-md lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1">
    //             {option.name}
    //           </div>
    //         ))}
    //       </div>
    //       <div className="flex flex-col">
    //         <Image
    //           src={payMoney}
    //           width={300}
    //           height={300}
    //           className="cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg "
    //           alt="payumoney"
    //         />
    //       </div>
    //     </div>
    //     <div className="flex flex-row gap-2 h-auto p-4 space-x-2 justify-evenly">
    //       <div className="flex flex-row gap-8 p-4">
    //         <FaFacebook  className="h-8 w-8 text-blue-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    //         <FaTwitter className="h-8 w-8 text-blue-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    //         <FaYoutube className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    //         <FaBell className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    //         <MdCollectionsBookmark className="h-8 w-8 text-red-800 hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
    //       </div>
    //     </div>
    //     <div className="w-4/5 rounded-md bg-black mx-auto text-center p-4 lg:p-2 text-xs md:text-sm lg:text-sm xs:text-xs font-semibold">
    //       Copyright © 2024. All Rights Reserved | Kettimelam Matrimony
    //     </div>
    //     </div>
    //     {/* <div className="flex flex-col gap-2 ">
    //       {options.map((option, index) => (
    //         <div
    //           key={index}
    //           className="text-white text-lg md:text-sm lg:text-sm xs:text-xs font-semibold hover:text-green-300 cursor-pointer transition ease-in-out delay-150 hover:-translate-x-1 duration-300 lg:text-lg lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1">
    //           {option.name}
    //         </div>
    //       ))}
    //     </div> */}
    //     {/* <div className="w-full mx-auto text-center p-4 lg:p-2 text-xs md:text-sm lg:text-sm xs:text-xs font-semibold">
    //       Copyright © 2024. All Rights Reserved | Kettimelam Matrimony
    //     </div> */}
    //     {/* <div className="w-1/2 mx-auto text-center"></div> */}
    // </>
    <>
      <div className="h-auto bg-gray-800 text-white p-4 flex flex-col text-center flex flex-col m:w-full sm:w-full md:w-full lg:w-full xl:w-full">
        <div className="flex h-auto bg-red-800 p-4 m-2 leading-6 flex flex-col rounded-md items-center">
          <h1 className="text-3xl font-bold m-2 p-2">Kettimelam</h1>
          Marriages are fixed in &quot;HEAVEN&quot; Whereas
          kettimelammatrimony.com is conducting the marriages. In Tamil one
          proverb is there that Marriage is a thousand era Crop. In which
          selecting of proper alliance is very important. In todays modern
          world, the latest technology is also required to get good alliance.
          Through our organisation necessary services, suggestions and
          assistance be provided by good experts to the Bride, Bridegrooms and
          parents. Our website is created in such a way to differentiate with
          other similar website and to serve people who are all registered and
          non-registered users. You can choose your life partner through your
          finger tips. Through our website all your Dreams Come True. Aims or
          Goals can be missed; But Trying should not be stopped. Please come and
          share whatever we know! &amp; Know whatever we don&quot;t know!! Get
          together! Think together!! And Bang the Kettimelam to our success!!!
          Be confident that marriages will come to Success.
          <button className="p-2 lg:w-1/6 w-2/6 m-4 justify-center items-center -z-0 bg-green-500 hover:bg-green-700 cursor-pointer transition ease-in-out rounded">
            Read more
          </button>
          {/* <button className='p-2 z-10 lg:w-1/6 w-2/6 m-4 justify-center items-center text-center bg-green-500 text-white rounded-lg hover:bg-green-700 translate-y-0 hover:-translate-y-1 drop-shadow-xl active:bg-yellow-600 sm:p-4'>Read More</button> */}
        </div>
        <div class="flex flex-col md:flex-row gap-2 md:gap-8 h-auto p-4 md:space-x-2 justify-evenly">
          <div class="flex flex-col gap-2 ">
            {options.map((option, index) => (
              <div
                key={index}
                className="text-white font-semibold hover:text-green-300 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 duration-300 lg:text-md lg:p-1 md:text-md md:p-1 sm:text-sm sm:p-1 xs:text-sm xs:p-1">
                {option.name}
              </div>
            ))}
          </div>
          <div className="flex flex-col ">
            <Image
              src={payMoney}
              width={300}
              height={300}
              className="w-full h-auto cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
              alt="payumoney"
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-2 md:gap-8 h-auto p-4 md:space-x-2 justify-evenly">
          <div class="flex flex-row gap-8 p-4">
            <FaFacebook className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <FaTwitter className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <FaYoutube className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <FaBell className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
            <MdCollectionsBookmark className="h-8 w-8 text-[#D2FBD0] hover:text-white cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          </div>
        </div>
        <div class="w-4/5 rounded-md bg-black mx-auto text-center p-4 lg:p-2 text-xs md:text-sm lg:text-sm xs:text-xs font-semibold">
          Copyright © 2024. All Rights Reserved | Kettimelam Matrimony
        </div>
      </div>
    </>
  );
};

export default Footer;
