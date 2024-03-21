import Image from 'next/image'
import { Card, CardBody } from '@nextui-org/react'
import type { SkillCardProps } from './SkillCard.d'

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <Card isHoverable className="border border-divider bg-transparent">
      <CardBody className="grid grid-cols-[32px_1fr] items-center gap-x-5">
        <Image
          src={icon}
          alt={`${name} icon`}
          width={32}
          height={32}
          className="aspect-square h-auto w-auto"
        />
        <p className="text-lg">{name}</p>
      </CardBody>
    </Card>
  )
}

export default SkillCard
