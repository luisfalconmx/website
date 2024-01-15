import Link from 'next/link'
import dayjs from 'dayjs'
import styles from './Footer.module.css'

const Footer = () => {
  const year = dayjs().year()

  return (
    <footer className={styles.Footer}>
      <p className={styles.Footer__text}>{year} - luisfalconmx.dev</p>
      <div>
        <Link href="/privacy-policy" className={styles.Footer__link}>
          Privacy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
