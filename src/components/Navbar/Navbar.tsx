import {
  SunIcon,
  MoonIcon,
  LanguageIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import useDarkmode from '@/hooks/useDarkmode'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const { darkmode, toggleDarkmode } = useDarkmode()

  return (
    <header className={styles.Navbar}>
      <nav className={styles.Navbar__nav}>
        <ul className={styles.Navbar__list}>
          <li className={styles.Navbar__item}>
            <Link href="/" className={styles.Navbar__link}>
              Home
            </Link>
          </li>
          <li className={styles.Navbar__item}>
            <Link href="/blog" className={styles.Navbar__link}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <ul className={styles.Navbar__list}>
        <li className={styles.Navbar__item}>
          <button onClick={toggleDarkmode}>
            {darkmode ? (
              <SunIcon className={styles.Navbar__icon} />
            ) : (
              <MoonIcon className={styles.Navbar__icon} />
            )}
          </button>
        </li>
        <li>
          <button></button>
        </li>
      </ul>
    </header>
  )
}

export default Navbar
