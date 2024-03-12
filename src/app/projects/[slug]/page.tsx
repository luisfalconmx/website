// RENDER STRATEGY: (ISR) Incremental Static Regeneration
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'project'
}

export default function Project({ params }: { params: { slug: string } }) {
  return <div>Project: {params.slug}</div>
}
