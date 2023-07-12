import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { links } from '../../app/utils/links';





const SideNav = () => {
  return (
      <div className="h-screen flex item-start justify-start">
        <button className="relative z-30 lg:hidden peer top-0 h-14 w-14 rounded-full bg-[#2969E3] text-white hover:bg-[#003EBB] flex items-center justify-center">
          <GiHamburgerMenu size={28} />
        </button>
        <div className='fixed top-0 lg:left-0 h-screen w-2/12 bg-[#2969E3] peer-focus:left-0 peer-transition ease-out delay-150 duration-200'>
          <nav role='navigation' className='p-6'>
                <img className="w-full py-10" src="/logo-inventra-blanco.png" alt="avatar" />
            <div className='mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]'>
              <ul className={`space-y-2`}>
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

            </div>
          </nav>
        </div>
      </div>
  )
};

export default SideNav;