'use client'
import Image from "next/image";
import Link from "next/link";
import style from "./createAcount.module.css"
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "@/app/utils/context/userContext";

export default function createAcount() {
    const { userStatus, setUserStatus } = useContext(UserContext);
    const [nameLog, setNameLog] = useState('')
    const [emailLog, setEmailLog] = useState('')
    const [passLog, setPassLog] = useState('')
    const router = useRouter()
    // const user = false
    const email = 'joa@joa'
    const password = '123'
    const [isValid, setIsValid] = useState(true)
    const { theme } = useContext(UserContext);
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
                    src={theme === 'light'
                        ? '/logo-inventra-azul.png'
                        : '/logo-inventra-blanco.png'}
                    alt="avatar" />
                <div className="flex flex-col items-start">
                    <h1 className={style.titleThin}>HOLA,</h1>
                    <h2 className={style.titleBold}>Bienvenido a inventra!</h2>
                </div>
                <div className={style.formBox}>
                    <h5>Crear cuenta</h5>
                    <form className={style.form} onSubmit={(e) => {
                        e.preventDefault(),
                            emailLog === email && passLog === password ?
                                localStorage.setItem('userLog', true) || router.push('/home/routes/dashboard')
                                :
                                setIsValid(false)
                    }}>
                        {/* //input nombre */}
                        <div className={style.inputBox}>
                            <label className={style.label}>
                                <BsFillPersonFill size={20} className={style.icon} />
                                <input name={nameLog}
                                    onChange={(e) => {
                                        setNameLog(e.target.value)
                                    }}
                                    className={isValid === true ? style.inputs : style.inputsInvalid}
                                    type="Text"
                                    placeholder="Nombre"
                                    required />
                            </label>
                            {isValid === false ? <small className={style.smallsInvalid}>incorrecto</small>
                                : <small className={style.smallsValid}>.</small>}
                        </div>
                        {/* //input email */}
                        <div className={style.inputBox}>
                            <label className={style.label}>
                                <BsFillPersonFill size={20} className={style.icon} />
                                <input name={emailLog}
                                    onChange={(e) => {
                                        setEmailLog(e.target.value)
                                    }}
                                    className={isValid === true ? style.inputs : style.inputsInvalid}
                                    type="email"
                                    placeholder="Correo electronico"
                                    required />
                            </label>
                            {isValid === false ? <small className={style.smallsInvalid}>incorrecto</small>
                                : <small className={style.smallsValid}>.</small>}
                        </div>
                        {/* //input password */}
                        <div className={style.inputBox}>
                            <label className={style.label}>
                                <RiLockPasswordFill size={20} className={style.icon} />
                                <input name="password"
                                    className={isValid === true ? style.inputs : style.inputsInvalid}
                                    onChange={(e) => {
                                        setPassLog(e.target.value)
                                    }}
                                    type={passLog}
                                    placeholder="Contraseña"
                                    required />
                                <AiFillEyeInvisible className={style.iconVisible} size={20} />
                            </label>
                            {isValid === false ? <small className={style.smallsInvalid}>incorrecto</small>
                                : <small className={style.smallsValid}>.</small>}
                        </div>
                        <span className={style.smallsBox}>
                            <small className={style.smallInputRadio}>
                                <input className={style.inputRadio} type="radio" />Recordar informacion
                            </small>
                            <small>Recuperar contraseña</small>
                        </span>
                        <div className={style.btnContainer}>
                            <input className={style.btn} type="submit" value='Registrarme' />
                        </div>
                    </form>
                </div>
                <div className={style.btnRow}>
                    <small>¿Ya tienes cuenta?</small>
                    <Link href='/auth/routes/login'> Ingresa ahora </Link>
                </div>
            </div>

        </div >
    )
}
