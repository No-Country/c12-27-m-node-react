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
import Users from '../../../../db/userDb'


export default function usuarios() {





    return (
        <>
            <header className="flex justify-around h-20 border-b border-gray-200">
                <div className="join w-3/4 p-4 justify-start">
                    <input className="input  w-full    input-bordered join-item" placeholder="Buscar" />
                    <button className="btn join-item   bg-primary "> <AiOutlineSearch className="mr-3" size={25} color='white' />   </button>
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
                    <h2> Total : {Users.length}</h2>
                </div>
                <div>
                    <button className='flex'> <FaFilter size={20} /> <span className='pl-2'> FILTRAR</span></button>
                </div>
                <div>
                    <button className='flex'> <BiSolidDownload size={20} /> <span className='pl-2'> EXPORTAR</span></button>
                </div>
                <div>
                    <Link href={'/home/routes/usuarios/addUsers'} className='flex  bg-primary text-white p-2 rounded-full'>
                        <MdAdd className=' text-2xl ' color='white' />AGREGAR USUARIOS
                    </Link>
                </div>
            </div >
            <div className='flex justify-around mt-4 items-center flex-wrap '>
                <div className="px-10   overflow-x-auto w-full">
                    <table className="table w-full border rounded-lg">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th className='text-center'>imagen</th>
                                <th className='text-center'>Nombre del usuario</th>
                                <th className='text-center'>Email</th>
                                <th className='text-center'> Rol</th>
                                <th className='text-center'></th>
                                <th className='text-center'></th>
                            </tr>
                        </thead>
                        {Users.map(user => (
                            <tbody key={user.id}>
                                {/* row 1 */}
                                <tr className='hover:bg-hover-linea cursor-pointer'>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox checkbox-primary	" />
                                        </label>
                                    </th>
                                    <th className='text-center'>
                                        <div className="avatar ">
                                            <div className="w-12 rounded-lg ring ring-contorno ">
                                                <img src={user.avatar} />
                                            </div>
                                        </div>
                                    </th>
                                    <td className='text-center'>
                                        {user.name}
                                    </td>
                                    <td className='text-center'>
                                        {user.email}
                                    </td>
                                    <td className='text-center'>
                                        {user.role}
                                    </td>
                                    <td className='text-center'>

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
