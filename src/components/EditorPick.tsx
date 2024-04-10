import React, { useState } from "react";
import styled from "styled-components";

const EditorPick = () => {
  const [slidePosition, setSlidPosition] = useState(0);
  const handleButtonClick = (x: number) => {
    setSlidPosition(x);
  };

  return (
    <div style={{ marginTop: "22px" }}>
      <WrapSlide
        style={{
          transform: `translateX(${slidePosition}px)`,
          transition: "-webkit-transform 0.3s ease 0s ",
        }}
      >
        <li>
          <div
            style={{ width: "480px", height: "520px", background: "#ff9be9" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#ffc2a4" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#0c3c8e" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#0b8c87" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#06df8e" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#687200" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#ffb5ae" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#fffbb4" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#0fffc1" }}
          ></div>
        </li>
        <li>
          <div
            style={{ width: "960px", height: "520px", background: "#f9fd51" }}
          ></div>
        </li>
      </WrapSlide>

      <button onClick={() => handleButtonClick(0)}>버튼1</button>
      <button onClick={() => handleButtonClick(-480)}>버튼2</button>
      <button onClick={() => handleButtonClick(-1440)}>버튼3</button>
      <button onClick={() => handleButtonClick(-2400)}>버튼4</button>
      <button onClick={() => handleButtonClick(-3360)}>버튼5</button>
      <button onClick={() => handleButtonClick(-4320)}>버튼6</button>
      <button onClick={() => handleButtonClick(-5280)}>버튼7</button>
      <button onClick={() => handleButtonClick(-6240)}>버튼8</button>
      <button onClick={() => handleButtonClick(-7200)}>버튼9</button>
      <button onClick={() => handleButtonClick(-8160)}>버튼10</button>
    </div>
  );
};

export default EditorPick;

const DefaultUl = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;

  overflow: visible;
`;

const WrapSlide = styled(DefaultUl)`
  width: 960px;
  height: 520px;

  margin: 0 auto;

  display: flex;

  background-color: #d9d9d9;
`;
