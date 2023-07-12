import Image from "next/image";
import Link from "next/link";
import style from "./login.module.css"

export default function Login() {
    return (
        <div className={style.container}>
            <Image
                src="/../public/loginImg.webp"
                width={757}
                height={0}
                alt="Picture of the author"
            />
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
                    <form className={style.form}>
                        <input className={style.inputs} type="email" placeholder="Correo electronico" required />
                        <input className={style.inputs} type="password" placeholder="Contraseña" required />
                        <span className={style.smallsBox}>
                            <small className={style.smallInputRadio}><input className={style.inputRadio} type="radio" />Recordar informacion</small>
                            <small>Recuperar contraseña</small>
                        </span>
                        <Link href='/src/routes/dashboard'> Acceder </Link>

                    </form>
                </div>
                <div>
                    <small>¿No tienes una cuenta?   </small>
                    <Link href='/home/createAcount'> Registrate ahora </Link>
                </div>
            </div>

        </div >
    )
}
