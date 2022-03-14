import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute text-center w-full top-1/2'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect</p>
        <button className='text-purple-500 bg-white rounded-full p-7 py-4 shadow-md mt-3 font-bold hover:shadow-xl active:scale-90 transition duration-150'>
          I'm Flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
