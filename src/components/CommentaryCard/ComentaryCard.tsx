import { Card, CardHeader, CardBody, Avatar, Chip } from '@nextui-org/react'
import humanDate from '@/utils/humanDate'
import parse from 'html-react-parser'
import type { ComentaryCardProps } from './CommentaryCard'

const ComentaryCard = ({
  profile,
  content,
  variant = 'default'
}: ComentaryCardProps) => (
  <Card
    className={`${variant === 'reply' ? 'bg-content1' : ''} border border-divider px-4 py-3`}
  >
    <CardHeader className="justify-between">
      <div className="flex gap-5">
        <Avatar isBordered radius="full" size="lg" src={profile.image} />
        <div className="flex flex-col items-start justify-center gap-1">
          <h4 className="text-base font-semibold leading-none text-default-600">
            {profile.title}
          </h4>
          <h5 className="text-base tracking-tight text-default-400">
            {humanDate(new Date(profile.date))}
          </h5>
        </div>
      </div>
    </CardHeader>
    <CardBody className="px-3 text-lg text-default-400">
      {parse(content)}
    </CardBody>
  </Card>
)

export default ComentaryCard
