import { getRandomNumber } from '../getRandomNumber'

describe('getRandomNumber', () => {
  it('should return a number between 0-12', () => {
    const number = getRandomNumber(12)
    const isCorrectValue = number >= 0 && number <= 12
    expect(isCorrectValue).toBeTruthy()
  })

  it('should return a number between 0-1', () => {
    const number = getRandomNumber(1)
    const isCorrectValue = number >= 0 && number <= 1
    expect(isCorrectValue).toBeTruthy()
  })

  it('should return a number between 0-100', () => {
    const number = getRandomNumber(100)
    const isCorrectValue = number >= 0 && number <= 100
    expect(isCorrectValue).toBeTruthy()
  })
})
