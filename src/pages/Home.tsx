import React, { useState } from "react";
import WeekdayList from "../components/WeekdayList";
import InfinitePagination from "../components/InfinitePagination";
import Header from "../components/Header";
import EditorPick from "../components/EditorPick";
import Footer from "../components/Footer";
import Keyword from "../components/Keyword";
import { Img, WhiteSpace } from "../styles/global";
import Writers from "../components/Writers";
import { Link } from "react-router-dom";
import Search from "../components/Search";

const Home = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
    setIsSearch,
    setIsOpen,
    isModalOpen,
    setWordList,
    setOpenModal,
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
      }}
    >
      <Header homeProps={homeProps} />
      <WhiteSpace height={22} />
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
      <Footer />
      {isSearch && <Search searchProps={searchProps} />}
    </div>
  );
};

export default Home;
