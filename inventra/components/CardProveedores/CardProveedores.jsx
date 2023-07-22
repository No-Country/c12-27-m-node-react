const { MdModeEditOutline, MdOutlineDeleteOutline } = require("react-icons/md")

const CardProveedor = ({ data }) => {
    return (
        <tbody key={data.id}>
            {/* row 1 */}
            <tr className='hover:bg-hover-linea cursor-pointer'>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox checkbox-primary	" />
                    </label>
                </th>
                <th className='text-center'>
                    <span className="avatar ">
                        {data.id}
                    </span>
                </th>
                <td className='text-center'>
                    {data.name}
                </td>
                <td className='text-center'>
                    {data.category}
                </td>
                <td className='text-center'>
                    {data.email}
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

export default CardProveedor;