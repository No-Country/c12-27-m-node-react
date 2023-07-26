import { RiDashboardFill } from 'react-icons/ri'
import { PiCubeFill, PiUsersFill } from 'react-icons/pi'
import { MdOutlineInventory, MdSettings, MdLogout } from 'react-icons/md'






export const links = [
  {
    label: 'Dashboard',
    route: '/home/routes/dashboard',
    icon: RiDashboardFill
  },
  {
    label: 'Inventario',
    route: '/home/routes/inventario',
    icon: PiCubeFill
  },
  {
    label: 'Proveedores',
    route: '/home/routes/proveedores',
    icon: MdOutlineInventory
  },
  {
    label: 'Usuarios',
    route: '/home/routes/usuarios',
    icon: PiUsersFill
  },
  {
    label: 'Configuracion',
    route: '/home/routes/configuracion',
    icon: MdSettings
  },
  {
    label: 'Salir',
    icon: MdLogout
  }

]
