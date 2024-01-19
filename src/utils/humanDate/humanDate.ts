import dayjs from 'dayjs'

const humanDate = (date: Date) => {
  return dayjs(date).format('MMM DD, YYYY')
}

export default humanDate
