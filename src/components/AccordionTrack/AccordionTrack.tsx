'use client'
import Image from 'next/image'
import { Accordion, AccordionItem } from '@nextui-org/react'
import companyPicture from '@/assets/images/company.webp'
import humanDate from '@/utils/humanDate'
import type { AccordionTrackProps } from './AccordionTrack.d'

const AccordionTrack = ({ items }: AccordionTrackProps) => {
  return (
    <Accordion defaultExpandedKeys={['1', '2', '3', '4']}>
      {items.map((item, index) => (
        <AccordionItem
          key={index + 1}
          aria-label={item.title}
          title={<div className="text-2xl">{item.title}</div>}
          subtitle={
            <div className="flex flex-col text-lg">
              {item.companyName}
              <span className="text-base">
                {humanDate(new Date(item.startDate))} -{' '}
                {item.endDate ? humanDate(new Date(item.endDate)) : 'Present'}
              </span>
            </div>
          }
          startContent={
            <Image
              src={item.companyImage}
              alt={item.companyName}
              width={70}
              height={70}
              className="mr-2 rounded-xl border border-divider"
            />
          }
        >
          {item.description}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionTrack
