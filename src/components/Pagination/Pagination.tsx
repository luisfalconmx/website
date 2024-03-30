'use client'

import { useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import styles from './Pagination.module.css'
import type { PaginationProps } from './Pagination.d'

export const Pagination = ({ total, limit, currentPage }: PaginationProps) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pagesCount = Math.ceil(total / limit)

  const handleNavigate = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())

    return `${pathname}?${params.toString()}`
  }

  if (total <= limit) {
    return null
  }

  return (
    <div className={styles['Pagination']}>
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
        {Array.from({ length: pagesCount }).map((_, index) => (
          <Link
            href={`?page=${index + 1}`}
            key={index}
            className={styles['Pagination__item']}
            aria-label="Page 1"
          >
            {index + 1}
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
