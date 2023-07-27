'use client'

import { UserContext } from "@/app/utils/context/userContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

export default function addProveedores() {
  const { key, setKey } = useContext(UserContext);
  const [nameP, setNameP] = useState('')
  const [lastN, setLastN] = useState('')
  const [dni, setDni] = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <header className="flex sm:justify-end md:justify-between w-full sm:h-10 md:h-16 lg:h-20 px-10 sm:bg-[#2969E3] md:bg-inherit shadow-md border-gray-200">

        <div className="sm:hidden md:flex items-center gap-5">
          <Link href={'/home/routes/usuarios'} >
            <MdArrowBackIosNew className="md:mr-3 text-white sm:text-xl md:text-3xl" />
          </Link>
          <h5>
            Registro de usuarios
          </h5>
        </div>

        <div className="flex justify-center items-center gap-5">
          <IoMdNotifications className="md:mr-3 text-white sm:text-xl md:text-3xl" />
          <img src='/epyon2.jpg' alt="avatar" className="rounded-full ] sm:h-[20px] sm:w-[20px] md:w-[32px] md:h-[32px] lg:w-[50px] lg:h-[50px] sm:hidden md:block" />
          <div className='sm:hidden md:block'>
            <p className="text-gray-500 md:text-base lg:text-lg">
              Nombre de usuario
            </p>
            <p className="text-gray-400 md:text-sm lg:text-base">
              Role
            </p>
          </div>
        </div>
      </header>

      <div className="flex flex-col justify-center items-center w-full sm:py-6 md:py-8 lg:py-10 sm:px-8 md:px-14 lg:px-24">
        <form className="w-full max-w-lg mx-auto md:ml-10 my-10 p-5"
          onSubmit={(e) => {
            e.preventDefault(),
              dni && nameP && lastN && email ?
                axios.post('https://inventra.onrender.com/supplier', {
                  "dni": dni,
                  "name": nameP,
                  "lastname": lastN,
                  "email": email
                },
                  {
                    headers: {
                      Authorization: `${key}`

                    }
                  }
                )
                  //funcion para recuperar el valor del estado del usuario logged
                  .then(function (response) {
                  })
                  .catch(function (error) {
                  }) : {};
          }}>
          <div className="mb-6">
            <input type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
              rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
              dark:focus:border-blue-500"
              placeholder="dni"
              onChange={(e) => {
                setDni(e.target.value)
              }}
              required />
          </div>
          <div className="mb-6">
            <input type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre del proveedor"
              onChange={(e) => {
                setNameP(e.target.value)
              }}
              required />
          </div>
          <div className="mb-6">
            <input type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 
              text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Empresa"
              onChange={(e) => {
                setLastN(e.target.value)
              }}
              required />
          </div>
          <div className="mb-6 mt-20">
            <h4 className="block mb-2 text-mb font-bold text-gray-900 dark:text-white">
              Informacion opcional
            </h4>
            <input type="text"
              className="bg-gray-50 border border-gray-300 
              text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }} />
          </div>
          <div className="flex justify-center items-center gap-5 w-full p-5">
            <input type="submit"
              className="text-white bg-[#2969E3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center p-2 rounded-full"
              value="Guardar"
            />
            <button className="text-white bg-[#2969E3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center p-2 rounded-full">
              Cancelar
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}