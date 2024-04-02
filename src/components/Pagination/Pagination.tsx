'use client'

import { useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import cn from '@/utils/cn'
import styles from './Pagination.module.css'
import type { PaginationProps } from './Pagination.d'

export const Pagination = ({
  total,
  limit,
  currentPage,
  className = ''
}: PaginationProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pagesCount = Math.ceil(total / limit)
  const maxPages = 4
  let indexedPages = Array.from({ length: pagesCount }).map(
    (_, index) => index + 1
  )

  if (currentPage < maxPages) {
    indexedPages = indexedPages.splice(0, maxPages)
  } else if (currentPage + maxPages <= pagesCount) {
    indexedPages = indexedPages.splice(currentPage - 1, maxPages)
  } else {
    indexedPages = indexedPages.splice(pagesCount - maxPages, maxPages)
  }

  const handleNavigate = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())

    return `${pathname}?${params.toString()}`
  }

  if (total <= limit || currentPage > pagesCount) {
    return null
  }

  return (
    <div className={cn(styles['Pagination'], className)}>
      {currentPage > 1 && (
        <Link
          href={handleNavigate(currentPage - 1)}
          className={styles['Pagination__arrow']}
          aria-label="Previous page"
        >
          <ArrowRightIcon className={styles['Pagination__icon']} />
        </Link>
      )}

      <div className={styles['Pagination__track']}>
        {indexedPages.map((index) => (
          <Link
            href={`?page=${index}`}
            key={index}
            className={cn(styles['Pagination__item'], {
              [styles['Pagination__item--active']]: currentPage === index
            })}
            aria-label={`Go to page ${index}`}
          >
            {index}
          </Link>
        ))}
      </div>

      {currentPage < pagesCount && (
        <Link
          href={handleNavigate(currentPage + 1)}
          className={styles['Pagination__arrow']}
          aria-label="Next page"
        >
          <ArrowLeftIcon className={styles['Pagination__icon']} />
        </Link>
      )}
    </div>
  )
}
