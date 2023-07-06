import { IoMdNotifications } from 'react-icons/io'





export default function Dashboard() {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <header className="flex justify-end w-full h-20 border-b border-gray-200">
          <div className="flex items-center gap-5 p-10">
              <IoMdNotifications className="mr-3" size={28} />
              <img src='/epyon2.jpg' alt="avatar" className="rounded-full w-[50px] h-[50px]" />
              <div>
                <p className="text-gray-500">
                  Nombre de usuario
                </p>
                <p className="text-gray-400">
                  Role
                </p>
              </div>
          </div>
      </header>
    </div>
  )
};
