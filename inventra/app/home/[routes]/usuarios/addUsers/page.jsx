"use client"

import { UserContext } from "@/app/utils/context/userContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

export default function addUsers() {

  const {
    formData,
    handleInputChange,
    handleRoleChange,
    handleAddUsers,
    users,
    setUsers
  } = useContext(UserContext);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    // Agrega el usuario al estado del contexto
    // (No es necesario llamar setUsers aquí ya que handleAddUsers está definido en RootLayout)

    // También actualiza la lista de usuarios en el contexto con el nuevo usuario
    setUsers((prevUsers) => [...prevUsers, formData]);


  };


  useEffect(() => {
    console.log(users);
  }, [users]);





  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <header className="flex sm:justify-end md:justify-between w-full sm:h-10 md:h-16 lg:h-20 px-10 sm:bg-[#2969E3] md:bg-inherit shadow-md border-gray-200">

        <div className="sm:hidden md:flex items-center gap-5">
          <Link href={'/home/routes/usuarios'} >
            <MdArrowBackIosNew className="md:mr-3 text-white sm:text-xl md:text-3xl"/>
          </Link>
          <h5>
            Registro de usuarios
          </h5>
        </div>

        <div className="flex justify-center items-center gap-5">
          <IoMdNotifications className="md:mr-3 text-white sm:text-xl md:text-3xl"/>
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
        <form className="w-full max-w-lg mx-auto md:ml-10 my-10 p-5" onSubmit={handleSubmit}>

          <div className="mb-6">
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Nombre del usuario"
              onChange={ handleInputChange }
              name="name" // Asignamos el nombre del campo en el objeto del estado
              value={ formData.name } // Establecemos el valor del campo desde el estado
              required />
          </div>

          <div className="mb-6">
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Correo electrónico"
              onChange={ handleInputChange }
              name="email" // Asignamos el nombre del campo en el objeto del estado
              value={ formData.email } // Establecemos el valor del campo desde el estado
              required />
          </div>

          <div className="mb-6">
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Contraseña"
              onChange={ handleInputChange }
              name="password" // Asignamos el nombre del campo en el objeto del estado
              value={ formData.password } // Establecemos el valor del campo desde el estado
            required />
          </div>

          <div className="mt-20 flex flex-col justify-start items-start">
            <h4 className="mb-6 text-mb font-bold text-gray-900 dark:text-white">
              Role
            </h4>

            <div className="flex justify-between items-center gap-10 mb-4 p-2">
              <label htmlFor="adminRole" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adminitrador</label>
              <input id="adminRole" type="radio" value="administrador" name="role" 
                checked={ formData.role === 'administrador' }
                onChange={ handleRoleChange }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>

            <div className="flex justify-between items-center gap-10 mb-4 p-2">
              <label htmlFor="visualRole" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Visualizador</label>
              <input checked={ formData.role === 'visualizador' } id="visualRole" type="radio" value="visualizador" name="role" 
                onChange={ handleRoleChange }
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>

            <div className="flex justify-start items-start gap-5 mb-4 p-2 bg-blue-300 rounded-lg">
              <p className="text-gray-900">
                Por defecto, los <strong>usuarios visualizadores</strong>  no podran hacer algún tipo de creación ni modificación en el sistema.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 w-full p-5">
            <button type="submit" className="text-white bg-[#2969E3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center p-2 rounded-full">
              Guardar
            </button>
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