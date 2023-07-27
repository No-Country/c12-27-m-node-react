'use client'

import { IoMdNotifications } from 'react-icons/io'
import React, { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from '@/app/utils/context/userContext';




export default function addItem() {
    const { key, setKey } = useContext(UserContext);
    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState(Number)
    const [serialCode, setSerialCode] = useState("")
    const [stock, setStock] = useState(Number)
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])
    const [proveedor, setProveedor] = useState('')
    const [proveedores, setProveedores] = useState([])
    const [image, setImage] = useState("")
    key ?
        axios.get('https://inventra.onrender.com/category', {
            headers: {
                Authorization: `${key}`

            }
        }
        )
            .then(function (response) {
                setCategories(response.data)
            })
            .catch(function (error) {
                console.log(error);
            }) : {};
    key ?
        axios.get('https://inventra.onrender.com/supplier', {
            headers: {
                Authorization: `${key}`

            }
        }
        )
            .then(function (response) {
                setProveedores(response.data)
            })
            .catch(function (error) {
                console.log(error);
            }) : {}

    {/* para la foto del avatat */ }
    const handleFileChange = (event) => {
        if (event.target.files[0].type.includes("image/")) {
            const file = event.target.files[0];
            setImage(URL.createObjectURL(file));
        } else {
            alert("El archivo seleccionado no es una imagen");
        }
    };
    {/* Para que apague o encienda los input con el toggle */ }
    const [toggle, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!toggle);
    };
    // console.log(category, itemName, price, stock, image, proveedor, serialCode)
    return (
        <div>
            <header className="flex justify-end h-20 border-b border-gray-200 px-5">
                <div className="flex     items-center gap-5">

                    <div>
                        <div className="drawer drawer-end">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content ">
                                {/* Page content here */}
                                <label htmlFor="my-drawer-4" className="drawer-button  ">
                                    <IoMdNotifications className="online  mr-3 cursor-pointer" size={28} />
                                </label>
                            </div>
                            <div className="drawer-side z-10">
                                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
            <form className='mt-9 px-5'
                onSubmit={(e) => {
                    e.preventDefault(),
                        category && itemName && price && stock && image && proveedor && serialCode ?
                            axios.post('https://inventra.onrender.com/product', {
                                "name": itemName,
                                "category": category,
                                "serialCode": serialCode,
                                "price": price,
                                "stock": stock,
                                "image": image,
                                "supplier": proveedor
                            },
                                {
                                    headers: {
                                        Authorization: `${key}`

                                    }
                                }
                            )
                                //funcion para recuperar el valor del estado del usuario logged
                                .then(function (response) {
                                    setStatus(response.status)
                                    console.log(response)
                                })
                                .catch(function (error) {
                                    console.log(error)
                                }) : {};
                }}>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow  flex-col flex place-items-center">

                        <div className="avatar flex-col place-items-center ">
                            <div className="w-40 rounded-2xl">
                                <img src={image} alt="foto" />
                            </div>
                            <input type="file" id='Avatar' accept="image/*" onChange={handleFileChange} className="mt-10 file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow ">
                        <input type="text"
                            onChange={(e) => {
                                setSerialCode(e.target.value)
                            }}
                            placeholder="Codigo del item"
                            className="input input-bordered  w-full max-w-xs mt-6" />
                        <input type="text"
                            placeholder="Nombre del item"
                            onChange={(e) => {
                                setItemName(e.target.value)
                            }}
                            className="input input-bordered  w-full max-w-xs mt-6" />
                        <input type="number"
                            placeholder="Precio"
                            onChange={(e) => {
                                setPrice(parseInt(e.target.value))
                            }}
                            className="input input-bordered  w-full max-w-xs mt-6" />
                        <input type="number"
                            placeholder="Unidades"
                            onChange={(e) => {
                                setStock(parseInt(e.target.value))
                            }}
                            className="input input-bordered  w-full max-w-xs mt-6" />
                        <h2 className='text-xl mt-2 text-left'> Informacion adicional</h2>
                        <h2>categorias</h2>
                        {
                            categories.map(res => (
                                <button onClick={() => { setCategory(res._id) }}>{res.name}</button>
                            ))
                        }
                        <h2>proveedores</h2>
                        {
                            proveedores.map(res => (
                                <button onClick={() => { setProveedor(res._id) }}>{res.name}</button>
                            ))
                        }
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow h-32 px-5 ">
                        <h2 className='text-xl mt-2 '> Stock</h2>
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <span className="label-text">Controlar Stock del item</span>
                                <input type="checkbox" className="toggle" onChange={handleToggleChange} />
                            </label>
                            <input type="text" placeholder="Stock minimo" disabled={!toggle} className="input input-bordered  w-full max-w-xs mt-5" />
                            <h2 className='mt-10'>Información opcional</h2>
                            <input type="text" placeholder="Stock optimo" disabled={!toggle} className="input input-bordered  w-full max-w-xs " />
                            <div className='flex justify-end gap-5 mt-10'>
                                <button className='border border-primary rounded-full w-32 h-10 text-primary'>Cancelar </button>
                                <input type="submit"
                                    value='guardar'
                                    className='border bg-primary   border-primary rounded-full w-32 h-10 text-tipografiaalter ' />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}