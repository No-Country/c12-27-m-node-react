import { IoMdNotifications } from 'react-icons/io'
import { PiUsersFill } from 'react-icons/pi'
import { FaClipboardCheck } from 'react-icons/fa'
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'

export default function Dashboard() {
  return (
    <div className='flex justify-end items-end flex-col w-full'>
      <header className="flex justify-end item-end w-full h-20 border-b shadow-sm border-gray-200">
        <div className="flex items-center gap-5 p-10">
          <IoMdNotifications className="mr-3" size={28} />
          <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
          <div>
            <p className="text-gray-500">Nombre de usuario</p>
            <p className="text-gray-400">Role</p>
          </div>
        </div>
      </header>
      <div className="flex flex-col justify-center items-center w-full py-10 px-32">
        <div className="flex justify-between items-center gap-10 w-full h-40 my-10">
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-2 w-44 h-40 bg-white border border-gray-200 rounded-md">
              <PiUsersFill size={40} color='#2969E3' />
              <span>98</span>
              <p>Proveedores</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2  w-44 h-40 bg-white border border-gray-200 rounded-md">
              <FaClipboardCheck size={40} color='#2969E3' />
              <span>571</span>
              <p>Items</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2  w-44 h-40 bg-white border border-gray-200 rounded-md">
              <IoMdNotifications size={40} color='#2969E3' />
              <span>10</span>
              <p>Notificaciones</p>
            </div>
          </div>
          <div className="w-8/12 h-40 border border-gray-200 rounded-md flex justify-center items-center bg-slate-300">
            <h2 className="font-bold text-2xl">Gráfica</h2>
          </div>
        </div>
        <div className="w-full h-80 bg-slate-300 border border-gray-200 rounded-md flex justify-center items-center">
          <h2 className="font-bold text-2xl">Grafico 2</h2>
        </div>
        <div className="flex justify-between items-center gap-10 w-full h-40 my-10">
          <div className="flex flex-col justify-center items-center gap-2 w-60 h-40 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center items-end gap-2">
              <h4 className="font-sans text-2xl">Stock bajo</h4>
              <BsGraphDownArrow size={30} color='#ED1414' />
            </div>
            <p>Leche Gloria 50 ml - <span>10</span></p>
            <p>Jabón líquido Dove - <span>8</span></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  w-60 h-40 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center items-end gap-2">
              <h4 className="font-sans text-2xl">Stock estable</h4>
              <BsGraphUpArrow size={30} color='#4CBD2F' />
            </div>
            <p>Leche Gloria 50 ml - <span>10</span></p>
            <p>Jabón líquido Dove - <span>8</span></p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2  w-60 h-40 bg-white border border-gray-200 rounded-md">
            <div className="flex justify-center items-end gap-2">
              <h4 className="font-sans text-2xl">Sobre stock</h4>
              <BsGraphUpArrow size={30} color='#ED1414' />
            </div>
            <p>Leche Gloria 50 ml - <span>10</span></p>
            <p>Jabón líquido Dove - <span>8</span></p>
          </div>
        </div>
      </div>
    </div>
  )
};
