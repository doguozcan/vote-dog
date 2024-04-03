import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const apiKey = import.meta.env.VITE_API_KEY
export const fetchDog = createAsyncThunk('dog/fetchDog', async () => {
  const response = await fetch(
    'https://api.thedogapi.com/v1/images/search?has_breeds=1',
    {
      headers: {
        'x-api-key': apiKey,
      },
    }
  )
  return await response.json()
})

export const dogSlice = createSlice({
  name: 'dog',
  initialState: {
    status: 'idle',
    name: '',
    weight: '',
    height: '',
    breed_for: '',
    imageUrl: '',
    likes: 0,
    dislikes: 0,
  },
  reducers: {
    incrementLikes(state) {
      state.likes += 1
    },
    incrementDislikes(state) {
      state.dislikes += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDog.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDog.fulfilled, (state, action) => {
        state.status = 'success'
        const dog = action.payload[0]
        state.name = dog.breeds[0]?.name
        state.weight = dog.breeds[0]?.weight.metric
        state.height = dog.breeds[0]?.height.metric
        state.breed_for = dog.breeds[0]?.bred_for
        state.imageUrl = dog.url
      })
      .addCase(fetchDog.rejected, (state, action) => {
        state.status = 'fail'
      })
  },
})

export default dogSlice.reducer

export const { incrementLikes, incrementDislikes } = dogSlice.actions
