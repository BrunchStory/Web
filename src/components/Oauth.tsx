import React, { useEffect } from "react";

const Oauth = () => {
  const code = new URL(document.location.toString()).searchParams.get("code");

  useEffect(() => {
    console.log(code);
    // 백엔드에 code(인가 코드) 넘기기
  }, [code]);
  return <div>Oauth</div>;
};

export default Oauth;
