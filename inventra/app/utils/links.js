import { RiDashboardFill } from 'react-icons/ri'
import { PiCubeFill, PiClockCounterClockwise, PiUsersFill } from 'react-icons/pi'
import { MdOutlineInventory, MdSettings, MdHelpOutline, MdLogout } from 'react-icons/md'






export const links = [
  {
    label: 'Dashboard',
    route: '/src/routes/dashboard',
    icon: RiDashboardFill
  },
  {
    label: 'Inventario',
    route: '/src/routes/inventario',
    icon: PiCubeFill
  },
  {
    label: 'Proveedores',
    route: '/src/routes/proveedores',
    icon: MdOutlineInventory
  },
  {
    label: 'Historial',
    route: '/src/routes/historial',
    icon: PiClockCounterClockwise
  },
  {
    label: 'Usuarios',
    route: '/src/routes/usuarios',
    icon: PiUsersFill
  },
  {
    label: 'Configuracion',
    route: '/src/routes/configuracion',
    icon: MdSettings
  },
  {
    label: 'Ayuda',
    route: '/src/routes/ayuda',
    icon: MdHelpOutline
  },
  {
    label: 'home',
    route: '/',
    icon: MdHelpOutline
  },
  {
    label: 'Salir',
    route: '/home/login',
    icon: MdLogout
  }
]
