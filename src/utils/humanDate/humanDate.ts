import dayjs from 'dayjs'

const humanDate = (date: string | Date) => {
  const [currentDate] = date.toString().split('T')

  return dayjs(currentDate).format('MMMM DD, YYYY')
}

export default humanDate
