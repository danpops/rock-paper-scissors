import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlayerType = {
  user: number
  comp: number
}

export type GameState = {
  userPlay: string
  compPlay: string
  score: PlayerType
  selectedMoveBg: PlayerType
  round: number
}

export const INITIAL_GAME_STATE: GameState = {
  userPlay: '?',
  compPlay: '?',
  selectedMoveBg: {
    user: 1,
    comp: 1,
  },
  round: 1,
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
    setUserPlay: (state, action: PayloadAction<string>) => {
      state.userPlay = action.payload
    },
    clearMove: (state) => {
      state.compPlay = '?'
      state.userPlay = '?'
      state.selectedMoveBg = {
        user: 1,
        comp: 1,
      }
    },
    resetGame: (state) => {
      state.userPlay = '?'
      state.compPlay = '?'

      state.score = {
        user: 0,
        comp: 0,
      }
      state.selectedMoveBg = {
        user: 1,
        comp: 1,
      }
      state.round = 1
    },
    userWins: (state) => {
      state.round += 1
      state.score.user += 1
      state.selectedMoveBg = {
        user: 0,
        comp: 2,
      }
    },
    compWins: (state) => {
      state.round += 1
      state.score.comp += 1
      state.selectedMoveBg = {
        user: 2,
        comp: 0,
      }
    },
    draw: (state) => {
      state.round += 1
      state.selectedMoveBg = {
        user: 1,
        comp: 1,
      }
    },
    playNewGame: (state, action: PayloadAction<string>) => {
      state.compPlay = '?'
      state.selectedMoveBg = {
        user: 1,
        comp: 1,
      }
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
  setUserPlay,
  resetGame,
} = gameSlice.actions
export default gameSlice.reducer
