import Image from 'next/image'
import Link from 'next/link'
import { socialLinks } from '@/config/socialLinks'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles['Footer']}>
      <div className={styles['Footer__container']}>
        <Link href="/" className={styles['Footer__title']}>
          luisfalconmx.dev
        </Link>
        <legend className={styles['Footer__legend']}>
          © {currentYear} Luis Falcon (luisfalconmx)
        </legend>
        {/* social */}
        <ul className={styles['Footer__social']}>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.url}>
                <Image
                  src={link.icon}
                  width={24}
                  height={24}
                  alt={link.name}
                  className="dark:invert"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
