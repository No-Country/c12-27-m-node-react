import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex row">
            <Image
                src="/../public/portapapeles-explotacion-hombre-tiro-medio.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className="flex column">
                <img className="" src='/logo-inventra-blanco.png' alt="avatar" />
                <h1>soy el login</h1>
                <div>
                    <input type="text" />
                    <input type="password" />
                    <Link href='/src/routes/dashboard'> Acceder </Link>

                </div>
                <div>
                    <small>¿No tienes cuenta?</small>
                    <Link href='/home/createAcount'> Registrate ahora </Link>
                    <Link href='/home/login'> login </Link>
                </div>
            </div>

        </div>
    )
}
