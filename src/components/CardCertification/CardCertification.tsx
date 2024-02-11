import Image from 'next/image'
import humanDate from '@/utils/humanDate'
import Button from '@/components/Button'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { CardCertificationProps } from './CardCertification.d'

const CardCertification = ({
  name,
  image,
  organizationName,
  organizationImage,
  date,
  credentialId,
  credentialUrl
}: CardCertificationProps) => (
  <div className="flex w-full flex-col rounded-b-xl rounded-t-xl border border-iron/40 bg-ghost dark:bg-onyx">
    <Image
      src={image}
      alt={name}
      width="720"
      height="720"
      className="w-full rounded-t-xl border border-r-0 border-onyx/30"
    />
    <div className="flex h-full flex-col border border-l-0 border-onyx/30 px-8 py-10">
      <h2 className="mb-4 text-3xl font-bold">{name}</h2>

      <p className="mb-6 flex items-center text-xl font-bold text-iron dark:text-smoke">
        <Image
          src={organizationImage}
          alt={organizationName}
          width="30"
          height="30"
          className="mr-2 block rounded-lg"
        />
        {organizationName}
      </p>

      <b className="text-lg">Issue Date</b>
      <p className="mb-6 block text-iron dark:text-smoke">{humanDate(date)}</p>

      <b className="text-lg">Certification ID</b>
      <p className="mb-6 max-w-full overflow-clip text-iron dark:text-smoke">
        {credentialId}
      </p>

      <a className="mt-auto block" href={credentialUrl}>
        <Button
          variant="filled"
          className="flex items-center text-base lg:text-xl"
        >
          View Certification
          <ArrowTopRightOnSquareIcon className="ml-2 h-6 w-6" />
        </Button>
      </a>
    </div>
  </div>
)

export default CardCertification
