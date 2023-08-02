import { UserContext } from "@/app/utils/context/userContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md"

const CardUsarios = ({ data }) => {
    const { handleDeleteUser } = useContext(UserContext);


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
                    <div className="avatar ">
                        <div className="w-12 rounded-lg ring ring-contorno ">
                            <img src={data.avatar} />
                        </div>
                    </div>
                </th>
                <td className='text-center'>
                    {data.name}
                </td>
                <td className='text-center'>
                    {data.email}
                </td>
                <td className='text-center'>
                    {data.role}
                </td>
                <td className='text-center'>

                </td>
                <td className='text-center'>

                </td>
                <td className='text-center'>
                    <div>
                        <button className="btn btn-circle bg-eliminar  mx-1 " onClick={() => { handleDeleteUser(data.id) }}>
                            <MdOutlineDeleteOutline color='red' size={'20'} />
                        </button>
                    </div>
                </td>
            </tr>
            {/* row 2 */}
        </tbody>
    )
}

export default CardUsarios