'use client'
import { UserContext } from "@/app/utils/context/userContext";
import axios from "axios";
import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md";

const CardItem = ({ data }) => {
    const { key, setKey } = useContext(UserContext);
    return (
        <tbody>
            {/* row 1 */}
            <tr className='hover:bg-hover-linea cursor-pointer'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox checkbox-primary	" />
                    </label>
                </th>
                <th className='text-center'>
                    <span className="avatar ">
                        <span className="w-12 rounded-lg ring ring-contorno ">
                            <img src={data.image} />
                        </span>
                    </span>
                </th>
                <th className='text-center'>
                    {data.serialCode}
                </th>

                <td className='text-center'>
                    {data.name}
                </td>
                <td className='text-center'>
                    {data.category}
                </td>
                <td className='text-center'>
                    {data.stock}
                </td>
                <td className='text-center'>
                    {data.price}
                </td>
                <td className='text-center'>
                    <button className="btn btn-circle  bg-salida mx-1 ">  <FaArrowRight color='green' size={'20'} /></button>
                    <button className="btn btn-circle bg-editar mx-1 ">   <MdModeEditOutline color='blue' size={'20'} /></button>
                    <button className="btn btn-circle bg-eliminar  mx-1 " onClick={() => {
                        key ?
                            axios.delete(`https://inventra.onrender.com/product/${data._id}`, {
                                headers: {
                                    Authorization: `${key}`

                                }
                            }
                            )
                                .then(function (response) {
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                            : {}

                    }
                    }>  <MdOutlineDeleteOutline color='red' size={'20'} /></button>
                </td>
            </tr>
        </tbody>
    )
}

export default CardItem;