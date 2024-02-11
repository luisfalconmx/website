import Image from 'next/image'
import type { SocialIconsProps } from './SocialIcons.d'

const SocialIcons = ({ data, className = '' }: SocialIconsProps) => {
  return (
    <ul className={className}>
      {data &&
        data?.map(({ title, link, iconUrl }) => (
          <li key={title} className="mr-5 last:mr-0 md:mr-8">
            <a href={link} title={title} target="_blank">
              <Image
                width={34}
                height={34}
                src={iconUrl}
                alt={title}
                className="dark:invert"
              />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default SocialIcons
