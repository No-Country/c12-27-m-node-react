import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";

const HeaderProv = ({ setSearch }) => {
  return (
    <header className="flex justify-around sm:w-screen md:w-full sm:h-10 md:h-16 lg:h-20 px-10 sm:bg-[#2969E3] md:bg-inherit">
        <div className="join w-3/4 p-4 justify-start">
            <input className="input  w-full    input-bordered join-item" placeholder="Buscar" onChange={(e) => { setSearch(e.target.value) }} />
            <button className="btn join-item   bg-primary " onClick={() => { setSearch(search) }}>
                <AiOutlineSearch className="mr-3" size={25} color='white' />
            </button>
        </div>
        <div className="flex items-center gap-5">
            <IoMdNotifications className="mr-3" size={28} />
            <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
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
  )
}

export default HeaderProv;