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
import { useContext, useEffect, useState } from 'react'
import CardItem from '@/components/cardItem/CardItem.jsx'
import { UserContext } from '@/app/utils/context/userContext'
import style from './inventario.module.css'
const axios = require('axios');

export default function Inventario() {
    const [categories, setCategories] = useState([])
    const [Products, setProducts] = useState([])
    const { key, setKey, user } = useContext(UserContext);
    key ? axios.get('https://inventra.onrender.com/category', {
        headers: {
            Authorization: `${key}`

        }
    }
    )
        .then(function (response) {
            setCategories(response.data)
        })
        .catch(function (error) {
        }) : {}
    key ?
        axios.get('https://inventra.onrender.com/product', {
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

    const [search, setSearch] = useState('')
    const [categoria, setCategoria] = useState('')
    const Product = Products.filter(Producto => Producto.category.name === categoria);
    const ProductProp = Products.filter(Producto => Producto.name === search ? Producto.name === search
        : Producto.category.name === search || Producto.serialCode === search);
    return (
        <div>
            <header className={`${style.header} flex justify-around h-20`}>
                <div className={`${style.search} join justify-start`}>
                    <input className="input  w-full    input-bordered join-item" placeholder="Buscar" onChange={(e) => { setSearch(e.target.value) }} />
                    <button className="btn join-item   bg-primary " onClick={() => { setSearch(search) }}>
                        <AiOutlineSearch className="mr-3" size={25} color='white' />
                    </button>
                </div>
                <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
                <div className={style.dataUser}>
                    <p className="text-gray-500">
                        {user.name}
                    </p>
                    <p className="text-gray-400">
                        {user.role}
                    </p>
                </div>
            </header>
            <div className='flex justify-around mt-4 items-center flex-wrap'>
                <div>
                    <h2> Total : {search !== '' ? ProductProp.length : categoria === '' ? Products.length : Product.length}</h2>
                </div>
                <div>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content ">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-3" className="drawer-button  flex">
                                <FaFilter className="online  mr-3 cursor-pointer" size={20} /> <span className={style.textFiltrar}> FILTRAR</span>
                            </label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <h2 className='text-center'>Filtros</h2>
                                <li></li>
                                <li></li>
                                <h3 className='text-center'>Categorias</h3>
                                <li></li>
                                <li></li>
                                <li className='text-center cursor-pointer' onClick={() => { setCategoria('') }}>Todo</li>
                                <li></li>
                                {
                                    categories.map(res => (
                                        <div key={res._id}>
                                            <li className='text-center cursor-pointer' onClick={() => { setCategoria(res.name) }}>{res.name}</li>
                                            <li></li>
                                        </div>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div className={style.exportar}>
                    <button className='flex'> <BiSolidDownload size={20} /> <span className='pl-2'> EXPORTAR</span>   </button>
                </div>
                <div>
                    <Link href={'/home/routes/inventario/additem'} className='flex  bg-primary text-white p-2 rounded-full'>
                        <MdAdd className=' text-2xl ' color='white' /> AGREGAR ITEM
                    </Link>
                </div>
            </div>
            <div className='flex justify-around mt-4 items-center flex-wrap '>
                <div className="">
                    <table className={`${style.box} table border`}>
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-center'>imagen</th>
                                <th className='text-center'>Codigo</th>
                                <th className='text-center'>Nombre del producto</th>
                                <th className='text-center'>Categoria</th>
                                <th className='text-center'> Unidad</th>
                                <th className='text-center'>Precio</th>
                                <th className='text-center'>Acciones</th>
                            </tr>
                        </thead>
                        {
                            Products.length ?
                                <>
                                    {search
                                        ? <>{ProductProp.map(Producto => (
                                            <CardItem data={Producto} key={Producto._id} />))}</>
                                        : categoria === '' ? <>{Products.map(Producto => (
                                            <CardItem data={Producto} key={Producto._id} />
                                        ))}</> : <>
                                            {Product.map(Producto => (
                                                <CardItem data={Producto} key={Producto._id} />
                                            ))}</>}
                                </>
                                : <tbody >
                                    <tr><th></th></tr>
                                    <tr><th></th></tr>
                                    <tr><th></th></tr>
                                    <tr>
                                        <td></td><td></td><td></td>
                                        <td className="loading loading-spinner loading-lg text-center"></td>
                                    </tr>
                                </tbody>
                        }
                    </table>
                </div>
            </div>
        </div >
    )
}