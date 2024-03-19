'use client'
import { Pagination } from '@nextui-org/react'
import type { PaginationTrackProps } from './PaginationTrackProps'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const PaginationTrack = ({
  total,
  itemsPerPage,
  currentPage
}: PaginationTrackProps) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Pagination
      showControls
      total={Math.ceil(total / itemsPerPage)}
      initialPage={currentPage}
      color="default"
      className="mb-16"
      onChange={(page) => {
        router.push(`${pathname}?page=${page}`)
      }}
      classNames={{
        wrapper: ' p-12',
        next: 'text-2xl',
        prev: 'text-2xl',
        cursor: 'text-2xl bg-gradient-to-r from-primary to-secondary',
        item: 'text-xl'
      }}
    />
  )
}

export default PaginationTrack
