

import { UserContext } from '@/app/utils/context/userContext';
import React, { useContext } from 'react'
import { IoMdNotifications } from 'react-icons/io';

const Header2 = () => {

  const { user } = useContext(UserContext);
  console.log(user);
  

  return (
      <header className="flex justify-end sm:w-screen md:w-full sm:h-10 md:h-16 lg:h-20 px-10 sm:bg-[#2969E3] md:bg-inherit">
        <div className="flex items-center gap-5">
          <IoMdNotifications className="md:mr-3 text-white sm:text-xl md:text-3xl" />
          <img src='/epyon2.jpg' alt="avatar" className="rounded-full ] sm:h-[20px] sm:w-[20px] md:w-[32px] md:h-[32px] lg:w-[50px] lg:h-[50px] sm:hidden md:block" />
          <div className='sm:hidden md:block'>
            <p className="text-gray-500 md:text-base lg:text-lg">
              {user.name}
            </p>
            <p className="text-gray-400 md:text-sm lg:text-base">
              {user.role}
            </p>
          </div>
        </div>
      </header>
  )
}

export default Header2;