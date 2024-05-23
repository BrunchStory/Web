import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/redux";
import { setLogin } from "../store/slices/loginSlice";

const Oauth = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");
  const login = useTypedSelector((state) => state.login);
  const dispatch = useTypedDispatch();

  useEffect(() => {
    console.log(code);
    // 백엔드에 code(인가 코드) 넘기기

    // 성공하면 isLogin
    dispatch(setLogin(true));
  }, [code, dispatch]);

  console.log("렌더링!");
  return (
    <div>
      <div>Login Status: {login.isLogin ? "Logged In" : "Not Logged In"}</div>
    </div>
  );
};

export default Oauth;
