import { ArrowRightIcon } from '@heroicons/react/24/outline'
import type { PaginationProps } from './Pagination.d'
import Link from 'next/link'

export const Pagination = ({ total, limit, currentPage }: PaginationProps) => {
  const pagesCount = Math.ceil(total / limit)

  if (total <= limit) {
    return null
  }

  return (
    <div className="mt-14 flex justify-center">
      <Link
        href={`?page=${currentPage - 1}`}
        className="mx-4 flex h-10 w-10 items-center justify-center rounded-full border border-divider-soft dark:border-divider-hard"
        aria-label="Previous page"
      >
        <ArrowRightIcon className="h-6 w-6 rotate-180 transform" />
      </Link>

      <div className="flex space-x-2">
        {Array.from({ length: pagesCount }).map((_, index) => (
          <Link
            href={`?page=${index + 1}`}
            key={index}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-divider-soft bg-divider-soft dark:border-divider-hard dark:bg-divider-hard"
            aria-label="Page 1"
          >
            {index + 1}
          </Link>
        ))}
      </div>

      <Link
        href={`?page=${currentPage + 1}`}
        className="mx-4 flex h-10 w-10 items-center justify-center rounded-full border border-divider-soft dark:border-divider-hard"
        aria-label="Next page"
      >
        <ArrowRightIcon className="h-6 w-6" />
      </Link>
    </div>
  )
}
