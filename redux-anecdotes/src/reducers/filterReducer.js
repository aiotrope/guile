import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    createSearch: {
      reducer: (state, action) => {
        //console.log('ACTION', action)
        return action.payload
      },
      prepare: (search) => {
        return { payload: search }
      },
    },
  },
})

export const selectFilter = (state) => state.filter

export const { createSearch } = filterSlice.actions

export default filterSlice.reducer
