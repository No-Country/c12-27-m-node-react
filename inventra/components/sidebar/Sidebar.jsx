"use client";

import { UserContext } from "@/app/utils/context/userContext";
import { links } from "@/app/utils/links";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const SidebarPrueba = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const { userStatus, setUserStatus } = useContext(UserContext);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth < 800); // 1024px es el ancho para pantallas de formato lg
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Comprobar el tamaño de la pantalla al cargar la página

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

    <div className="flex items-start justify-start">
      {/* Sidebar */}
      <div
        className={`bg-[#2969E3] fixed ${showMenu || !isMdScreen ? "left-0" : "-left-full"
          } lg:left-0 top-0 h-screen md:w-3/12 lg:w-2/12 p-8 flex flex-col justify-between transition-all z-50`}>
        {/* Menu */}
        <div>
          {/* Logo */}
          <div className="mb-8">
            <img
              className=""
              src="/logo-inventra-blanco.png"
              alt="avatar"
            />
          </div>
          {/* Nav */}
          <nav className={isMdScreen ? "hidden lg:block" : "block"}>
            <div className="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
              <ul className="space-y-2">
                {links.map(({ label, route, icon: Icon }) => (
                  <li key={route}>
                    <Link href={route} onClick={label === 'Salir' ? () => { setUserStatus(false), alert('desea salir?') } : () => { }}>
                      <span className="flex items-center gap-4 text-white hover:bg-[#003EBB] hover:text-white py-3 px-4 rounded-lg font-medium cursor-pointer">
                        <Icon className="inline-block mr-3" size={28} />
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* Btn menu móvil a partir de formato md */}
      {isMdScreen && (
        <button
          className="lg:hidden fixed right-5 bottom-5 bg-[#2969E3] ring-4 ring-[#141517] text-white text-xl p-3 rounded-full z-50"
          onClick={toggleMenu}
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      )}
    </div>
  );
};

export default SidebarPrueba;