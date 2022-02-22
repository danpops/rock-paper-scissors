import gameSlice, {
  setCompPlay,
  resetGame,
  userWins,
  compWins,
  draw,
  showReset,
  playNewGame,
  GameState,
  INITIAL_GAME_STATE,
} from '../game.reducer'

describe('Game Slice', () => {
  describe('setCompPlay', () => {
    it('should update computer play', () => {
      const computerPlay = 'R'
      const action = setCompPlay(computerPlay)
      const expectedResult: GameState = {
        userPlay: '?',
        compPlay: 'R',
        gameResult: '',
        isReset: false,
        score: {
          user: 0,
          comp: 0,
        },
      }
      const actualResult = gameSlice(INITIAL_GAME_STATE, action)
      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('resetGame', () => {
    it('should reset game', () => {
      const currentState: GameState = {
        userPlay: 'R',
        compPlay: 'S',
        gameResult: 'You Win!',
        isReset: true,
        score: {
          user: 1,
          comp: 5,
        },
      }
      const action = resetGame()
      const actualResult = gameSlice(currentState, action)
      expect(actualResult).toEqual(INITIAL_GAME_STATE)
    })
  })

  describe('userWins', () => {
    it('should set user as round winner', () => {
      const currentState: GameState = {
        userPlay: 'R',
        compPlay: 'S',
        gameResult: '',
        isReset: false,
        score: {
          user: 2,
          comp: 4,
        },
      }

      const action = userWins()
      const expectedResult = {
        ...currentState,
        gameResult: 'You Win!',
        score: { user: 3, comp: 4 },
      }
      const actualResult = gameSlice(currentState, action)
      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('compWins', () => {
    it('should set computer as round winner', () => {
      const currentState: GameState = {
        userPlay: 'P',
        compPlay: 'S',
        gameResult: '',
        isReset: false,
        score: {
          user: 3,
          comp: 4,
        },
      }

      const action = compWins()
      const expectedResult = {
        ...currentState,
        gameResult: 'Computer Wins!',
        score: { user: 3, comp: 5 },
      }
      const actualResult = gameSlice(currentState, action)
      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('draw', () => {
    it('should set round as draw', () => {
      const currentState: GameState = {
        userPlay: 'R',
        compPlay: 'R',
        gameResult: '',
        isReset: false,
        score: {
          user: 2,
          comp: 2,
        },
      }

      const action = draw()
      const expectedResult = {
        ...currentState,
        gameResult: 'Draw!',
        score: { user: 2, comp: 2 },
      }
      const actualResult = gameSlice(currentState, action)
      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('showReset', () => {
    it('should set isReset true', () => {
      const action = showReset()
      const expectedResult = {
        ...INITIAL_GAME_STATE,
        isReset: true,
      }
      const actualResult = gameSlice(INITIAL_GAME_STATE, action)
      expect(actualResult).toEqual(expectedResult)
    })
  })

  describe('playNewGame', () => {
    it('should set new game', () => {
      const currentState: GameState = {
        userPlay: 'P',
        compPlay: 'S',
        gameResult: 'Computer Wins!',
        isReset: true,
        score: {
          user: 2,
          comp: 4,
        },
      }
      const userPlay = 'P'
      const action = playNewGame(userPlay)
      const expectedResult = {
        ...currentState,
        userPlay,
        compPlay: '?',
        gameResult: '',
        isReset: false,
      }
      const actualResult = gameSlice(currentState, action)
      expect(actualResult).toEqual(expectedResult)
    })
  })
})
