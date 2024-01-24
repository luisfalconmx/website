const addZero = (number: number): string => {
  if (number < 10) {
    return `0${number}`
  }

  return `${number}`
}

export default addZero
