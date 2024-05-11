/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const terminalSlice = createSlice({
  initialState: {
    value: {},
  },
  name: "terminalSlice",
  reducers: {
    setTerminalData: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const setTerminalData = (state) => state.terminal.value;

export default terminalSlice.reducer;
