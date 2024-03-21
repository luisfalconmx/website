import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import type { CertificationCardProps } from './CertificationCardProps'
import humanDate from '@/utils/humanDate'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const CertificationCard = ({
  name,
  image,
  organizationName,
  organizationImage,
  date,
  credentialUrl
}: CertificationCardProps) => {
  const renderDate = humanDate(date)

  return (
    <Card isFooterBlurred className="h-[430px] w-full">
      <Image
        width={600}
        height={430}
        alt={name}
        src={image}
        removeWrapper
        className="z-0 h-auto w-auto object-cover"
      />
      <CardFooter className="absolute bottom-0 z-10 min-h-[90px] border-t-1 border-default-600 bg-black/70 dark:border-default-100">
        <div className="flex flex-grow items-center gap-2">
          <Image
            alt={organizationName}
            src={organizationImage}
            width={48}
            height={48}
            className="aspect-square h-auto w-auto rounded-full bg-black"
          />
          <div className="flex flex-col">
            <p className="text-md font-bold text-white">{name}</p>
            <p className="text-small text-white">{renderDate}</p>
          </div>
        </div>
        <Link href={credentialUrl} aria-label={`View certification of ${name}`}>
          <Button
            size="sm"
            variant="light"
            id={name}
            title="View certification details"
          >
            <ArrowTopRightOnSquareIcon className="h-7 w-7" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CertificationCard
