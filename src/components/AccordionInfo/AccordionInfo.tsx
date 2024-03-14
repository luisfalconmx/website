'use client'
import Image from 'next/image'
import { Accordion, AccordionItem } from '@nextui-org/react'
import companyPicture from '@/assets/images/company.webp'

const AccordionInfo = () => {
  return (
    <Accordion defaultExpandedKeys={['1']}>
      {[1, 2, 3, 4].map((_, index) => (
        <AccordionItem
          key={index + 1}
          aria-label="Frontend Vue.js Developer"
          title={<div className="text-2xl">Frontend Vue.js Developer</div>}
          subtitle={
            <div className="flex flex-col text-lg">
              Cantera Digital
              <span className="text-base">03 March 2023 - 21 January 2024</span>
            </div>
          }
          startContent={
            <Image
              src={companyPicture}
              alt="Company logo"
              width={80}
              height={80}
              className="mr-2"
            />
          }
        >
          I joined the P1stache team as Frontend Developer Jr where collaborate
          with development lead and UI designers to develop different online
          stores, the agency website and a landing page using technologies such
          as Preact, Sass, Gulp, Git and Github, Adobe XD, among others. The
          main tasks he performed were the layout of the views designed in the
          prototype, implementation of functionalities using JavaScript - Preact
          and style correction in existing projects.
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionInfo
