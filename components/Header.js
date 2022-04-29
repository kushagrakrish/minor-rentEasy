import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication } from "./Firebase/Firebase";

function Header({ placeholder }) {
  const [user] = useAuthState(authentication);

  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest,
      },
    });
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left Div */}
      <div
        onClick={() => router.push("/")}
        className='relative flex item-center h-10 my-auto cursor-pointer'
      >
        {/* <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        /> */}
      </div>

      {/* Middle Div */}
      <div className='flex items-center  justify-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder={placeholder || "Start your search"}
          className='flex-grow pl-4 outline-none'
          ref={inputRef}
        />
        <SearchIcon className='hidden md:inline-flex h-8  bg-red-400 text-white rounded-full p-1 cursor-pointer md:mx-2' />
      </div>

      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p
          className='hidden md:inline cursor-pointer'
          onClick={() => router.push("/Signup")}
        >
          Become a member
        </p>
        <GlobeAltIcon className='h-6' />

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon
            className='h-6 cursor-pointer'
            onClick={() => authentication.signOut()}
          />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-bold'>Number of Guests</h2>
            <UserIcon className='h-5 pr-1' />
            <input
              value={noOfGuest}
              onChange={(e) => setNoOfGuest(e.target.value)}
              type='number'
              min={1}
              max={50}
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button onClick={search} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
