import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.counter += payload;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
