'use client'

import { IoMdNotifications } from 'react-icons/io'
import React, { useState } from "react";




export default function addItem() {


    const [image, setImage] = useState(null);

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
            <div className='mt-9 px-5'>

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
                        <input type="text" placeholder="Codigo del item" className="input input-bordered  w-full max-w-xs mt-6" />
                        <input type="text" placeholder="Nombre del item" className="input input-bordered  w-full max-w-xs mt-6" />
                        <input type="text" placeholder="Precio" className="input input-bordered  w-full max-w-xs mt-6" />
                        <input type="text" placeholder="Stock actual" className="input input-bordered  w-full max-w-xs mt-6" />
                        <h2 className='text-xl mt-2 text-left'> Informacion adicional</h2>
                        <select className="select select-bordered w-full max-w-xs mt-6">
                            <option disabled selected>Categoria</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

                        <select className="select select-bordered w-full max-w-xs mt-6">
                            <option disabled selected>Proveedor</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>

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

                                <button className='border bg-primary   border-primary rounded-full w-32 h-10 text-tipografiaalter '>  Guardar</button>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}