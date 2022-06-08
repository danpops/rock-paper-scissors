import {GameMoves, VALID_INPUTS} from '../lib/constants';
import {getRandomNumber} from './getRandomNumber';

export const isValidMove = (move: GameMoves) => VALID_INPUTS.includes(move);

export const getComputerMove = () => {
  const move = {
    0: GameMoves.ROCK,
    1: GameMoves.PAPER,
    2: GameMoves.SCISSORS,
  }[getRandomNumber(3)];
  const isValid = move && isValidMove(move);
  return isValid ? move : GameMoves.EMPTY;
};
