import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "./Sidebar";
import Modal from "./Modal";
import NavHeader from "./NavHeader";
import { Img } from "../styles/global";

interface Props {
  homeProps: PropsType;
}

interface PropsType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: () => void;
  wordList: {
    id: number;
    text: string;
    selected: boolean;
  }[];
  setWordList: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; selected: boolean }[]>
  >;
}

const Header = ({ homeProps }: Props) => {
  const {
    isOpen,
    setIsOpen,
    setIsSearch,
    openModal,
    setOpenModal,
    isModalOpen,
    wordList,
    setWordList,
  } = homeProps;
  const [scrollY, setScrollY] = useState<number>(0);
  const [closed, setClosed] = useState<boolean>(true);
  const [countScrollY, setCountScrollY] = useState<number[]>([]);
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    if (scrollY === 0) {
      countScrollY.push(300);
    }

    setCountScrollY([...countScrollY]);

    if (countScrollY.length >= 3) {
      setClosed(false);
      setCountScrollY([]);
    }
  }, [scrollY]);

  const headerProps = {
    show,
    scrollY,
    setIsOpen,
    setClosed,
    isModalOpen,
    setIsSearch,
    search: false,
  };

  return (
    <HeaderContainer>
      <BannerContainer $closed={closed.toString()} $marginTop={340}>
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
            color: "black",
            opacity: closed ? 1 : 0,
            transition: "opacity .3s ease-in",
            cursor: "pointer",
          }}
        >
          브론치 작가 모두에게 수익의 기회가 열립니다. 응원하기 정식 오픈
        </div>
      </BannerContainer>
      <NavHeader headerprops={headerProps} />

      <SideBar
        isOpen={isOpen}
        wordList={wordList}
        setWordList={setWordList}
        width={260}
        setIsOpen={setIsOpen}
        isModalOpen={isModalOpen}
      />
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: auto;
  width: 100%;
`;

const BannerContainer = styled.div<{
  $closed: string;
  $marginTop: number;
}>`
  width: 100%;
  height: 400px;
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
