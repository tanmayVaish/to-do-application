import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  list: []
}

const Slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.list.push(action.payload);
    }
  }
})

export const {saveTodo} = Slice.actions
export default Slice.reducer