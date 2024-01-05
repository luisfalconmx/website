import Image from 'next/image'

type Props = {
  data?: {
    displayName: string
    provider: string
    url: string
  }[]
  className?: string
}

const SocialIcons = ({ data, className = '' }: Props) => {
  return (
    <ul className={className}>
      {data &&
        data?.map(({ provider, url }) => (
          <li key={provider} className="mr-8 last:mr-0">
            <a href={url} title={provider}>
              <Image
                width={34}
                height={34}
                src={`https://unpkg.com/simple-icons@v10/icons/${provider.toLowerCase()}.svg`}
                alt={provider}
                className="dark:invert"
              />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default SocialIcons
