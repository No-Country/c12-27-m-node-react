import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { FaFilter } from 'react-icons/fa'
import { BiSolidDownload } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import { BiSolidLabel } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import Link from 'next/link'

export default function proveedores() {
    return (
        <>
            <header className="flex justify-around h-20 border-b border-gray-200">
                <div className="join w-3/4 p-4 justify-start">
                    <input className="input  w-full input-bordered join-item" placeholder="Buscar" />
                    <button className="btn join-item bg-[#2969E3] "> <AiOutlineSearch className="mr-3" size={25} color='white' />   </button>
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



            <div className='flex justify-around mt-4 items-center flex-wrap'>

                <div>
                    <h2> Total : 10 proveedores</h2>
                </div>




                <div>
                    <button className='flex'> <FaFilter size={20} /> <span className='pl-2'> FILTRAR</span>   </button>
                </div>


                <div>
                    <button className='flex'> <BiSolidDownload size={20} /> <span className='pl-2'> EXPORTAR</span>   </button>
                </div>


                <div>
                    <Link href={'/src/routes/proveedores/addProveedores'} className='flex  bg-primary text-white p-2 rounded-full'  > <MdAdd className=' text-2xl ' color='white' /> AGREGAR proveedores   </Link>
                </div>

            </div></>
    )
}
