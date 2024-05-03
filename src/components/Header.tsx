import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "./Sidebar";
import Modal from "./Modal";
import NavHeader from "./NavHeader";
import { Img } from "../styles/global";
import { Link } from "react-router-dom";

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
  scrollY: number;
  setScrollY: React.Dispatch<React.SetStateAction<number>>;
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
    scrollY,
    setScrollY,
  } = homeProps;

  const [closed, setClosed] = useState<boolean>(true);
  const [countScrollY, setCountScrollY] = useState<number[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const updateScrollY = () => {
      if (closed === false && scrollY >= 715) {
        setScrollY(window.pageYOffset);
        setShow(true);
      } else if (scrollY >= 292 && closed) {
        setScrollY(window.pageYOffset);
        setShow(true);
      } else {
        setScrollY(window.pageYOffset);
        setShow(false);
      }
    };

    if (scrollY >= 800) {
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
      <BannerContainer $closed={closed.toString()} $marginTop={420}>
        <ImgContainer>
          <ImgItem>
            <Link
              style={{
                backgroundImage:
                  "url(https://t1.daumcdn.net/brunch/op/a4ff48595d8e48cbba5a4086542f88b3.png)",
              }}
              className="custom-link"
              to={"#"}
            >
              <Img
                className="custom-img"
                src="https://t1.daumcdn.net/brunch/op/0c8e5941f7e145bba3e16a70db29a064.png"
                alt="사진"
              />
            </Link>
            <Link
              style={{
                backgroundImage:
                  "url(https://t1.daumcdn.net/brunch/op/010273fe05c840298af803622ab5d5f3.png)",
                opacity: closed ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
              className="custom-link-2"
              to={"#"}
            >
              <Img
                className="custom-img-2"
                src="https://t1.daumcdn.net/brunch/op/31f5292636424bd399a728ff7a3d47d6.png"
                alt="사진"
              />
            </Link>
          </ImgItem>

          <CancelBtn
            onClick={() => {
              setClosed(true);
            }}
          >
            X
          </CancelBtn>
        </ImgContainer>
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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 480px;
  background-size: cover;
  margin-top: ${(props) =>
    props.$closed === "true" ? `-${props.$marginTop}px` : "0px"};
  transition: margin 0.5s ease-in-out;
`;

const ImgContainer = styled.ul`
  overflow: hidden;
  width: 100%;
  height: 480px;
`;

const ImgItem = styled.li`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  display: block;
  overflow: hidden;
  width: 100%;
  transform: none;
  transition: transform 0.5s ease-in-out;

  .custom-link {
    height: 480px;
    background-size: cover;
    display: block;
    width: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    text-align: center;
  }

  .custom-img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 960px;
    margin: -240px 0 0 -480px;
  }

  .custom-link-2 {
    position: absolute;
    bottom: 0;
    height: 60px;
    display: block;
    width: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    text-align: center;
  }

  .custom-img-2 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 960px;
    margin: -30px 0 0 -480px;
  }
`;

const CancelBtn = styled.button`
  position: absolute;
  top: 45%;
  right: 10%;
  cursor: pointer;
  background-color: transparent;
  color: #fff;
  border: none;
  font-size: 3.65rem;
  font-weight: 10;
  z-index: 3;
`;
