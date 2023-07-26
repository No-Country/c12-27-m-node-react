'use client'
import { IoMdNotifications } from 'react-icons/io'
import { PiUsersFill } from 'react-icons/pi'
import { FaClipboardCheck } from 'react-icons/fa'
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'
import AreaChart from '@/components/areachart/AreaChart'
import BarChart from '@/components/barchart/BarChart'
import { useState } from 'react'


export default function Dashboard() {
  const [Products, setProducts] = useState([])
  return (
    <div className='flex justify-center items-center flex-col w-full'>

      <header className="flex justify-end sm:w-screen md:w-full sm:h-10 md:h-16 lg:h-20 px-10 sm:bg-[#2969E3] md:bg-inherit shadow-md border-gray-200">
        <div className="flex items-center gap-5">
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

      <div className="flex flex-col justify-center items-center w-full gap-14 sm:py-6 md:py-8 lg:py-10 sm:px-8 md:px-16 xl:px-24">

        <div className="flex sm:flex-col md:flex-col lg:flex-row justify-between sm:gap-10 lg:gap-6 xl:gap-10 w-full lg:h-32 xl:h-40 ">

          <div className="flex justify-center items-center sm:w-full lg:w-1/2 h-full sm:gap-2">
            <div className="flex flex-col justify-center items-center gap-2 sm:w-1/3 h-full bg-white border border-gray-200 rounded-md">
              <PiUsersFill className='text-[#2969E3] sm:text-3xl lg:text-4xl' />
              <span className='text-black sm:text-base md:text-3xl font-bold'>
                {Products.length}
              </span>
              <p className='sm:text-sm lg:text-lg text-black'>
                Proveedores
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:w-1/3 h-full bg-white border border-gray-200 rounded-md">
              <FaClipboardCheck className='text-[#2969E3] sm:text-3xl lg:text-4xl' />
              <span className='text-black sm:text-base md:text-3xl font-bold'>
                {Products.length}
              </span>
              <p className='sm:text-sm lg:text-lg text-black'>
                Items
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 sm:w-1/3 h-full bg-white border border-gray-200 rounded-md">
              <IoMdNotifications className='text-[#2969E3] sm:text-3xl lg:text-4xl' />
              <span className='text-black sm:text-base md:text-3xl font-bold'>
                10
              </span>
              <p className='sm:text-sm lg:text-lg text-black'>
                Notificaciones
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center sm:flex-col md:flex-row sm:gap-2 lg:gap-8 w-full lg:h-40">
          <div className="flex flex-col justify-center items-center gap-2 sm:w-full md:w-1/3 h-32 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center gap-2">
              <h4 className="text-black font-sans font-bold md:text-base lg:text-2xl">Stock bajo</h4>
              <BsGraphDownArrow className='text-lg lg:text-3xl text-[#ED1414]' />
            </div>
            <p className="text-black md:text-sm lg:text-lg">
              Leche Gloria 50 ml -
              <span className='text-black md:text-sm lg:text-lg'>
                10
              </span>
            </p>
            <p className='text-black md:text-sm lg:text-lg'>
              Jabón líquido Dove -
              <span className='text-black md:text-xs lg:text-lg'>
                8
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 sm:w-full  md:w-1/3 h-32 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center gap-2">
              <h4 className="text-black font-sans font-bold md:text-base lg:text-2xl">Stock estable</h4>
              <BsGraphUpArrow className='text-lg lg:text-3xl text-[#4CBD2F]' />
            </div>
            <p className="text-black md:text-sm lg:text-lg">
              Leche Gloria 50 ml -
              <span className='text-black md:text-sm lg:text-lg'>
                10
              </span>
            </p>
            <p className='text-black md:text-sm lg:text-lg'>
              Jabón líquido Dove -
              <span className='text-black md:text-xs lg:text-lg'>
                8
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 sm:w-full md:w-1/3 h-32 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center gap-2">
              <h4 className="text-black font-sans font-bold md:text-base lg:text-2xl">Sobre stock</h4>
              <BsGraphUpArrow className='md:text-lg lg:text-3xl text-[#ED1414]' />
            </div>
            <p className="text-black md:text-sm lg:text-lg">
              Leche Gloria 50 ml -
              <span className='text-black md:text-sm lg:text-lg'>
                10
              </span>
            </p>
            <p className='text-black md:text-sm lg:text-lg'>
              Jabón líquido Dove -
              <span className='text-black text-blackmd:text-xs lg:text-lg'>
                8
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
};
