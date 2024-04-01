import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
const BoxContainer = ({ handleClosePopup }) => {
  console.log('boxContainer');
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded shadow-lg gap-2 -z-50">
          <div className="flex items-center justify-center gap-2 flex-col">
            <FaUserCircle className="text-4xl text-stone-500" />
            <h2 className="text-2xl font-bold mb-4">Member Login</h2>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-black font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="border border-gray-300 rounded p-2 text-black font-bold"
            />
            <label htmlFor="password" className="text-black font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded p-2 text-black font-bold"
            />
          </div>
          <div className="gap-x-2">
            <p className="text-gray-500 text-sm hover:cursor-pointer hover:text-blue-500 hover:font-semibold">
              Forgot Password?
            </p>
          </div>
          <div className="gap-4 p-2 flex gap-x-2">
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={handleClosePopup}>
              Close
            </button>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleClosePopup}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxContainer;
