import Link from 'next/link'
import dayjs from 'dayjs'
import styles from './Footer.module.css'

const Footer = () => {
  const year = dayjs().year()

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__content}>
        <p className={styles.Footer__text}>{year} - luisfalconmx.dev</p>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer
