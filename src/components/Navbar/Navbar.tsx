import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import useDarkmode from '@/hooks/useDarkmode'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  const { darkmode, toggleDarkmode } = useDarkmode()

  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Projects',
      path: '/projects'
    },
    {
      name: 'Blog',
      path: '/blog'
    }
  ]

  return (
    <header className={styles.Navbar}>
      <div className={styles.Navbar__content}>
        <nav className={styles.Navbar__nav}>
          <ul className={styles.Navbar__list}>
            {links.map(({ name, path }) => (
              <li className={styles.Navbar__item} key={path}>
                <Link href={path} className={styles.Navbar__link}>
                  {name}
                </Link>
              </li>
            ))}
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
      </div>
    </header>
  )
}

export default Navbar
