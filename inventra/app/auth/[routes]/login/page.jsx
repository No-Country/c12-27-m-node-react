'use client'
import Image from "next/image";
import Link from "next/link";
import style from "./login.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { notFound, redirect, useRouter } from "next/navigation";
import { handler } from "daisyui";
import { useState } from "react";



export default function Login() {
    const router = useRouter()
    const user = false
    const [isValid, setIsValid] = useState(true)
    return (
        <div className={style.container}>
            <Image
                src="/../public/loginImg.webp"
                width={757}
                height={0}
                alt="Picture of the author"
                className={style.img}
            />
            <div className={style.filter}></div>
            <div className={style.infoBox}>
                <Image
                    width={300}
                    height={200}
                    src='/logo-inventra-blanco.png'
                    alt="avatar" />
                <div className="flex flex-col items-start">
                    <h1 className={style.titleThin}>HOLA,</h1>
                    <h2 className={style.titleBold}>Bienvenido de nuevo!</h2>
                </div>
                <div className={style.formBox}>
                    <h5>Iniciar sesion</h5>
                    <form className={style.form} onSubmit={(e) => { e.preventDefault(), user ? router.push('/home/routes/dashboard') : setIsValid(false) }} >
                        <div className={style.inputBox}>
                            <label className={style.label}>
                                <BsFillPersonFill size={20} className={style.icon} />
                                <input className={style.inputs} type="email" placeholder="Correo electronico" required />
                            </label>
                            {!isValid ? <small className={style.smallsInvalid}>incorrecto</small> : <small className={style.smallsValid}>.</small>}
                        </div>
                        <div className={style.inputBox}>
                            <label className={style.label}>
                                <RiLockPasswordFill size={20} className={style.icon} />
                                <input className={style.inputs} type="password" placeholder="Contraseña" required />
                                <AiFillEyeInvisible className={style.iconVisible} size={20} />
                            </label>
                            {!isValid ? <small className={style.smallsInvalid}>incorrecto</small> : <small className={style.smallsValid}>.</small>}
                        </div>
                        <span className={style.smallsBox}>
                            <small className={style.smallInputRadio}><input className={style.inputRadio} type="radio" />Recordar informacion</small>
                            <small>Recuperar contraseña</small>
                        </span>
                        <input type="submit" value='Acceder' />


                    </form>
                </div>
                <div className={style.btnRow}>
                    <small>¿No tienes una cuenta?   </small>
                    <Link href='/auth/routes/createAcount'> Registrate ahora </Link>
                </div>
            </div >

        </div >
    )
}
