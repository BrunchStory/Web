import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon
          size={"2x"}
          icon={faBars as IconProp}
          style={{ marginRight: "14px" }}
          onClick={() => {
            setIsOpen(true);
            setClosed?.(true);
          }}
        />

        <Logo to={"/"}>
          brunch <span>story</span>
        </Logo>
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
            <FontAwesomeIcon
              size={"1x"}
              icon={faMagnifyingGlass as IconProp}
              style={{ marginLeft: "14px" }}
              onClick={() => setIsSearch(true)}
            />
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

const Logo = styled(Link)`
  color: black;
  font-size: 28px;
  color: #333;

  span {
    text-decoration: overline;
  }
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
