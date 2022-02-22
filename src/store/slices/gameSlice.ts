import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type ScoreType = {
  user: number
  comp: number
}

type GameStateType = {
  userPlay: string
  compPlay: string
  winner: string | undefined
  gameWinner: string
  isReset: boolean
  score: ScoreType
}

const initialState: GameStateType = {
  userPlay: '?',
  compPlay: '?',
  winner: undefined,
  gameWinner: '',
  isReset: false,
  score: {
    user: 0,
    comp: 0,
  },
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setCompPlay: (state, action: PayloadAction<string>) => {
      state.compPlay = action.payload
    },
    resetGame: (state) => {
      state.userPlay = '?'
      state.compPlay = '?'
      state.winner = undefined
      state.gameWinner = ''
      state.isReset = false
      state.score = {
        user: 0,
        comp: 0,
      }
    },
    userWins: (state) => {
      state.score.user += 1
      state.gameWinner = 'You Win!'
    },
    compWins: (state) => {
      state.score.comp += 1
      state.gameWinner = 'Computer Wins!'
    },
    draw: (state) => {
      state.gameWinner = 'Draw!'
    },
    showReset: (state) => {
      state.isReset = true
    },
    playNewGame: (state, action: PayloadAction<string>) => {
      state.compPlay = '?'
      state.isReset = false
      state.gameWinner = ''

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
