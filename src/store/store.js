import { configureStore } from '@reduxjs/toolkit'
import { newSlice } from './slices/news'

export const store = configureStore({
  reducer: {
    news: newSlice.reducer,
  },
})