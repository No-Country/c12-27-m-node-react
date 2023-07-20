'use client'
import './globals.css'
import Landing from '@/components/landing/Landing'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { UserContext } from './utils/context/userContext'



//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventra',
  description: 'Inventario control app',
}



export default function RootLayout({ children }) {
  //estado si el ususario esta logged
  const [userStatus, setUserStatus] = useState(null);
  //useefect para guardar en el localstorage y para no perder el valor
  useEffect(() => {
    //funcion para recuperar el valor del estado del usuario logged
    const isLog = JSON.parse(localStorage.getItem('userLog')) ?? true;
    setUserStatus(isLog)
  }, [])
  useEffect(() => {
    localStorage.setItem('userLog', userStatus)
  }, [userStatus])
  //useparams para la navegacion entre path dinamicos
  const params = useParams();
  return (
    <UserContext.Provider value={{ userStatus, setUserStatus }}>
      <html lang="en" className="h-full">
        <body className={'h-full min-h-screen font-sans'}>
          <div className="flex h-full min-h-screen justify-center">
            {params.routes ? (<div className="w-full">{children}</div>)
              : (
                <Landing />
              )
            }
          </div>
        </body>
      </html>
    </UserContext.Provider >

  )
};
