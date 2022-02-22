import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ScoreType = {
  user: number
  comp: number
}

export type GameState = {
  userPlay: string
  compPlay: string
  gameResult: string
  isReset: boolean
  score: ScoreType
}

export const INITIAL_GAME_STATE: GameState = {
  userPlay: '?',
  compPlay: '?',
  gameResult: '',
  isReset: false,
  score: {
    user: 0,
    comp: 0,
  },
}

const gameSlice = createSlice({
  name: 'game',
  initialState: INITIAL_GAME_STATE,
  reducers: {
    setCompPlay: (state, action: PayloadAction<string>) => {
      state.compPlay = action.payload
    },
    resetGame: (state) => {
      state.userPlay = '?'
      state.compPlay = '?'
      state.gameResult = ''
      state.isReset = false
      state.score = {
        user: 0,
        comp: 0,
      }
    },
    userWins: (state) => {
      state.score.user += 1
      state.gameResult = 'You Win!'
    },
    compWins: (state) => {
      state.score.comp += 1
      state.gameResult = 'Computer Wins!'
    },
    draw: (state) => {
      state.gameResult = 'Draw!'
    },
    showReset: (state) => {
      state.isReset = true
    },
    playNewGame: (state, action: PayloadAction<string>) => {
      state.compPlay = '?'
      state.isReset = false
      state.gameResult = ''

      state.userPlay = action.payload
    },
  },
})

export const {
  userWins,
  compWins,
  draw,
  setCompPlay,
  playNewGame,
  resetGame,
  showReset,
} = gameSlice.actions
export default gameSlice.reducer
