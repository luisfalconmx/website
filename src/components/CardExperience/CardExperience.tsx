import Image from 'next/image'
import styles from './CardExperience.module.css'
import dayjs from 'dayjs'
import type { CardExperienceProps } from './CardExperience.d'

const CardExperience = ({
  title,
  companyName,
  companyImage,
  startDate,
  endDate,
  description
}: CardExperienceProps) => {
  const renderDate = (date?: string) => {
    if (date) {
      const extractedDate = date.substring(0, 10)
      return dayjs(extractedDate).format('DD MMMM YYYY')
    }

    return 'Present'
  }

  return (
    <div className={styles.CardExperience}>
      <div className={styles.CardExperience__content}>
        <Image
          src={companyImage}
          alt={companyName}
          width={100}
          height={100}
          className={styles.CardExperience__image}
        />
        <div>
          <b className={styles.CardExperience__title}>{title}</b>
          <p className={styles.CardExperience__companyName}>{companyName}</p>
          <p className={styles.CardExperience__date}>
            {renderDate(startDate)} - {renderDate(endDate)}
          </p>

          <p className={styles.CardExperience__description}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default CardExperience
