import { useState, useEffect } from 'react'
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  HeartIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import useDarkmode from '@/hooks/useDarkmode'
import styles from './Navbar.module.css'
import Link from 'next/link'
import cn from '@/utils/cn'

const Navbar = () => {
  const { darkmode, toggleDarkmode } = useDarkmode()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <header className={styles.Navbar}>
      <div className={styles.Navbar__content}>
        <button
          className={cn(styles.Navbar__toggle, styles['Navbar__toggle--open'])}
          onClick={toggleMenu}
        >
          <Bars3Icon className={styles.Navbar__icon} />
        </button>
        <nav
          className={cn(styles.Navbar__nav, {
            [styles['Navbar__nav--open']]: isMenuOpen
          })}
        >
          <button
            className={cn(
              styles['Navbar__toggle'],
              styles['Navbar__toggle--close']
            )}
            onClick={toggleMenu}
          >
            <XMarkIcon className={styles.Navbar__icon} />
          </button>
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
        <ul className={styles['Navbar__icon-list']}>
          <li className={(styles['Navbar__icon-item'], 'mr-3')}>
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
