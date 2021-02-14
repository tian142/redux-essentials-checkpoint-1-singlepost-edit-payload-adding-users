const { createSlice } = require('@reduxjs/toolkit')

const initialState = [
  { id: '0', name: 'Bread' },
  { id: '1', name: 'Bun' },
  { id: '2', name: 'Butter' },
  { id: '3', name: 'Butt' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
