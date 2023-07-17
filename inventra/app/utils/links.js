import { RiDashboardFill } from 'react-icons/ri'
import { PiCubeFill, PiClockCounterClockwise, PiUsersFill } from 'react-icons/pi'
import { MdOutlineInventory, MdSettings, MdHelpOutline, MdLogout } from 'react-icons/md'






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
  // {
  //   label: 'Historial',
  //   route: '/home/routes/historial',
  //   icon: PiClockCounterClockwise
  // },
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
    label: 'Ayuda',
    route: '/home/routes/ayuda',
    icon: MdHelpOutline
  },
  // {
  //   label: 'home',
  //   route: '/',
  //   icon: MdHelpOutline
  // },
  {
    label: 'Salir',
    route: '/auth/routes/login',
    icon: MdLogout
  }
]
