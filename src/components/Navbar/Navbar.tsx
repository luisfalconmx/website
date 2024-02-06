import {
  SunIcon,
  MoonIcon,
  LanguageIcon,
  HeartIcon
} from '@heroicons/react/24/outline'
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
      name: 'Certifications',
      path: '/certifications'
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
          <li className={(styles.Navbar__item, 'mr-3')}>
            <button
              className="flex h-full items-center"
              onClick={toggleDarkmode}
            >
              {darkmode ? (
                <MoonIcon className={styles.Navbar__icon} />
              ) : (
                <SunIcon className={styles.Navbar__icon} />
              )}
            </button>
          </li>
          <li className={(styles.Navbar__item, 'mr-3')}>
            <button className="flex h-full items-center">
              <LanguageIcon className={styles.Navbar__icon} />
            </button>
          </li>
          <li>
            <button className="flex h-full items-center">
              <a href="https://github.com/sponsors/luisfalconmx">
                <HeartIcon className={styles.Navbar__icon} />
              </a>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
