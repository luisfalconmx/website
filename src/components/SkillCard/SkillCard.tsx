import Image from 'next/image'
import { Card, CardBody } from '@nextui-org/react'

const SkillCard = () => {
  return (
    <Card className="border border-divider bg-transparent">
      <CardBody className="grid grid-cols-[32px_1fr] items-center gap-x-5">
        <Image
          src="https://images.ctfassets.net/f6zp47ogowku/d0aUaOIQrhrzNdPiFCKvo/bebd66a96463319c2169ad06b561250b/javascript.svg"
          alt=""
          width={32}
          height={32}
        />
        <p className="text-lg">Javascript</p>
      </CardBody>
    </Card>
  )
}

export default SkillCard
