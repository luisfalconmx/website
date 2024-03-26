import type { RequestInit } from 'next/dist/server/web/spec-extension/request'

export interface restClientProps {
  url: string
  headers?: RequestInit['headers']
  mode?: 'ssg' | 'ssr' | 'isr'
  revalidateTime?: number
}
