import { configureStore } from '@reduxjs/toolkit'
import dogReducer from '../features/dog/dogSlice'

export default configureStore({
  reducer: {
    dog: dogReducer,
  },
})
