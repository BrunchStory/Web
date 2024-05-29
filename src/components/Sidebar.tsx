import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { Button, Img } from "../styles/global";
import { useCheckSize } from "../hooks/useCheckSize";
import { Link } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../hooks/redux";
import { modal, toggle } from "../store/slices/sidebarSlice";

// width값이 string일 경우 % number일 경우 px로 정하기

const SideBar = () => {
  const outside = useRef<any>();
  const { isLaptop } = useCheckSize();
  const [wordList, setWordList] = useState([
    {
      id: 0,
      text: "브런치스토리 홈",
      selected: true,
    },
    {
      id: 1,
      text: "브런치스토리 나우",
      selected: false,
    },
    {
      id: 2,
      text: "브런치스토리 책방",
      selected: false,
    },
  ]);
  const dispatch = useTypedDispatch();
  const { isOpen } = useTypedSelector((state) => state.sidebar);

  const onClick = (idx: number) => {
    const newWordList = wordList.map((v) =>
      v.id === idx ? { ...v, selected: true } : { ...v, selected: false }
    );

    setWordList(newWordList);
  };

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (!outside.current.contains(e.target)) {
        dispatch(toggle(false));
      }
    };

    window.addEventListener("mousedown", onClickOutside);

    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [dispatch]);

  return (
    <SdieBarContainer $isOpen={isOpen} ref={outside}>
      <Profile>
        <LogoService />
        <p>
          You can make anything
          <br />
          by writing
        </p>
        <p>C.S.Lewis</p>
        <Button
          width={151}
          height={32}
          style={{
            color: "#00c6be",
            border: "1px solid #00c6be",
            margin: "22px auto 0",
          }}
          radius={16}
          onClick={() => dispatch(modal(true))}
        >
          브런치스토리 시작하기
        </Button>
      </Profile>
      <ServiceMenu $isLaptop={isLaptop}>
        <ul>
          {wordList.map((v, idx) => (
            <MenuWord
              onClick={() => onClick(idx)}
              selected={v.selected}
              key={idx}
            >
              <Link to="#">{v.text}</Link>
            </MenuWord>
          ))}
        </ul>
        <SideSetting $isLaptop={isLaptop}>
          <MenuSideBanner>
            <Img
              src={
                "https://i1.daumcdn.net/thumb/R336x0/?fname=http://t1.daumcdn.net/brunch/static/img/help/pc/top/side_banner_20221221.png"
              }
              width={168}
              height={72}
            />
          </MenuSideBanner>
          <Link
            to={"#"}
            style={{ color: "#959595", textDecoration: "underline" }}
          >
            계정을 잊어버리셨나요?
          </Link>
        </SideSetting>
      </ServiceMenu>
    </SdieBarContainer>
  );
};

export default SideBar;

const SdieBarContainer = styled.div<{
  $isOpen: boolean;
}>`
  z-index: 10000;
  background-color: #fff;
  border-right: 1px solid #ddd;
  height: 100%;
  width: 260px;
  max-width: 300px;
  left: ${(props) => (props.$isOpen ? 0 : "-55%")};
  top: 0;
  position: fixed;
  transition: ${(props) => (props.$isOpen ? "0.8s ease" : "0.8s ease-in")};
`;

const Profile = styled.div`
  width: 100%;
  height: 251px;
  background-color: #f8f8f8;
  color: #333;
  font-size: 14px;
  text-align: center;
  border: 1px solid #ddd;
  border-right: none;

  p {
    color: #666;
    font-size: 13px;
    font-style: italic;
  }

  p:last-of-type {
    margin-top: 5px;
    font-size: 9px;
  }
`;

const LogoService = styled.div`
  background-image: url(//t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v9_230901.png);
  background-position: -351px 0;
  height: 48px;
  margin: 40px auto 12px;
  width: 49px;
`;

const ServiceMenu = styled.div<{ $isLaptop: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isLaptop ? "498px" : "427px")};
  overflow-y: auto;
  padding-top: 28px;
  color: #333;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
`;
const MenuWord = styled.li<{ selected: boolean }>`
  width: 240px;
  height: 38px;
  font-size: 14px;
  margin: 0 10px;
  padding: 12.5px 0;

  a {
    display: block;
    position: relative;
    width: 240px;
    height: 13px;
  }

  ${(props) =>
    props.selected &&
    css`
      a {
        color: #00c6be;
      }
      a::after {
        content: " -";
        color: #00c6be;
      }
      a::before {
        content: "- ";
        color: #00c6be;
      }
    `}
  a:hover {
    color: #00c6be;
  }
  a:hover::after {
    content: " -";
    color: #00c6be;
  }
  a:hover::before {
    content: "- ";
    color: #00c6be;
  }
`;

const SideSetting = styled.div<{ $isLaptop: boolean }>`
  position: ${(props) => (props.$isLaptop ? "inherit" : "absolute")};
  bottom: 0;
  width: 100%;
  height: 139px;
  margin: 40px 0 37px;
`;

const MenuSideBanner = styled.div`
  width: 100%;
  height: 118px;
  padding-bottom: 40px;
`;
