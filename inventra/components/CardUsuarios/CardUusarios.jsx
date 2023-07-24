import { MdModeEditOutline, MdOutlineDeleteOutline } from "react-icons/md"

const CardUsarios = ({ data }) => {
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
                        <button className="btn btn-circle bg-editar mx-1 ">   <MdModeEditOutline color='blue' size={'20'} /></button>
                        <button className="btn btn-circle bg-eliminar  mx-1 ">  <MdOutlineDeleteOutline color='red' size={'20'} /></button>
                    </div>
                </td>
            </tr>
            {/* row 2 */}
        </tbody>
    )
}

export default CardUsarios