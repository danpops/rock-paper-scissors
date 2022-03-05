import { configureStore } from '@reduxjs/toolkit'
import designReducer from './slices/design.reducer'
import gameReducer from './slices/game.reducer'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    design: designReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
