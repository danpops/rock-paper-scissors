export const isRock = (play: string) => play === GameMoves.ROCK;
export const isPaper = (play: string) => play === GameMoves.PAPER;
export const isScissors = (play: string) => play === GameMoves.SCISSORS;

export const noop = () => null;

export enum DefaultGameValues {
  GREEN_BG = 0,
  WHITE_BG = 1,
  RED_BG = 2,
  ROUND = 1,
  SCORE = 0,
}

export enum GameMoves {
  ROCK = 'R',
  PAPER = 'P',
  SCISSORS = 'S',
  EMPTY = '?',
}

export enum GameResults {
  PLAYER_1_WIN = 'P1',
  PLAYER_2_WIN = 'P2',
  DRAW = 'D',
  INVALID = 'Invalid move',
}

export const VALID_INPUTS = [
  GameMoves.ROCK,
  GameMoves.PAPER,
  GameMoves.SCISSORS,
];
