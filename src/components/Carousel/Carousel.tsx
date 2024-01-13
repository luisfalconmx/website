import { Splide, SplideTrack } from '@splidejs/react-splide'
import { ChevronRight } from 'react-feather'
import styles from './Carousel.module.css'
import type { ReactNode } from 'react'
import type { Options } from '@splidejs/react-splide'

interface Props {
  children: ReactNode
  className?: string
}

const Carousel = ({ children, className = '' }: Props) => {
  const carouselOptions: Options = {
    pagination: false,
    rewind: true,
    arrows: true,
    keyboard: true,
    autoplay: true
  }

  return (
    <Splide
      aria-label="My Favorite Images"
      options={carouselOptions}
      hasTrack={false}
      className={`${styles.Carousel} ${className}`}
    >
      <SplideTrack>{children}</SplideTrack>

      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev !hidden">
          Prev
        </button>
        <button
          className={`splide__arrow splide__arrow--next ${styles.Carousel__arrow}`}
        >
          <ChevronRight
            size={62}
            color="#ffffff"
            className={styles.Carousel__icon}
          />
        </button>
      </div>
    </Splide>
  )
}

export default Carousel
