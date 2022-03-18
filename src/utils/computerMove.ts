import { getRandomNumber } from './getRandomNumber'

export const getComputerMove = () => {
  return {
    0: 'R',
    1: 'P',
    2: 'S',
  }[getRandomNumber(3)]
}
