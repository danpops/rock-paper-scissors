import { createSlice } from '@reduxjs/toolkit'
import { colors } from '../../lib/colors'

export type DesignState = {
  backgroundColor: string
  fontColor: string
}

export const INITIAL_DESIGN_STATE: DesignState = {
  backgroundColor: colors.default,
  fontColor: colors.white,
}

const designSlice = createSlice({
  name: 'design',
  initialState: INITIAL_DESIGN_STATE,
  reducers: {
    setDefault: (state) => {
      state.backgroundColor = INITIAL_DESIGN_STATE.backgroundColor
      state.fontColor = INITIAL_DESIGN_STATE.fontColor
    },
    setRed: (state) => {
      state.backgroundColor = colors.red
      state.fontColor = colors.white
    },
    setOrange: (state) => {
      state.backgroundColor = colors.orange
      state.fontColor = colors.black
    },
    setYellow: (state) => {
      state.backgroundColor = colors.yellow
      state.fontColor = colors.black
    },
    setGreen: (state) => {
      state.backgroundColor = colors.green
      state.fontColor = colors.white
    },
    setBlue: (state) => {
      state.backgroundColor = colors.blue
      state.fontColor = colors.black
    },
    setPurple: (state) => {
      state.backgroundColor = colors.purple
      state.fontColor = colors.white
    },
  },
})

export const {
  setDefault,
  setRed,
  setOrange,
  setYellow,
  setGreen,
  setBlue,
  setPurple,
} = designSlice.actions
export default designSlice.reducer
