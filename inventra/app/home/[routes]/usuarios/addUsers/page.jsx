import Link from "next/link";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

export default function addUsers() {
  return (
    <div className='w-full'>
      <header className="flex justify-between h-20 px-10 shadow-sm border-gray-200">

        <div className="flex items-center gap-5">
          <Link href={'/home/routes/usuarios'} >
            <MdArrowBackIosNew className="mr-3" size={28} />
          </Link>
          <h5>
            Registro de usuarios
          </h5>
        </div>

        <div className="flex items-center gap-5">
          <IoMdNotifications className="mr-3" size={28} />
          <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
          <div>
            <p className="text-gray-500">Nombre de usuario</p>
            <p className="text-gray-400">Role</p>
          </div>
        </div>
      </header>

      <form className="w-full max-w-lg mx-auto mt-10 mb-5">

        <div className="mb-6">
          <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
          <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="mb-6">
          <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>

        <div className="mt-20 flex flex-col justify-start items-start">
          <h4 className="mb-6 text-mb font-bold text-gray-900 dark:text-white">
            Role
          </h4>

          <div class="flex justify-between items-center gap-10 mb-4 p-2">
            <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adminitrador</label>
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>

          <div class="flex justify-between items-center gap-10 mb-4 p-2">
            <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Visualizador</label>
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          </div>
        </div>
        <button type="submit" className="text-white bg-[#2969E3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300            font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center p-2 rounded-full">
          Guardar
        </button>
      </form>

    </div>
  )
}