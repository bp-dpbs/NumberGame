import { configureStore } from '@reduxjs/toolkit'
import numberPanelReducer from '../features/numberPanel/numberPanelSlice';

export const store = configureStore({
  reducer: {
      numberPanel: numberPanelReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch