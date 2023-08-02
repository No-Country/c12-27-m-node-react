'use client'
import './globals.css'
import Landing from '@/components/landing/Landing'
import { useEffect, useState } from 'react'
import { redirect, useParams, usePathname, useRouter } from 'next/navigation'
import { UserContext } from './utils/context/userContext'
import { links } from './utils/links'
import router from './home/[routes]/page'
import axios from 'axios'




//const inter = Inter({ subsets: ['latin'] })





export default function RootLayout({ children }) {
  const [userData, setUserData] = useState()
  //estado del key del usuario para auth
  const [key, setKey] = useState('')
  const [idC, setIdC] = useState('')
  const router = useRouter()
  //useparams para la navegacion entre path dinamicos
  const params = useParams();
  const path = usePathname();
  const ruta = links.map(({ route }) => (route)).filter(rute => rute === path)
  //estado si el ususario esta logged
  const [userStatus, setUserStatus] = useState(path === ruta[0] ? 'true' : 'false');
  const [theme, setTheme] = useState('light')
  //status si el ususario esta log
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios
  //useparams para la navegacion entre path dinamicos
  
  const [companyName, setCompanyName] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);



  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "visualizador",
  });


  const handleInputChange = (evt) => {

    const { name, value } = evt.target;
    // Actualiza el estado con los valores del formulario
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleRoleChange = (evt) => {
    setFormData({
      ...formData,
      role: evt.target.value,
    });
  };


  const handleAddUsers = (evt) => {
    evt.preventDefault();
    // Muestra el usuario creado en consola

  };




  const handleDeleteUser = async (userId) => {
      await  axios.delete(`https://inventra.onrender.com/user/${userId}`, {
      headers: {
        Authorization: `${key}`,
      },
    })
    .then((res) => {
      // Si la solicitud al servidor fue exitosa, actualizamos el estado local
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    })
    .catch((err) => {
      console.log('Error al eliminar el usuario', err);
    });
  };

  // //useefect para guardar en el localstorage y para no perder el valor userLog
  // useEffect(() => {
  //   //funcion para recuperar el valor del estado del usuario logged
  //   setUserStatus((localStorage.getItem('userLog')) ?? 'false')
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem('userLog', userStatus)
  // }, [userStatus])
  // //redirect si esta log
  // useEffect(() => {
  //   path === ruta || 'addItem' || 'addUsers' || 'addProveedores'
  //     ? {} : userStatus === 'true' ? () => { router.push('/home/routes/dashboard'), setUserStatus('true') }
  //       : () => { router.push('/auth/routes/login'), setUserStatus('false') }
  // }, [userStatus])

  useEffect(() => {
    //funcion para recuperar el valor del estado del usuario logged
    setIdC((localStorage.getItem('idc')) ?? '')

  }, [])

  useEffect(() => {
    localStorage.setItem('idc', idC)
  }, [idC])

  useEffect(() => {
    //funcion para recuperar el valor del estado del usuario logged
    setKey((localStorage.getItem('key')) ?? '')

  }, [])

  useEffect(() => {
    localStorage.setItem('key', key)
  }, [key])

  //useefect para guardar en el localstorage y para no perder el valor de theme
  useEffect(() => {
    //funcion para recuperar el valor del estado del usuario logged
    setTheme((localStorage.getItem('theme')) ?? 'light')

  }, [])


  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])


  
  useEffect(() => {
    //funcion para recuperar el valor del estado del usuario logged
    setCompanyName((localStorage.getItem('companyName')))
    
  }, [companyName])
  


  //useefect para guardar en el localstorage y para no perder el valor de companyName
  useEffect(() => {
    localStorage.setItem('companyName', companyName)
  }, [companyName])


  //useefect para guardar en el localstorage y para no perder el valor de user
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])






  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
        formData,
        setFormData,
        handleInputChange,
        handleRoleChange,
        handleAddUsers,
        handleDeleteUser,
        users,
        setUsers,
        theme,
        setTheme,
        key,
        setKey,
        idC,
        setIdC,
        user,
        setUser,
      }}>
      <html lang="en" className="h-full" data-theme={theme}>
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
