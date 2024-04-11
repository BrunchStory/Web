import React, { useState } from "react";
import styled from "styled-components";

interface PageNumProps {
  $posX: string;
  $posY: string;
  $height: string;
}

interface ButtonClickState {
  [key: number]: boolean;
}
const EditorPick = () => {
  const [slidePosition, setSlidPosition] = useState(0);
  const [isButtonClicked, setButtonClick] = useState<ButtonClickState>({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const handleButtonClick = (x: number, pageNum: number) => {
    setSlidPosition(x);
    setButtonClick({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      [pageNum]: true,
    });
  };

  return (
    <div style={{ marginTop: "22px", overflow: "hidden" }}>
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

      <div style={{ margin: "22px auto 0px", width: "fit-content" }}>
        <PageButton onClick={() => handleButtonClick(0, 1)}>
          <PageNum
            $posX="0"
            $posY={isButtonClicked[1] ? "-10" : "0"}
            $height={isButtonClicked[1] ? "12" : "9"}
          >
            1
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-480, 2)}>
          <PageNum
            $posX="-20"
            $posY={isButtonClicked[2] ? "-10" : "0"}
            $height={isButtonClicked[2] ? "12" : "9"}
          >
            2
          </PageNum>
        </PageButton>
        {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <PageButton
            key={num}
            onClick={() => handleButtonClick(-480 + -960 * (num - 2), num)}
          >
            <PageNum
              $posX={`${-20 * (num - 1)}`}
              $posY={isButtonClicked[num] ? "-10" : "0"}
              $height={isButtonClicked[num] ? "12" : "9"}
            >
              {num}
            </PageNum>
          </PageButton>
        ))}

        {/* <PageButton onClick={() => handleButtonClick(0)}>
          <PageNum $posX="0" $posY="0">
            1
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-480)}>
          <PageNum $posX="-20" $posY="0">
            2
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-1440)}>
          <PageNum $posX="-40" $posY="0">
            3
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-2400)}>
          <PageNum $posX="-60" $posY="0">
            4
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-3360)}>
          <PageNum $posX="-80" $posY="0">
            5
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-4320)}>
          <PageNum $posX="-100" $posY="0">
            6
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-5280)}>
          <PageNum $posX="-120" $posY="0">
            7
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-6240)}>
          <PageNum $posX="-140" $posY="0">
            8
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-7200)}>
          <PageNum $posX="-160" $posY="0">
            9
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleButtonClick(-8160)}>
          <PageNum $posX="-180" $posY="0">
            10
          </PageNum>
        </PageButton> */}
      </div>
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

const PageButton = styled.button`
  color: #333;

  padding: 0 11px;

  height: 31px;

  background-color: #fff;
  border: none;

  cursor: pointer;
`;

const PageNum = styled.span<PageNumProps>`
  text-indent: -9999px;
  width: 13px;
  height: ${(props) => props.$height}px;

  background: url("https://t1.daumcdn.net/brunch/static/img/help/pc/top/img_paging.v2.png")
    no-repeat;
  background-position: ${(props) => props.$posX}px ${(props) => props.$posY}px;

  display: block;
`;
