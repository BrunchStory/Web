import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../styles/global";

interface PropsType {
  show: boolean | string;
  scrollY: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setClosed?: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: () => void;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  search: boolean;
}

interface Props {
  headerprops: PropsType;
}

const NavHeader = ({ headerprops }: Props) => {
  const {
    show,
    scrollY,
    setIsOpen,
    setClosed,
    isModalOpen,
    setIsSearch,
    search,
  } = headerprops;
  return (
    <NavMenu $show={show?.toString()} $scrolly={scrollY}>
      <MenuContainer>
        <MenuBtn
          width={27}
          height={20}
          onClick={() => {
            setIsOpen(true);
            setClosed?.(true);
          }}
        >
          메뉴
        </MenuBtn>

        <h3>
          <Logo to={"/"}>brunch</Logo>
        </h3>
      </MenuContainer>
      <MenuContainer>
        {search ? (
          <div style={{ cursor: "pointer" }} onClick={() => setIsSearch(false)}>
            X
          </div>
        ) : (
          <>
            <StartBtn width={66} height={30} onClick={isModalOpen}>
              시작하기
            </StartBtn>
            <SearchBtn width={22} height={22} onClick={() => setIsSearch(true)}>
              검색
            </SearchBtn>
          </>
        )}
      </MenuContainer>
    </NavMenu>
  );
};

export default NavHeader;

const NavMenu = styled.div<{ $show: string; $scrolly: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${(props) => (props.$show === "true" ? "fixed" : "static")};
  width: 100%;
  height: 60px;
  z-index: 10;
  background: hsla(0, 0%, 100%, 0.9);
  padding: 0 30px;
  opacity: ${(props) =>
    props.$show === "true" ? 1 : props.$scrolly < 424 ? 1 : 0};
  top: 0;
  transition: opacity 0.3s ease;
  border-bottom: ${(props) =>
    props.$show === "true" ? "1px solid #ddd" : "none"};
  float: left;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MenuBtn = styled(Button)`
  background-image: url(//t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4_rtn_230130.png);
  background-size: 240px 300px;
  margin-right: 14px;
  text-indent: -9999px;
`;

const Logo = styled(Link)`
  background-image: url(//t1.daumcdn.net/brunch9/static/images/pcrtn/logo_brunch_v1_221221.png);
  background-size: 240px 160px;
  width: 120px;
  background-position: 0 -80px;
  display: block;
  height: 22px;
  margin-top: -1px;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
`;

const StartBtn = styled(Button)`
  border: 1px solid #959595;
  border-radius: 16px;
  color: #666;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  margin-top: -5px;
`;

const SearchBtn = styled(Button)`
  margin: 0 0 0 16px;
  background-position: -30px 0;
  display: inline-block;
  background-image: url(//t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4_rtn_230130.png);
  background-size: 240px 300px;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
`;
