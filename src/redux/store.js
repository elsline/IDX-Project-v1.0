import { configureStore } from "@reduxjs/toolkit";
import terminalSlice from "./terminalSlice";

export const store = configureStore({
  reducer: {
    terminalData: terminalSlice,
  },
});
