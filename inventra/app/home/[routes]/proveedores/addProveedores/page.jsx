import Link from "next/link";
import { IoMdNotifications } from "react-icons/io";
import { MdArrowBackIosNew } from "react-icons/md";

export default function addProveedores() {
  return (
    <div className='w-full'>
      <header className="flex justify-between h-20 px-10 shadow-sm border-gray-200">

        <div className="flex items-center gap-5">
          <Link href={'/home/routes/proveedores'} >
            <MdArrowBackIosNew className="mr-3" size={28} />
          </Link>
          <h5>
            Registro de proveedor
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

      <form class="w-full max-w-lg mx-auto mt-10 mb-5">
        <div class="mb-6">
          <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
          <input type="text" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div class="mb-6">

          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre del proveedor</label>
          <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div class="mb-6 mt-20">
          <h4 class="block mb-2 text-mb font-bold text-gray-900 dark:text-white">
            Informacion opcional
          </h4>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contacto</label>
          <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <button type="submit" class="text-white bg-[#2969E3] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300            font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center p-2 rounded-full">
          Guardar
        </button>
      </form>

    </div>
  )
}