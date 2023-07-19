import Image from "next/image";
import Link from "next/link";
import styles from './landing.module.css'

export default function Landing() {
  const isLog = false
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
        <Image
          src="/../public/imgLanding.png"
          width={800}
          height={600}
          alt="Picture of the author"
          className={styles.img}
        />
      </div>
      <div className={styles.btnContainer}>
        <div className={styles.btnBox}>{
          isLog ? <Link className={styles.btn} href='/home/routes/dashboard'>COMENZAR AHORA</Link>
            : <Link className={styles.btn} href='/auth/routes/login'>COMENZAR AHORA</Link>
        }</div>
      </div>
    </div>
  )
}