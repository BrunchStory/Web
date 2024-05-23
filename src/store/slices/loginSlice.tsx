import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILoginState {
  isLogin: boolean;
}
const initialState: ILoginState = {
  isLogin: false,
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, { payload }: PayloadAction<boolean>) => {
      state.isLogin = payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
