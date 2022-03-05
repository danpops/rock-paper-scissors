import { createSlice } from '@reduxjs/toolkit'
import { ButtonColor, colors } from '../../lib/colors'

export type DesignState = {
  backgroundColor: string
  button: {
    color: string
    background: string
  }
  fontColor: string
}

export const INITIAL_DESIGN_STATE: DesignState = {
  backgroundColor: colors.default,
  fontColor: colors.white,
  button: {
    color: colors.black,
    background: colors.white,
  },
}

const designSlice = createSlice({
  name: 'design',
  initialState: INITIAL_DESIGN_STATE,
  reducers: {
    setDefault: (state) => {
      state.backgroundColor = INITIAL_DESIGN_STATE.backgroundColor
      state.fontColor = INITIAL_DESIGN_STATE.fontColor
      state.button = INITIAL_DESIGN_STATE.button
    },
    setRed: (state) => {
      state.backgroundColor = colors.red
      state.fontColor = colors.white
      state.button = ButtonColor.RED
    },
    setOrange: (state) => {
      state.backgroundColor = colors.orange
      state.fontColor = colors.white
      state.button = ButtonColor.ORANGE
    },
    setYellow: (state) => {
      state.backgroundColor = colors.yellow
      state.fontColor = colors.black
      state.button = ButtonColor.YELLOW
    },
    setGreen: (state) => {
      state.backgroundColor = colors.green
      state.fontColor = colors.white
      state.button = ButtonColor.GREEN
    },
    setBlue: (state) => {
      state.backgroundColor = colors.blue
      state.fontColor = colors.black
      state.button = ButtonColor.BLUE
    },
    setPurple: (state) => {
      state.backgroundColor = colors.purple
      state.fontColor = colors.white
      state.button = ButtonColor.PURPLE
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
