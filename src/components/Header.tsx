import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SideBar from "./Sidebar";
import { Img } from "../styles/global";

interface Props {
  bannerHeight: number;
}

const Header = ({ bannerHeight }: Props) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [closed, setClosed] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const marginTop = offsetValue(bannerHeight);

  useEffect(() => {
    const updateScrollY = () => {
      if (scrollY >= 700) {
        setScrollY(window.pageYOffset);
        setShow(true);
      } else {
        setScrollY(window.pageYOffset);
        setShow(false);
      }
    };

    if (scrollY >= 500) {
      setClosed(true);
    }

    window.addEventListener("scroll", updateScrollY);

    return () => window.removeEventListener("scroll", updateScrollY);
  }, [scrollY]);

  return (
    <HeaderContainer>
      <BannerContainer
        $closed={closed.toString()}
        $bannerheight={bannerHeight}
        $marginTop={marginTop}
      >
        <Img
          src="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
          alt="사진"
        />
        <CancelBtn
          onClick={() => {
            setClosed(true);
          }}
        >
          X
        </CancelBtn>
        <div
          style={{
            position: "absolute",
            bottom: 15,
            left: "35%",
            color: "white",
            opacity: closed ? 1 : 0,
            transition: "opacity .3s ease-in",
            cursor: "pointer",
          }}
        >
          브론치 작가 모두에게 수익의 기회가 열립니다. 응원하기 정식 오픈
        </div>
      </BannerContainer>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMenu $show={show.toString()} $scrolly={scrollY}>
        <MenuContainer>
          <FontAwesomeIcon
            size={"2x"}
            icon={faBars as IconProp}
            style={{ marginRight: "14px" }}
            onClick={() => setIsOpen(true)}
          />

          <Logo to={"/"}>
            brunch <span>story</span>
          </Logo>
        </MenuContainer>
        <MenuContainer>
          <StartBtn>시작하기</StartBtn>
          <FontAwesomeIcon
            size={"1x"}
            icon={faMagnifyingGlass as IconProp}
            style={{ marginLeft: "14px" }}
          />
        </MenuContainer>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 10000px;
`;

const BannerContainer = styled.div<{
  $closed: string;
  $bannerheight: number;
  $marginTop: number;
}>`
  width: 100%;
  height: ${(props) => `${props.$bannerheight}px`};
  overflow: hidden;
  position: relative;
  margin-top: ${(props) =>
    props.$closed === "true" ? `-${props.$marginTop}px` : "0px"};
  transition: margin 0.5s ease-in-out;
`;

const CancelBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10%;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 3.65rem;
  font-weight: 10;
`;

const NavMenu = styled.div<{ $show: string; $scrolly: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (props.$show === "true" ? "fixed" : "static")};
  width: 1425px;
  height: 60px;
  z-index: 10;
  background: hsla(0, 0%, 100%, 0.9);
  padding: 0 30px;
  box-sizing: border-box;
  opacity: ${(props) =>
    props.$show === "true" ? 1 : props.$scrolly < 424 ? 1 : 0};
  top: 0;
  transition: opacity 0.3s ease-in 0s;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 28px;
  color: #333;

  span {
    text-decoration: overline;
  }
`;

const StartBtn = styled.div`
  border: 1px solid #959595;
  border-radius: 16px;
  color: #666;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  width: 64px;
  cursor: pointer;
`;

Header.defaultProps = {
  bannerHeight: 400,
};

const offsetValue = (number: number) => {
  let a = 1;
  while (number - a !== 60) {
    a++;
  }

  return a;
};
