import { RiDashboardFill } from 'react-icons/ri'
import { PiCubeFill, PiClockCounterClockwise, PiUsersFill } from 'react-icons/pi'
import { MdOutlineInventory, MdSettings, MdHelpOutline, MdLogout } from 'react-icons/md'






export const links = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: RiDashboardFill
  },
  {
    label: 'Inventario',
    route: '/inventario',
    icon: PiCubeFill
  },
  {
    label: 'Proveedores',
    route: '/proveedores',
    icon: MdOutlineInventory
  },
  {
    label: 'Historial',
    route: '/historial',
    icon: PiClockCounterClockwise
  },
  {
    label: 'Usuarios',
    route: '/usuarios',
    icon: PiUsersFill
  },
  {
    label: 'Configuracion',
    route: '/configuracion',
    icon: MdSettings
  },
  {
    label: 'Ayuda',
    route: '/ayuda',
    icon: MdHelpOutline
  },
  {
    label: 'Salir',
    route: '/login',
    icon: MdLogout
  }
]
