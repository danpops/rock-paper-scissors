import { rockPaperScissorsCheck } from '../rockPaperScissorsCheck'

describe('rockPaperScissorsCheck unit test', () => {
  const rock = 'R'
  const paper = 'P'
  const scissors = 'S'

  const player1 = 'P1'
  const player2 = 'P2'
  const playDraw = 'D'

  const invalidMove = 'Invalid move'

  it('should return P1 when P1 is Rock and P2 is Scissor', () => {
    const p1 = rock
    const p2 = scissors
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(player1)
  })

  it('should return P2 when P1 is Rock and P2 is Paper', () => {
    const p1 = rock
    const p2 = paper
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(player2)
  })

  it('should return D when P1 is Rock and P2 is Rock', () => {
    const p1 = rock
    const p2 = rock
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(playDraw)
  })

  it('should return P1 when P1 is Paper and P2 is Rock', () => {
    const p1 = paper
    const p2 = rock
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(player1)
  })

  it('should return P2 when P1 is Paper and P2 is Scissors', () => {
    const p1 = paper
    const p2 = scissors
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(player2)
  })

  it('should return D when P1 is Paper and P2 is Paper', () => {
    const p1 = paper
    const p2 = paper
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(playDraw)
  })

  it('should return P1 when P1 is Scissors and P2 is Paper', () => {
    const p1 = scissors
    const p2 = paper
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(player1)
  })

  it('should return P2 when P1 is Scissors and P2 is Rock', () => {
    const p1 = scissors
    const p2 = rock
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(player2)
  })

  it('should return D when P1 is Scissors and P2 is Scissors', () => {
    const p1 = scissors
    const p2 = scissors
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(playDraw)
  })

  it('should return invalid p1 move', () => {
    const p1 = 'Sci'
    const p2 = scissors
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(invalidMove)
  })

  it('should return invalid p2 move', () => {
    const p1 = scissors
    const p2 = 'Move'
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(invalidMove)
  })

  it('should return invalid move', () => {
    const p1 = '1234'
    const p2 = 'Move'
    const result = rockPaperScissorsCheck(p1, p2)
    expect(result).toBe(invalidMove)
  })
})
