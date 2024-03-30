'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import cn from '@/utils/cn'
import {
  XMarkIcon,
  Bars2Icon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ChatBubbleLeftRightIcon,
  MoonIcon,
  SunIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline'
import GithubIcon from '@/assets/icons/GithubIcon.svg'
import PlatziIcon from '@/assets/icons/PlatziIcon.svg'
import FacebookIcon from '@/assets/icons/FacebookIcon.svg'
import TwitterIcon from '@/assets/icons/TwitterIcon.svg'
import LinkedinIcon from '@/assets/icons/LinkedinIcon.svg'
import InstagramIcon from '@/assets/icons/InstagramIcon.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [mounted, setMounted] = useState(false)

  const location = usePathname()
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const links = [
    {
      name: 'About me',
      path: '/',
      icon: <UserCircleIcon className={styles['Navbar__icon']} />
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <BriefcaseIcon className={styles['Navbar__icon']} />
    },
    {
      name: 'Certifications',
      path: '/certifications',
      icon: <CheckBadgeIcon className={styles['Navbar__icon']} />
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: <ChatBubbleLeftRightIcon className={styles['Navbar__icon']} />
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub profile',
      url: 'https://github.com/luisfalconmx',
      icon: GithubIcon
    },
    {
      name: 'Platzi profile',
      url: 'https://platzi.com/p/luisfalconmx/',
      icon: PlatziIcon
    },
    {
      name: 'Facebook profile',
      url: 'https://www.facebook.com/luisfalconmx.dev',
      icon: FacebookIcon
    },
    {
      name: 'Twitter profile',
      url: 'https://twitter.com/luisfalconmx',
      icon: TwitterIcon
    },
    {
      name: 'LinkedIn profile',
      url: 'https://www.linkedin.com/in/luisfalconmx/',
      icon: LinkedinIcon
    },
    {
      name: 'Instagram profile',
      url: 'https://www.instagram.com/luisfalconmx/',
      icon: InstagramIcon
    }
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) {
    return null
  }

  return (
    <header className={styles['Navbar']}>
      <div className={styles['Navbar__content']}>
        <button
          id="open-menu"
          aria-label="Open navigation menu"
          onClick={toggleMenu}
          className={styles['Navbar__toggle']}
        >
          <Bars2Icon className={styles['Navbar__icon']} />
        </button>

        <Link href="/" className={styles['Navbar__sitename']}>
          luisfalconmx.dev
        </Link>

        <nav
          className={cn(styles['Navbar__nav'], {
            [styles['Navbar__nav--open']]: isMenuOpen
          })}
        >
          <button
            id="close-menu"
            aria-label="Close navigation menu"
            onClick={toggleMenu}
            className={styles['Navbar__toggle']}
          >
            <XMarkIcon className={styles['Navbar__icon']} />
          </button>

          <ul className={styles['Navbar__list']}>
            {links.map((link, index) => (
              <li className={styles['Navbar__item']} key={index}>
                <Link
                  href={link.path}
                  className={cn(styles['Navbar__link'], {
                    [styles['Navbar__link--active']]: location === link.path
                  })}
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className={styles['Navbar__social-list']}>
            {socialLinks.map((socialLink, index) => (
              <li key={index}>
                <Link href={socialLink.url} target="_blank" rel="noreferrer">
                  <Image
                    src={socialLink.icon.src}
                    alt={socialLink.name}
                    width={24}
                    height={24}
                    className="dark:invert"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles['Navbar__actions']}>
          <button
            id="toggle-theme"
            aria-label="Toggle current theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <SunIcon className={styles['Navbar__icon']} />
            ) : (
              <MoonIcon className={styles['Navbar__icon']} />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
