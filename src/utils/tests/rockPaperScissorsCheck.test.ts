import { GameMoves, GameResults } from '../../lib/constants'
import { rockPaperScissorsCheck } from '../rockPaperScissorsCheck'

describe('rockPaperScissorsCheck unit test', () => {
  it('should return player1 when player1 is Rock and player2 is Scissor', () => {
    const player1 = GameMoves.ROCK
    const player2 = GameMoves.SCISSORS
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.PLAYER_1_WIN)
  })

  it('should return player2 when player1 is Rock and player2 is Paper', () => {
    const player1 = GameMoves.ROCK
    const player2 = GameMoves.PAPER
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.PLAYER_2_WIN)
  })

  it('should return D when player1 is Rock and player2 is Rock', () => {
    const player1 = GameMoves.ROCK
    const player2 = GameMoves.ROCK
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.DRAW)
  })

  it('should return player1 when player1 is Paper and player2 is Rock', () => {
    const player1 = GameMoves.PAPER
    const player2 = GameMoves.ROCK
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.PLAYER_1_WIN)
  })

  it('should return player2 when player1 is Paper and player2 is Scissors', () => {
    const player1 = GameMoves.PAPER
    const player2 = GameMoves.SCISSORS
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.PLAYER_2_WIN)
  })

  it('should return D when player1 is Paper and player2 is Paper', () => {
    const player1 = GameMoves.PAPER
    const player2 = GameMoves.PAPER
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.DRAW)
  })

  it('should return player1 when player1 is Scissors and player2 is Paper', () => {
    const player1 = GameMoves.SCISSORS
    const player2 = GameMoves.PAPER
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.PLAYER_1_WIN)
  })

  it('should return player2 when player1 is Scissors and player2 is Rock', () => {
    const player1 = GameMoves.SCISSORS
    const player2 = GameMoves.ROCK
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.PLAYER_2_WIN)
  })

  it('should return D when player1 is Scissors and player2 is Scissors', () => {
    const player1 = GameMoves.SCISSORS
    const player2 = GameMoves.SCISSORS
    const result = rockPaperScissorsCheck(player1, player2)
    expect(result).toBe(GameResults.DRAW)
  })
})
