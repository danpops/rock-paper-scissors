import { createSlice } from '@reduxjs/toolkit'
import { colors } from '../../lib/colors'
import { getRandomColor } from '../../utils/getRandomColor'

export type DesignState = {
  backgroundColor: string
  fontColor: string
  capsActive: boolean
  glowColor: string
}

export const INITIAL_DESIGN_STATE: DesignState = {
  backgroundColor: colors.default,
  fontColor: colors.white,
  capsActive: false,
  glowColor: colors.white,
}

const designSlice = createSlice({
  name: 'design',
  initialState: INITIAL_DESIGN_STATE,
  reducers: {
    toggleCaps: (state) => {
      state.capsActive = !state.capsActive
    },
    setDefault: (state) => {
      state.backgroundColor = INITIAL_DESIGN_STATE.backgroundColor
      state.fontColor = INITIAL_DESIGN_STATE.fontColor
      state.glowColor = INITIAL_DESIGN_STATE.glowColor
    },
    setRandom: (state) => {
      state.backgroundColor = getRandomColor()
      state.fontColor = getRandomColor()
      state.glowColor = getRandomColor()
    },
    setRed: (state) => {
      state.backgroundColor = colors.red
      state.fontColor = colors.white
      state.glowColor = colors.white
    },
    setOrange: (state) => {
      state.backgroundColor = colors.orange
      state.fontColor = colors.black
      state.glowColor = colors.black
    },
    setYellow: (state) => {
      state.backgroundColor = colors.yellow
      state.fontColor = colors.black
      state.glowColor = colors.black
    },
    setGreen: (state) => {
      state.backgroundColor = colors.green
      state.fontColor = colors.white
      state.glowColor = colors.black
    },
    setBlue: (state) => {
      state.backgroundColor = colors.blue
      state.fontColor = colors.black
      state.glowColor = colors.black
    },
    setPurple: (state) => {
      state.backgroundColor = colors.purple
      state.fontColor = colors.white
      state.glowColor = colors.white
    },
  },
})

export const {
  toggleCaps,
  setDefault,
  setRandom,
  setRed,
  setOrange,
  setYellow,
  setGreen,
  setBlue,
  setPurple,
} = designSlice.actions
export default designSlice.reducer
