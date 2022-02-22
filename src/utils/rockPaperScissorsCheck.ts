import { isPaper, isRock, isScissors, validInputs } from '../lib/constants'

export const rockPaperScissorsCheck = (player1: string, player2: string) => {
  const validMoveP1 = validInputs.includes(player1)
  const validMoveP2 = validInputs.includes(player2)

  if (!validMoveP1 || !validMoveP2) {
    return 'Invalid move'
  }

  if (player1 === player2) {
    return 'D'
  }

  const player1Wins =
    (isRock(player1) && isScissors(player2)) ||
    (isPaper(player1) && isRock(player2)) ||
    (isScissors(player1) && isPaper(player2))

  return player1Wins ? 'P1' : 'P2'
}
