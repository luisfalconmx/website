'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import styles from './Search.module.css'
import cn from '@/utils/cn'
import type { ChangeEvent, FormEvent } from 'react'
import type { SearchProps } from './Search.d'

export const Search = ({ className = '' }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const { push } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateSearchTerm = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement
    const value = target.value

    setSearchTerm(value)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (searchTerm) {
      push(`${pathname}?search=${searchTerm}`)
    } else {
      push(pathname)
    }
  }

  useEffect(() => {
    const searchValue = searchParams.get('search')

    if (searchValue) {
      setSearchTerm(searchValue)
    } else {
      setSearchTerm('')
    }
  }, [searchParams])

  return (
    <form
      className={cn(styles['Search'], className)}
      onSubmit={(e: FormEvent) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Search"
        className={styles['Search__input']}
        maxLength={50}
        onChange={(event) => updateSearchTerm(event)}
        value={searchTerm}
      />
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className={styles['Search__button']}
      >
        <ArrowRightIcon className={styles['Search__icon']} />
      </button>
    </form>
  )
}
