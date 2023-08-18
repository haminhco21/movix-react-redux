import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  url: {},
  genres: {}
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration(state, action) {
        state.url = action.payload
        console.log(state.url)
    },
    getGenres(state, action) {
        state.url = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions

export const selectApi = (state) => state.home.url

export default homeSlice.reducer