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
import Products from '@/db/prouctsDB'

export default function proveedores() {
    return (
        <>
            <header className="flex justify-around h-20 border-b border-gray-200">
                <div className="join w-3/4 p-4 justify-start">
                    <input className="input  w-full input-bordered join-item" placeholder="Buscar" />
                    <button className="btn join-item bg-[#2969E3] "> <AiOutlineSearch className="mr-3" size={25} color='white' />   </button>
                </div>
                <div className="flex     items-center gap-5">
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
                    <h2> Total : {Products.length}</h2>
                </div>
                <div>
                    <button className='flex'> <FaFilter size={20} /> <span className='pl-2'> FILTRAR</span>   </button>
                </div>
                <div>
                    <button className='flex'> <BiSolidDownload size={20} /> <span className='pl-2'> EXPORTAR</span>   </button>
                </div>
                <div>
                    <Link href={'/src/routes/proveedores/addProveedores'} className='flex  bg-primary text-white p-2 rounded-full' >
                        <MdAdd className=' text-2xl ' color='white' /> AGREGAR PROVEEDORES
                    </Link>
                </div>
            </div>
            <div className='flex justify-around mt-4 items-center flex-wrap '>
                <div className="px-10   overflow-x-auto w-full">
                    <table className="table w-full border rounded-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th className='text-center'>codigo</th>
                                <th className='text-center'>Nombre del usuario</th>
                                <th className='text-center'>Categoria</th>
                                <th className='text-center'>Contacto</th>
                                <th className='text-center'></th>
                                <th className='text-center'></th>
                            </tr>
                        </thead>
                        {Products.map(item => (
                            <tbody key={item.proveedor.id}>
                                {/* row 1 */}
                                <tr className='hover:bg-hover-linea cursor-pointer'>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox checkbox-primary	" />
                                        </label>
                                    </th>
                                    <th className='text-center'>
                                        <div className="avatar ">
                                            {item.proveedor.id}
                                        </div>
                                    </th>
                                    <td className='text-center'>
                                        {item.proveedor.name}
                                    </td>
                                    <td className='text-center'>
                                        {item.category}
                                    </td>
                                    <td className='text-center'>
                                        {item.proveedor.email}
                                    </td>

                                    <td className='text-center'>

                                    </td>
                                    <td className='text-center'>
                                        <div>
                                            <button className="btn btn-circle bg-editar mx-1 ">   <MdModeEditOutline color='blue' size={'20'} /></button>
                                            <button className="btn btn-circle bg-eliminar  mx-1 ">  <MdOutlineDeleteOutline color='red' size={'20'} /></button>
                                        </div>
                                    </td>
                                </tr>
                                {/* row 2 */}
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </>
    )
}
