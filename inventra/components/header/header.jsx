import Link from 'next/link'
import { links } from '../../app/utils/links'
import styles from './header.module.css'
/* component jsx header - map and render the routes */
export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route} className={styles.a}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
