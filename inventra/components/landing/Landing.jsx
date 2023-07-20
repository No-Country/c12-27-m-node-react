import Image from "next/image";
import Link from "next/link";
import styles from './landing.module.css'
import { useContext } from "react";
import { UserContext } from "@/app/utils/context/userContext";
import { redirect } from "next/navigation";

export default function Landing() {
  const { userStatus, setUserStatus } = useContext(UserContext);
  userStatus === true ? redirect('/home/routes/dashboard') : {}
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <div className={styles.textBox}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Gestiona tu inventario de una manera mas sencilla.</h1>
            <p className={styles.text}>
              Ten el control de tu inventario a traves de las diferentes funcionalidades
              que Inventra tiene para ti y haz crecer tu negocio.
            </p>
            <p className={styles.text}>
              Usalo desde cualquier dispositivo y desde cualquier lugar,
              Invetra siempre estara ahi para ti.
            </p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/../public/imgLanding.png"
            width={900}
            height={600}
            alt="Picture of the author"
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link className={styles.btn} href={userStatus === true ? '/home/routes/dashboard' : '/auth/routes/login'}>COMENZAR AHORA</Link>
      </div>
    </div>
  )
}