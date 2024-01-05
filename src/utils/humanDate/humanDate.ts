import dayjs from 'dayjs'

// returns date with this format Jun 27, 2020
const humanDate = (date: Date) => {
  return dayjs(date).format('MMM DD, YYYY')
}

export default humanDate
