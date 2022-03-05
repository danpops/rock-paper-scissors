import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

type ScoreType = {
  user: number
  comp: number
}

export type GameState = {
  userPlay: string
  compPlay: string
  isReset: boolean
  score: ScoreType
  round: number
}

export const INITIAL_GAME_STATE: GameState = {
  userPlay: '?',
  compPlay: '?',
  isReset: false,
  round: 1,
  score: {
    user: 0,
    comp: 0,
  },
}

const getAlert = (message: string, round: number) =>
  Alert.alert(`Round ${round}`, message)

const gameSlice = createSlice({
  name: 'game',
  initialState: INITIAL_GAME_STATE,
  reducers: {
    setCompPlay: (state, action: PayloadAction<string>) => {
      state.compPlay = action.payload
    },
    clearMove: (state) => {
      state.compPlay = '?'
      state.userPlay = '?'
    },
    resetGame: (state) => {
      state.userPlay = '?'
      state.compPlay = '?'
      state.isReset = false
      state.score = {
        user: 0,
        comp: 0,
      }
      state.round = 1
    },
    userWins: (state) => {
      getAlert('You Win!', state.round)
      state.round += 1
      state.score.user += 1
    },
    compWins: (state) => {
      getAlert('Computer Wins!', state.round)
      state.round += 1
      state.score.comp += 1
    },
    draw: (state) => {
      getAlert('Draw!', state.round)
      state.round += 1
    },
    showReset: (state) => {
      state.isReset = true
    },
    playNewGame: (state, action: PayloadAction<string>) => {
      state.compPlay = '?'
      state.isReset = false

      state.userPlay = action.payload
    },
  },
})

export const {
  userWins,
  compWins,
  clearMove,
  draw,
  setCompPlay,
  playNewGame,
  resetGame,
  showReset,
} = gameSlice.actions
export default gameSlice.reducer
