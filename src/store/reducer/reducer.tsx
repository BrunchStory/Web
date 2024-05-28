import loginSlice from "../slices/loginSlice";
import sidebarSlice from "../slices/sidebarSlice";
import navheaderSlice from "../slices/navheaderSlice";

const reducer = {
  login: loginSlice,
  sidebar: sidebarSlice,
  navheader: navheaderSlice,
};

export default reducer;
