import Image from 'next/image'
import styles from './CardExperience.module.css'
import dayjs from 'dayjs'
import type { CardExperienceProps } from './CardExperience.d'

const CardExperience = ({
  title,
  companyName,
  companyImage,
  employmentType,
  location,
  locationType,
  startDate,
  endDate,
  industry,
  description
}: CardExperienceProps) => {
  const renderDate = (date?: string) => {
    if (date) {
      return dayjs(date).format('DD MMM YYYY')
    }

    return 'Present'
  }

  return (
    <div className={styles.CardExperience}>
      <div className={styles.CardExperience__content}>
        <Image src={companyImage} alt={companyName} width={50} height={50} />
        <div>
          <b className={styles.CardExperience__title}>{title}</b>
          <p className={styles.CardExperience__companyName}>{companyName}</p>

          <p>
            {location} - {locationType} - {employmentType}
          </p>
          <p className={styles.CardExperience__industry}>{industry}</p>
          <p className={styles.CardExperience__description}>{description}</p>
        </div>
        <div>
          <p className={styles.CardExperience__date}>
            {renderDate(startDate)} - {renderDate(endDate)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardExperience
