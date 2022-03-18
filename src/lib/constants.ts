export const validInputs = ['R', 'P', 'S']

export const isRock = (play: string) => play === 'R'
export const isPaper = (play: string) => play === 'P'
export const isScissors = (play: string) => play === 'S'

export const noop = () => null

export enum DefaultGameValues {
  GREEN_BG = 0,
  WHITE_BG = 1,
  RED_BG = 2,
  ROUND = 1,
  SCORE = 0,
}
