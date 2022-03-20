import {
  GameMoves,
  GameResults,
  isPaper,
  isRock,
  isScissors,
  VALID_INPUTS,
} from '../lib/constants'

export const isValidMove = (val: GameMoves) => VALID_INPUTS.includes(val)

export const rockPaperScissorsCheck = (
  player1: GameMoves,
  player2: GameMoves,
) => {
  if (!isValidMove(player1) || !isValidMove(player2)) {
    return GameResults.INVALID
  }

  if (player1 === player2) {
    return GameResults.DRAW
  }

  const player1Wins =
    (isRock(player1) && isScissors(player2)) ||
    (isPaper(player1) && isRock(player2)) ||
    (isScissors(player1) && isPaper(player2))

  return player1Wins ? GameResults.PLAYER_1_WIN : GameResults.PLAYER_2_WIN
}
