import React, { useState } from "react";
import WeekdayList from "../components/WeekdayList";
import InfinitePagination from "../components/InfinitePagination";
import Header from "../components/Header";
import EditorPick from "../components/EditorPick";
import Footer from "../components/Footer";
import Keyword from "../components/Keyword";
import { Button, Img, WhiteSpace } from "../styles/global";
import Writers from "../components/Writers";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import styled from "styled-components";

const Home = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [scrollY, setScrollY] = useState<number>(0);
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

  const isModalOpen = () => {
    setOpenModal(true);
  };

  const homeProps = {
    isOpen,
    wordList,
    openModal,
    scrollY,
    setIsSearch,
    setIsOpen,
    isModalOpen,
    setWordList,
    setOpenModal,
    setScrollY,
  };

  const searchProps = {
    isOpen,
    wordList,
    setIsSearch,
    setIsOpen,
    isModalOpen,
    setWordList,
  };

  return (
    <div
      style={{
        overflow: "hidden",
        height: isSearch ? "100vh" : "auto",
        position: "relative",
      }}
    >
      <Header homeProps={homeProps} />
      <EditorPick />
      <Keyword />
      <WhiteSpace height={147} />
      <WeekdayList />
      <WhiteSpace height={150} />
      <Writers />
      <WhiteSpace height={150} />
      <Link
        to="#"
        style={{
          width: "100%",
          border: "1px solid red",
        }}
      >
        <Img
          width={960}
          height={200}
          style={{ margin: "97px auto 0", display: "block" }}
          src={"https://t1.daumcdn.net/brunch/static/test/new_pc_top/5.png"}
        />
      </Link>
      <WhiteSpace height={152} />
      <InfinitePagination />
      <FixBtn
        onClick={() => {
          window.scrollTo(0, 0);
          setScrollY(0);
        }}
        $scrolly={scrollY}
        radius={16}
        width={60}
        height={31}
      />
      <Footer />
      {isSearch && <Search searchProps={searchProps} />}
    </div>
  );
};

export default Home;

const FixBtn = styled(Button)<{ $scrolly: number }>`
  position: ${(props) => (props.$scrolly >= 4498 ? "absolute" : "fixed")};

  right: 40px;
  bottom: ${(props) => (props.$scrolly >= 4498 ? "457px" : "40px")};
  z-index: 100;
  background-color: red;
  transition: opacity 0.55s ease-in;
  background: url(//t1.daumcdn.net/brunch/static/img/help/pc/view_discover_150824.png)
    no-repeat;
  background-position: 0 -90px;
  opacity: ${(props) => (props.$scrolly >= 2632 ? 1 : 0)};

  &:hover {
    background-position: -90px -90px;
  }
`;
