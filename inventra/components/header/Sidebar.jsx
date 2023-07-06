import Link from 'next/link'
import { links } from '../../app/utils/links'

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 flex-shrink-0">
      <div className="py-4 text-gray-500">
        <Link legacyBehavior href="/">
          <a className="ml-6 text-lg font-bold text-gray-200">App Name</a> 
        </Link>
      </div>
      <nav className="ml-6">
        <ul className="space-y-2">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link legacyBehavior href={route}>
                <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
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