import React, { useState } from "react";
import styled from "styled-components";

import { LeftButton, RightButton } from "./ScrollButton";

interface PageNumProps {
  $posX: string;
  $posY: string;
  $height: string;
}

const EditorPick = () => {
  const [slidePosition, setSlidPosition] = useState(0); // x좌표로 얼마만큼 이동했는지
  const [activePage, setActivePage] = useState(1); // 현재 활성화된 페이지번호(1~10)

  const handleNumberButtonClick = (x: number, pageNum: number) => {
    setSlidPosition(x);
    setActivePage(pageNum);
  };

  const handleScrollButtonClick = (isLeftButton: boolean) => {
    console.log(activePage);

    if (isLeftButton) {
      setSlidPosition((prev) => (prev += activePage === 2 ? 480 : +960));
      setActivePage((prev) => prev - 1);
    } else {
      setSlidPosition((prev) => (prev -= activePage === 1 ? 480 : 960));
      setActivePage((prev) => prev + 1);
    }
  };

  return (
    <div style={{ marginTop: "22px", overflow: "hidden" }}>
      <div style={{ position: "relative" }}>
        {/* 스크롤 버튼이 2 <= activePage <= 9 일 때만 화면에 표시 */}
        {activePage >= 2 && (
          <div onClick={() => handleScrollButtonClick(true)}>
            <LeftButton $left="30px" $top="50%" />
          </div>
        )}
        {activePage <= 9 && (
          <div onClick={(e) => handleScrollButtonClick(false)}>
            <RightButton $right="30px" $top="50%" />
          </div>
        )}

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
      </div>

      <div style={{ margin: "22px auto 0px", width: "fit-content" }}>
        <PageButton onClick={() => handleNumberButtonClick(0, 1)}>
          <PageNum
            $posX="0"
            $posY={activePage === 1 ? "-10" : "0"}
            $height={activePage === 1 ? "12" : "9"}
          >
            1
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleNumberButtonClick(-480, 2)}>
          <PageNum
            $posX="-20"
            $posY={activePage === 2 ? "-10" : "0"}
            $height={activePage === 2 ? "12" : "9"}
          >
            2
          </PageNum>
        </PageButton>
        {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <PageButton
            key={num}
            onClick={() =>
              handleNumberButtonClick(-480 + -960 * (num - 2), num)
            }
          >
            <PageNum
              $posX={`${-20 * (num - 1)}`}
              $posY={activePage === num ? "-10" : "0"}
              $height={activePage === num ? "12" : "9"}
            >
              {num}
            </PageNum>
          </PageButton>
        ))}
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
