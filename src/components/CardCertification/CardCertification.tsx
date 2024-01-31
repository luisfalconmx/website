import Image from 'next/image'
import humanDate from '@/utils/humanDate'
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
  <div className="grid grid-cols-[720px,1fr] bg-ghost dark:bg-onyx">
    <Image
      src={image}
      alt={name}
      width="720"
      height="720"
      className="border border-r-0 border-onyx/30"
    />
    <div className="border border-l-0 border-onyx/30 px-8 pb-2 pt-10">
      <Image
        src={organizationImage}
        alt={organizationName}
        width="50"
        height="50"
        className="mb-2 block rounded-lg"
      />
      <h2 className="mb-3 text-4xl font-bold">{name}</h2>

      <b className="text-lg">Issuing Organization</b>
      <p className="mb-6 block text-iron dark:text-smoke">{organizationName}</p>

      <b className="text-lg">Issue Date</b>
      <p className="mb-6 block text-iron dark:text-smoke">{humanDate(date)}</p>

      <b className="text-lg">Certification ID</b>
      <p className="mb-6 max-w-full overflow-clip text-iron dark:text-smoke">
        {credentialId}
      </p>

      <b className="text-lg">Certification URL</b>
      <a
        className="block text-iron underline dark:text-smoke"
        href={credentialUrl}
      >
        {credentialUrl}
      </a>
    </div>
  </div>
)

export default CardCertification
