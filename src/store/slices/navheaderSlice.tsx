import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  show: boolean;
}

const initialState: InitialState = {
  show: false,
};

export const navheader = createSlice({
  name: "navheader",
  initialState,
  reducers: {
    checkY: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const { checkY } = navheader.actions;
export default navheader.reducer;
