import React from "react";
import styled from "styled-components";
import SlideMenu from "./SlideMenu";
import SideBar from "./Sidebar";

interface Props {
  searchProps: PropsType;
}

interface PropsType {
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: () => void;
  isOpen: boolean;
  wordList: {
    id: number;
    text: string;
    selected: boolean;
  }[];
  setWordList: React.Dispatch<
    React.SetStateAction<{ id: number; text: string; selected: boolean }[]>
  >;
}

const Search = ({ searchProps }: Props) => {
  const { setIsSearch, setIsOpen, isModalOpen, isOpen, wordList, setWordList } =
    searchProps;
  return (
    <SearchContainer>
      <SlideMenu
        headerprops={{
          show: false,
          scrollY: 0,
          search: true,
          setIsSearch,
          setIsOpen,
          isModalOpen,
        }}
      />
      <SideBar
        isOpen={isOpen}
        wordList={wordList}
        setWordList={setWordList}
        width={260}
        setIsOpen={setIsOpen}
        isModalOpen={isModalOpen}
      />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 90;
  background-color: #fff;
  top: 0;
  left: 0;
`;
