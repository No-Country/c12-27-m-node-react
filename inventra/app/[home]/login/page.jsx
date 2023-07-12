import Image from "next/image";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Image
                src="/../public/portapapeles-explotacion-hombre-tiro-medio.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <h1>soy el login</h1>
            <Link href='/home/login'> login </Link>
            <Link href='/home/createAcount'> createAcount </Link>
            <Link href='/src/routes/dashboard'> Acceder </Link>
        </>
    )
}
