'use client'
import './globals.css'
import Landing from '@/components/landing/Landing'
import { useEffect, useState } from 'react'
import { redirect, useParams, usePathname, useRouter } from 'next/navigation'
import { UserContext } from './utils/context/userContext'
import { links } from './utils/links'
import router from './home/[routes]/page'




//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventra',
  description: 'Inventario control app',
}



export default function RootLayout({ children }) {
  const router = useRouter()
  //useparams para la navegacion entre path dinamicos
  const params = useParams();
  const path = usePathname();
  const ruta = links.map(({ route }) => (route)).filter(rute => rute === path)
  //estado si el ususario esta logged
  const [userStatus, setUserStatus] = useState(path === ruta[0] ? 'true' : 'false');
  //useefect para guardar en el localstorage y para no perder el valor
  useEffect(() => {
    //funcion para recuperar el valor del estado del usuario logged
    setUserStatus((localStorage.getItem('userLog')) ?? 'false')

  }, [])
  useEffect(() => {
    localStorage.setItem('userLog', userStatus)
  }, [userStatus])

  useEffect(() => {

  }, [])
  //redirect si esta log
  useEffect(() => {
    path === ruta || 'addItem' || 'addUsers' || 'addProveedores'
      ? {} : userStatus === 'true' ? () => { router.push('/home/routes/dashboard'), setUserStatus('true') } : router.push('/auth/routes/login')
  }, [userStatus])
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
