import { createSlice } from "@reduxjs/toolkit";

interface InitialSate {
  isOpen: boolean;
  openModal: boolean;
}

const initialState: InitialSate = {
  isOpen: false,
  openModal: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.isOpen = action.payload;
    },
    modal: (state, action) => {
      state.openModal = action.payload;
    },
  },
});

export const { toggle, modal } = sidebarSlice.actions;
export default sidebarSlice.reducer;
