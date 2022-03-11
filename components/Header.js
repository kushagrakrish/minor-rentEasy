import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left Div */}
      <div className='relative flex item-center h-10 my-auto cursor-pointer'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle Div */}
      <div className='flex items-center  justify-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder='Start your search'
          className='flex-grow pl-4 outline-none'
        />
        <SearchIcon className='hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
      </div>

      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
}

export default Header;
