import Image from 'next/image'
import type { SocialIconsProps } from './SocialIcons.d'

const SocialIcons = ({ data, className = '' }: SocialIconsProps) => {
  return (
    <ul className={className}>
      {data &&
        data?.map(({ provider, url }) => (
          <li key={provider} className="mr-8 last:mr-0">
            <a href={url} title={provider} target="_blank">
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
