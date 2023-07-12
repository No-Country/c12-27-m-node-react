import Link from 'next/link'
import { links } from '../../app/utils/links'

function Sidebar() {
  return (
    <div className="w-64 bg-[#2969E3] h-full py-10 px-9">
      <div className="py-4 text-gray-500">
        <img className="" src='/logo-inventra-blanco.png' alt="avatar" />
      </div>
      <nav className="text-white text-base font-semibold mt-10">
        <ul className="space-y-2">
          {links.map(({ label, route, icon: Icon }) => (
            <li key={route}>
              <Link legacyBehavior href={route}>
                <a className="flex items-center text-white hover:bg-[#003EBB] hover:text-white py-3 px-4 rounded-lg font-medium">
                  <Icon className="inline-block mr-3" size={28} />
                  {label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;