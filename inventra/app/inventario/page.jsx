import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotifications} from 'react-icons/io'
export default function Inventario() {
    return (
        <div className="">
            <header className="flex justify-around h-20 border-b border-gray-200">
                <div className="join w-3/4 p-4 justify-start">
                <input className="input  w-full    input-bordered join-item" placeholder="Buscar"/>
                <button className="btn join-item   bg-blue-700"> <AiOutlineSearch className="mr-3" size={25}/>   </button>
                </div>

        
                <div className="flex     items-center gap-5 p-10">
                    <IoMdNotifications className="mr-3" size={28} />
                    <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[51px] h-[50px]" />
                    <div>
                    <p className="text-gray-500">
                        Nombre de usuario
                    </p>
                    <p className="text-gray-400">
                        Role
                    </p>
                    </div>
                </div>
            </header>
      </div>
    )
}