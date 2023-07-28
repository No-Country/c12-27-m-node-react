'use client'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotifications } from 'react-icons/io'
import { BiSolidDownload } from 'react-icons/bi'
import { MdAdd } from 'react-icons/md'
import Link from 'next/link'
import { useContext, useState } from 'react'
import CardProveedor from '@/components/CardProveedores/CardProveedores'
import { UserContext } from '@/app/utils/context/userContext'
import axios from 'axios'


    
    export default function proveedores() {

    const { key, setKey, user } = useContext(UserContext);
    const [Products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [categoria, setCategoria] = useState('')
    key ?
        axios.get('https://inventra.onrender.com/supplier', {
            headers: {
                Authorization: `${key}`

            }
        }
        )
            .then(function (response) {
                setProducts(response.data)

            })
            .catch(function (error) {
            })
        : {}
    const ProvProp = Products.filter(Proveedor => Proveedor.name === search ? Proveedor.name === search
        : Proveedor.id === search || Proveedor.email === search);

    return (
        <div>
            <header className="flex justify-around h-20">
                <div className="join w-3/4 p-4 justify-start">
                    <input className="input  w-full    input-bordered join-item" placeholder="Buscar" onChange={(e) => { setSearch(e.target.value) }} />
                    <button className="btn join-item   bg-primary " onClick={() => { setSearch(search) }}>
                        <AiOutlineSearch className="mr-3" size={25} color='white' />
                    </button>
                </div>
                <div className="flex items-center gap-5">
                    <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
                    <div>
                        <p className="text-gray-500">
                            {user.name}
                        </p>
                        <p className="text-gray-400">
                            {user.role}
                        </p>
                    </div>
                </div>
            </header>
            <div className='flex justify-around mt-4 items-center flex-wrap'>
                <div>
                    <h2> Total : {search !== '' ? ProvProp.length : categoria === '' ? Products.length : Prov.length}</h2>
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
                                <th className='text-center'>Nombre del proveedor</th>
                                <th className='text-center'>Categoria</th>
                                <th className='text-center'>Contacto</th>
                                <th className='text-center'></th>
                                <th className='text-center'></th>
                            </tr>
                        </thead>
                        {Products.map((Proveedor, index) => (
                            <CardProveedor data={Proveedor} key={index} />
                        ))
                        }
                    </table>
                </div>
            </div>
        </div >
    )
}
