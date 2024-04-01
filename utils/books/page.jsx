// import React from 'react';
// import image1 from '../../../../public/main/image-1.jpg';
// import Image from 'next/image';
// import { data } from '@/app/data/datas/page';
// import data
// const Books = () => {
//   return (
//     <>
//       <div className="flex">
//         <div className="border-x-8 border-gray-800 rounded p-2 text-black font-bold shadow-lg shadow-slate-500 shadow-2xl">
//           {/* {data.map((item, i) => {
//             <>
//               <Image
//                 src={image1}
//                 alt="book"
//                 width={200}
//                 height={200}
//                 className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl"
//               />
//               <div className="flex flex-col bg-slate-200 rounded p-2">
//                 <h1 className=" text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                   {item.name}
//                 </h1>
//                 <h1 className=" text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                   {item.id}
//                 </h1>
//                 <p className="text-center text-red-900 text-md">
//                   {item.community}
//                 </p>
//                 <p className="text-center text-red-900 text-md ">{item.age}</p>
//                 <div className="text-center p-2">
//                   <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded mx-auto">
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             </>;
//           })} */}
//           <Image
//             src={image1}
//             alt="book"
//             width={200}
//             height={200}
//             className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl"
//           />
//           <div className="flex">
//             <div className="border-x-8 border-gray-800 rounded p-2 text-black font-bold shadow-lg shadow-slate-500 shadow-2xl">
//               {data.map((item, i) => (
//                 <div key={i} className="flex flex-col bg-slate-200 rounded p-2">
//                   <h1 className="text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                     {item.name}
//                   </h1>
//                   <h1 className="text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                     {item.id}
//                   </h1>
//                   <p className="text-center text-red-900 text-md">
//                     {item.community}
//                   </p>
//                   <p className="text-center text-red-900 text-md">{item.age}</p>
//                   <div className="text-center p-2">
//                     <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded mx-auto">
//                       View Profile
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="border-x-8 border-gray-800 rounded p-2 text-black font-bold shadow-lg shadow-slate-500 shadow-2xl">
//               {data.map((item, i) => (
//                 <div key={i} className="flex flex-col bg-slate-200 rounded p-2">
//                   <h1 className="text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                     {item.name}
//                   </h1>
//                   <h1 className="text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                     {item.id}
//                   </h1>
//                   <p className="text-center text-red-900 text-md">
//                     {item.community}
//                   </p>
//                   <p className="text-center text-red-900 text-md">{item.age}</p>
//                   <div className="text-center p-2">
//                     <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded mx-auto">
//                       View Profile
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           {/* <Image
//             src={image1}
//             alt="book"
//             width={200}
//             height={200}
//             className="rounded-md p-2 hover:cursor-pointer hover:scale-105 hover:opacity-80 hover:shadow hover:shadow-slate-500 hover:shadow-2xl"
//           />
//             <div className="flex flex-col bg-slate-200 rounded p-2">
//                 <h1 className=" text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                 </h1>
//                 <h1 className=" text-center text-red-900 md:text-2xl lg:text-2xl sm:text-2xl text-xl font-white font-bold m-1 p-1">
//                   {"item.id"}
//                 </h1>
//                 <p className="text-center text-red-900 text-md">
//                   {"item.community"}
//                 </p>
//                 <p className="text-center text-red-900 text-md ">{"item.age"}</p>
//                 <div className="text-center p-2">
//                   <button className="inline-block w-28 text-sm h-auto text-white bg-green-500 hover:bg-green-700 font-bold p-2 px-2 rounded mx-auto">
//                     View Profile
//                   </button>
//                 </div>
//               </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Books;
