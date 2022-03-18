import { colors } from '../lib/colors'

export const getRandomColor = () => {
  return (
    {
      0: colors.black,
      1: colors.blue,
      2: colors.default,
      3: colors.error,
      4: colors.green,
      5: colors.lightGray,
      6: colors.orange,
      7: colors.purple,
      8: colors.red,
      9: colors.success,
      10: colors.white,
      11: colors.yellow,
    }[Math.floor(Math.random() * 12)] || 'black'
  )
}
