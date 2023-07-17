import Image from "next/image";
import Link from "next/link";
import style from "./createAcount.module.css"

export default function createAcount() {
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
                    <h2 className={style.titleBold}>Bienvenido a inventra!</h2>
                </div>
                <div className={style.formBox}>
                    <h5>Crear cuenta</h5>
                    <form className={style.form}>
                        <input className={style.inputs} type="text" placeholder="Nombre" required />
                        <input className={style.inputs} type="email" placeholder="Correo Electronico" required />
                        <input className={style.inputs} type="password" placeholder="Contraseña" required />
                        <span className={style.smallsBox}>
                            <small className={style.smallInputRadio}><input className={style.inputRadio} type="radio" />Recordar informacion</small>
                        </span>
                        <Link href='/home/routes/dashboard'> Registrarme </Link>

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
