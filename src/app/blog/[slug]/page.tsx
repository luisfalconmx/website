// RENDER STRATEGY: (ISR) Incremental Static Regeneration
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'post'
}

export default function Post({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}
