import dayjs from 'dayjs'

const humanDate = (date: Date) => {
  return dayjs(date).format('MMMM DD, YYYY')
}

export default humanDate
