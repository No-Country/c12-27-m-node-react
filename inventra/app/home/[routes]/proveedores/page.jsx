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
import Products from '@/db/prouctsDB'
import { useState } from 'react'
import CardProveedor from '@/components/CardProveedores/CardProveedores'

export default function proveedores() {
    const [search, setSearch] = useState('')
    const [categoria, setCategoria] = useState('')
    const Proveedores = Products.map(Proveedor => Proveedor.proveedor)
    const Prov = Proveedores.filter(Proveedor => Proveedor.category === categoria);
    const ProvProp = Proveedores.filter(Proveedor => Proveedor.name === search ? Proveedor.name === search
        : Proveedor.category === search || Proveedor.id === search || Proveedor.email === search);
    return (
        <div>
            <header className="flex justify-around h-20 border-b border-gray-200">
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
            <div className='flex justify-around mt-4 items-center flex-wrap'>
                <div>
                    <h2> Total : {search !== '' ? ProvProp.length : categoria === '' ? Proveedores.length : Prov.length}</h2>
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
                                <h3>Categorias</h3>
                                <li></li>
                                <li><button onClick={() => { setCategoria('') }}>Ver todo</button></li>
                                <li><button onClick={() => { setCategoria('limpieza') }}>Limpieza</button></li>
                                <li><button onClick={() => { setCategoria('comida') }}>Comida</button></li>
                                <li><button onClick={() => { setCategoria('electro') }}>Tecnologia</button></li>
                                <li><button onClick={() => { setCategoria('ropa') }}>Ropa</button></li>
                                <li><button onClick={() => { setCategoria('calzado') }}>Calzado</button></li>
                                <li></li>
                                <li></li>
                                {/* Sidebar content here */}
                                <h3>Por Precio</h3>
                                <li></li>
                                <li><button onClick={() => { setCategoria('') }}>Ascendente</button></li>
                                <li><button onClick={() => { setCategoria('limpieza') }}>Descendente</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='flex'> <BiSolidDownload size={20} /> <span className='pl-2'> EXPORTAR</span>   </button>
                </div>
                <div>
                    <Link href={'/home/routes/proveedores/addProveedores'} className='flex  bg-primary text-white p-2 rounded-full' >
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
                        {search !== ''
                            ? <>{ProvProp.map(Proveedor => (
                                <CardProveedor data={Proveedor} />))}</>
                            : categoria === '' ? <>{Proveedores.map(Proveedor => (
                                <CardProveedor data={Proveedor} />
                            ))}</> : <>
                                {Prov.map(Proveedor => (
                                    <CardProveedor data={Proveedor} />
                                ))}</>}
                    </table>
                </div>
            </div>
        </div >
    )
}
