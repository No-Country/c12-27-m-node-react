import { IoMdNotifications } from 'react-icons/io'
import { PiUsersFill } from 'react-icons/pi'

import { FaClipboardCheck } from 'react-icons/fa'
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'

import Users from '@/db/userDb'
import { BarChart } from '@/components/barchart/BarChart'
import { AreaChart } from '@/components/areachart/AreaChart'
import Products from '@/db/prouctsDB'

export default function Dashboard() {
  return (
    <div className='flex justify-center items-center flex-col w-full'>

      <header className="flex justify-end w-full h-20 px-10 shadow-md border-gray-200">
        <div className="flex items-center gap-5">
          <IoMdNotifications className="mr-3" size={28} />
          <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
          <div>
            <p className="text-gray-500">Nombre de usuario</p>
            <p className="text-gray-400">Role</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col justify-center items-center w-full md:py-8 lg:py-10 md:px-16 lg:px-24">

        <div className="flex md:flex-col lg:flex-row justify-between gap-10 w-full h-40 my-10">
          <div className="flex justify-center items-center md:w-full lg:w-1/2 h-full gap-10">
            <div className="flex flex-col justify-center items-center gap-2 w-full h-full bg-white border border-gray-200 rounded-md p-1">
              <PiUsersFill size={40} color='#2969E3' />
              <span>{Products.length}</span>
              <p>Proveedores</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2  w-full h-full bg-white border border-gray-200 rounded-md p-1">
              <FaClipboardCheck size={40} color='#2969E3' />
              <span>{Products.length}</span>
              <p>Items</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2  w-full h-full bg-white border border-gray-200 rounded-md p-1">
              <IoMdNotifications size={40} color='#2969E3' />
              <span>10</span>
              <p>Notificaciones</p>
            </div>
          </div>
          <div className=" md:w-full lg:w-1/2 h-full border border-gray-200 rounded-md flex justify-center items-center bg-white">
            <BarChart />
          </div>
        </div>

        <div className='w-full md:h-64 lg:h-80 bg-white border border-gray-200 rounded-md flex justify-center items-center md:mt-40 lg:mt-0'>
            <AreaChart />
        </div>

        <div className="flex justify-between items-center md:gap-3 lg:gap-8 w-full h-40 my-10">
          <div className="flex flex-col justify-center items-center gap-2 w-1/3 h-40 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center gap-2">
              <h4 className="font-sans font-bold md:text-sm lg:text-2xl">Stock bajo</h4>
              <BsGraphDownArrow className='text-lg lg:text-3xl text-[#ED1414]' />
            </div>
            <p className="md:text-sm lg:text-lg">
              Leche Gloria 50 ml - 
              <span className='md:text-sm lg:text-lg'>
                10
              </span>
            </p>
            <p className='md:text-sm lg:text-lg'>
              Jabón líquido Dove - 
              <span className='md:text-xs lg:text-lg'>
                8
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  w-1/3 h-40 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center gap-2">
              <h4 className="font-sans font-bold md:text-sm lg:text-2xl">Stock estable</h4>
              <BsGraphUpArrow className='text-lg lg:text-3xl text-[#4CBD2F]' />
            </div>
            <p className="md:text-sm lg:text-lg">
              Leche Gloria 50 ml - 
              <span className='md:text-sm lg:text-lg'>
                10
              </span>
            </p>
            <p className='md:text-sm lg:text-lg'>
              Jabón líquido Dove - 
              <span className='md:text-xs lg:text-lg'>
                8
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-1/3 h-40 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center gap-2">
              <h4 className="font-sans font-bold md:text-sm lg:text-2xl">Sobre stock</h4>
              <BsGraphUpArrow className='md:text-lg lg:text-3xl text-[#ED1414]' />
            </div>
            <p className="md:text-sm lg:text-lg">
              Leche Gloria 50 ml - 
              <span className='md:text-sm lg:text-lg'>
                10
              </span>
            </p>
            <p className='md:text-sm lg:text-lg'>
              Jabón líquido Dove - 
              <span className='md:text-xs lg:text-lg'>
                8
              </span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
};
