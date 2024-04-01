import React, { useState } from 'react';

import { RiUserSearchFill } from 'react-icons/ri';

const data = [
  'hindu',
  'christian',
  'muslim',
  'jain',
  'sikh',
  'buddist',
];
const casteData = [
    'Adi Dravidar/SC',
    'Vellalar',
    'Brahmin',
    'Kallar/Maravar',
    'Agarwal',
    'Arunthadhiyar',
  ];
const SearchBoxContainer = ({ handleSearchBoxCloseClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilteredData, setShowFilteredData] = useState(true);

  const [searchCasteTerm, setSearchCasteTerm] = useState('');
  const [selectedCasteItem, setSelectedCasteItem] = useState(null);
  const [showFilteredCasteData, setShowFilteredCasteData] = useState(true);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedItem(null);
  };

  const handleSearchCasteChangeClick = (event) => {
    setSearchCasteTerm(event.target.value);
    setSelectedCasteItem(null);
  };

  const handleSearchItemClick = (item) => {
    setSelectedItem(item);
    setShowFilteredData(false);
  };

  const handleSearchCasteItemClick = (item) => {
    setSelectedCasteItem(item);
    setShowFilteredCasteData(false)
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDataCaste = data.filter((item) =>
    item.toLowerCase().includes(searchCasteTerm.toLowerCase())
  );
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10 ">
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-10 scroll-smooth snap-y">
        <div className="bg-white p-8 rounded shadow-lg gap-2 -z-10">
          <div className="flex items-center justify-center gap-2 flex-col">
            <RiUserSearchFill className="text-4xl text-stone-500" />
            <h2 className="text-2xl font-bold mb-4">Quick Search</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold mb-1">Seeking For</h2>
                  <div className="flex flex-col gap-2 p-2">
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        className="text-black font-bold"
                      />
                      <label for="male" className="text-black font-bold ml-2">
                        Male
                      </label>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        className="text-black font-bold"
                      />
                      <label for="female" className="text-black font-bold ml-2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-1">Age Between</h2>
              <div className="flex flex-col md:flex-row gap-2 p-2 items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <label className="text-black font-bold ml-2  justify-center">
                      From
                    </label>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex justify-center items-center gap-2">
                        <div className="bg-gray-200 rounded p-2 cursor-pointer">
                          +
                        </div>
                        <input
                          type="text"
                          className="border w-1/4 md:w-40 border-gray-300 rounded p-2 text-black font-bold"
                        />
                        <div className="bg-gray-200 rounded p-2 cursor-pointer">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 p-2 items-center">
                <div className="flex flex-row gap-2 items-center gap-2">
                  <label className="text-black font-bold ml-2 justify-center">
                    To
                  </label>
                  <div className="flex justify-center items-center gap-2 left-2">
                    <div className="bg-gray-200 rounded p-2 cursor-pointer">
                      +
                    </div>
                    <input
                      type="text"
                      className="border w-1/4 md:w-40 border-gray-300 rounded p-2 text-black font-bold"
                    />
                    <div className="bg-gray-200 rounded p-2 cursor-pointer">
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-1">Age Between</h2>
              <div className="flex flex-col md:flex-row gap-2 p-2 items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center">
                    <label className="text-black font-bold ml-2 justify-center">
                      From
                    </label>
                    <div className="flex flex-row gap-2 items-center">
                      <div className="flex justify-center items-center gap-2">
                        <div className="bg-gray-200 rounded p-2 cursor-pointer">
                          +
                        </div>
                        <input
                          type="text"
                          className="border w-1/2 md:w-40 border-gray-300 rounded p-2 text-black font-bold"
                        />
                        <div className="bg-gray-200 rounded p-2 cursor-pointer">
                          -
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 p-2 items-center">
                <div className="flex flex-row gap-2 items-center gap-2">
                  <label className="text-black font-bold ml-2 justify-center">
                    To
                  </label>
                  <div className="flex justify-center items-center gap-2 ml-4">
                    <div className="bg-gray-200 rounded p-2 cursor-pointer">
                      +
                    </div>
                    <input
                      type="text"
                      className="border w-1/2 md:w-40 border-gray-300 rounded p-2 text-black font-bold"
                    />
                    <div className="bg-gray-200 rounded p-2 cursor-pointer">
                      -
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-1">Religion</h2>
                <div className="flex flex-col md:flex-row gap-2 p-2 items-center w-full">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded p-2 text-black font-bold"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
                {searchTerm && showFilteredData && (
                  <div className="w-full border border-black">
                    {filteredData.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleSearchItemClick(item)}
                        className="text-black p-2 mt-2 border-black cursor-pointer">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-1">Caste</h2>
                <div className="flex flex-col md:flex-row gap-2 p-2 items-center w-full">
                  <input
                    type="text"
                    className="border w-full border-gray-300 rounded p-2 text-black font-bold"
                    placeholder="Search..."
                    value={searchCasteTerm}
                    onChange={handleSearchCasteChangeClick}
                  />
                </div>
                {searchCasteTerm && showFilteredCasteData && (
                  <div className="w-full border border-black">
                    {filteredDataCaste.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => handleSearchCasteItemClick(item)}
                        className="text-black p-2 mt-2 border-black cursor-pointer">
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="gap-4 p-2 flex gap-x-2">
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={handleSearchBoxCloseClick}>
              Close
            </button>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleSearchBoxCloseClick}>
              Save
            </button>
          </div>
        </div>

      </div>
      </div>
    </>
  );
};

export default SearchBoxContainer;
