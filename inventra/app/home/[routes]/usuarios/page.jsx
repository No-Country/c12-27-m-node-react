'use client'

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
import CardUsarios from '@/components/CardUsuarios/CardUusarios'
import { useState } from 'react'


export default function usuarios() {
    const [search, setSearch] = useState('')
    const [role, setRole] = useState('')
    const User = Users.filter(Usuario => Usuario.role === role);
    const UserProp = Users.filter(Usuario => Usuario.name === search ? Usuario.name === search
        : Usuario.role === search || Usuario.email === search);
    return (
        <>
            <header className="flex justify-around h-20 border-b border-gray-200">
                <div className="join w-3/4 p-4 justify-start">
                    <input className="input  w-full    input-bordered join-item" placeholder="Buscar" onChange={(e) => { setSearch(e.target.value) }} />
                    <button className="btn join-item   bg-primary " onClick={() => { setSearch(search) }}>
                        <AiOutlineSearch className="mr-3" size={25} color='white' />
                    </button>
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
                    <h2> Total : {search !== '' ? UserProp.length : role === '' ? Users.length : User.length}</h2>
                </div>
                <div>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-3" className="drawer-button  flex">
                                <span className="online  mr-3 cursor-pointer pl-2 flex"><FaFilter size={20} />FILTRAR</span>
                            </label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <h2>Filtros</h2>
                                <li></li>
                                <li></li>
                                <h3>Rol</h3>
                                <li></li>
                                <li><button onClick={() => { setRole('') }}>Ver todo</button></li>
                                <li><button onClick={() => { setRole('admin') }}>Administrador</button></li>
                                <li><button onClick={() => { setRole('visualizador') }}>Visualizador</button></li>
                            </ul>
                        </div>
                    </div>
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
                        {search !== ''
                            ? <>{UserProp.map(Usuario => (
                                <CardUsarios data={Usuario} />))}</>
                            : role === '' ? <>{Users.map(Usuario => (
                                <CardUsarios data={Usuario} />
                            ))}</> : <>
                                {User.map(Usuario => (
                                    <CardUsarios data={Usuario} />
                                ))}</>}
                    </table>
                </div>
            </div>
        </>
    )
}
