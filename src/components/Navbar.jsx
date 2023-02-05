import React from "react";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", current: true },
  { name: "Messaging", current: false },
  { name: "Notifcations", current: false },
];

function Navbar() {
  return (
    <div className='relative mx-auto flex h-16 items-center justify-between bg-white px-2 sm:px-6 lg:px-8'>
      {/* {Left side} */}
      <div className='flex items-center'>
        <img
          src={require("../assets/tedooo-logo.jpg")}
          alt='tedooo-logo'
          className='h-12 w-12 rounded'
        />
        <div className='ml-3'>
          <MagnifyingGlassIcon className='pointer-events-none absolute top-1/2 left-24 h-5 w-6 -translate-y-1/2 transform text-gray-400' />
          <input
            type='text'
            placeholder='Search'
            className='h-12 w-full rounded-full border border-gray-400 bg-gray-100 pl-7 pr-12'
          />
        </div>
      </div>
      {/* {Right side} */}
      <div className='flex items-center'>
        <div className='flex space-x-4'>
          {navigation.map((item) => (
            <div
              key={item.name}
              className={`text-1xl px-3 py-2 font-bold md:text-2xl ${
                item.current ? " text-green-200 underline" : "text-gray-400"
              }`}
            >
              <h1 className='flex'>
                <span>
                  {item.name === "Home" && (
                    <HomeIcon className='sm:h-5 sm:w-5 md:h-9 md:w-9' />
                  )}
                  {item.name === "Messaging" && (
                    <ChatBubbleOvalLeftIcon className='sm:h-5 sm:w-5 md:h-9 md:w-9' />
                  )}
                  {item.name === "Notifcations" && (
                    <BellIcon className='sm:h-5 sm:w-5 md:h-9 md:w-9' />
                  )}
                </span>
                {item.name}
              </h1>
            </div>
          ))}
        </div>
        <div>
          <img
            src={require("../assets/tedooo-logo.jpg")}
            alt='tedooo-logo'
            className='rounded-full sm:h-9 sm:w-9 md:h-12 md:w-12'
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
