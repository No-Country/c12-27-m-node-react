"use client";




import React, { useState } from 'react';
import Link from 'next/link';
import { links } from '../../app/utils/links';
import { GiHamburgerMenu } from 'react-icons/gi';

function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="w-2/12 bg-[#2969E3] h-full px-9">
      <button
        className={`relative z-30 lg:hidden peer top-0 h-14 w-14 rounded-full bg-[#2969E3] text-white hover:bg-[#003EBB] flex items-center justify-center ${
          !sidebarVisible ? '' : 'hidden'
        }`}
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu size={28} />
      </button>

      <div className={`py-4 text-gray-500 ${sidebarVisible ? 'hidden' : ''}`}>
        <img className="" src="/logo-inventra-blanco.png" alt="avatar" />
      </div>

      <nav
        className={`text-white text-base font-semibold mt-10 ${
          sidebarVisible ? 'block' : 'hidden'
        } md:block`}
      >
        <ul className={`space-y-2`}>
          {links.map(({ label, route, icon: Icon }) => (
            <li key={route}>
              <Link legacyBehavior href={route}>
                <a className="flex items-center text-white hover:bg-[#003EBB] hover:text-white py-3 px-4 rounded-lg font-medium">
                  <Icon className="inline-block mr-3" size={28} />
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;




