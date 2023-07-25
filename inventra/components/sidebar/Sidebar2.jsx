"use client";

import { UserContext } from "@/app/utils/context/userContext";
import { links } from "@/app/utils/links";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  RiMenu3Fill,
} from "react-icons/ri";

const Sidebar = () => {
  const { key, setKey } = useContext(UserContext);
  return (
    <div className="drawer md:drawer-open lg:drawer-open ml-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className=" drawer-button ml-3 md:hidden lg:hidden
            fixed left-2 top-1 bg-[#2969E3] p-2 rounded-full
          ">
          <RiMenu3Fill className="text-xl text-white" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-[#2969E3] text-base-content fixed">
          <img
            className="sm:mb-5 md:my-8 sm:w-32 md:w-44 lg:w-56 xl:w-64"
            src="/logo-inventra-blanco.png"
            alt="avatar"
          />
          <div className='sm:block space-y-1 md:hidden mb-5'>
            <p className="text-white md:text-sm lg:text-lg">
              Nombre de usuario
            </p>
            <p className="text-gray-200 md:text-sm lg:text-base">
              Role
            </p>
          </div>
          {/* Sidebar content here */}
          {links.map(({ label, route, icon: Icon }) => (
            <li key={label}>
              <Link
                onClick={label === 'Salir' ? () => { setKey('') } : () => { }}
                href={label === 'Salir' ? '/auth/routes/login' : route}
                className="hover:bg-[#003EBB] rounded-lg transition-ease-in-out duration-400 flex justify-start items-center gap-2 pl-1"
              >
                <span className="flex justify-start items-center gap-3 pl-0 text-white py-2 px-4 sm:text-base md:text-lg cursor-pointer">
                  <Icon className="lg:mr-3 md:text-xl lg:text-3xl" />
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Sidebar;