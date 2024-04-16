import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import NavHeader from "./NavHeader";
import SideBar from "./Sidebar";
import { Button, Img } from "../styles/global";
import { Link } from "react-router-dom";

const animation_up = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
}
100% {
    opacity: 1;
    transform: translate(0);
}
`;

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

const RANDOM_TEXT = ["글쓰기", "사진", "자기계발"];

const FAKE_DATA: Data = {
  list: {
    사진: [
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "사진",
        text: "dsmakjdnskadnksadadsmakjdnskadnksadadsmakjdnskadnksadadsmakjdnskadnksadadsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "사진",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "사진",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "사진",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
        name: "사진",
        text: "dsmakjdnskadnksada",
      },
    ],
    글쓰기: [
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
        name: "글쓰기",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
        name: "글쓰기",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
        name: "글쓰기",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
        name: "글쓰기",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg",
        name: "글쓰기",
        text: "dsmakjdnskadnksada",
      },
    ],
    자기계발: [
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg",
        name: "자기계발",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg",
        name: "자기계발",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg",
        name: "자기계발",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg",
        name: "자기계발",
        text: "dsmakjdnskadnksada",
      },
      {
        profileImg:
          "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_640.jpg",
        name: "자기계발",
        text: "dsmakjdnskadnksada",
      },
    ],
  },
};

interface Item {
  [key: string]: { profileImg?: string; name: string; text: string }[];
}

interface Data {
  list: Item;
}

const Search = ({ searchProps }: Props) => {
  const { setIsSearch, setIsOpen, isModalOpen, isOpen, wordList, setWordList } =
    searchProps;
  const [searchText, setSearchText] = useState("");

  const random = Math.trunc(Math.random() * RANDOM_TEXT.length);

  // console.log(FAKE_DATA.list[RANDOM_TEXT[random]]);

  return (
    <SearchContainer>
      <NavHeader
        headerprops={{
          show: false,
          scrollY: 0,
          search: true,
          setIsSearch,
          setIsOpen,
          isModalOpen,
        }}
      />
      <BoxSuggest>
        <Input
          type="text"
          placeholder="검색어를 입력해주세요."
          maxLength={20}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText.length === 0 ? (
          <SuggestGuide>
            <TextContainer>
              <p>
                나를 키우는 힘, 작가들의{" "}
                <b style={{ color: "#00c6be", fontWeight: "normal" }}>
                  자기계발
                </b>{" "}
                이야기
              </p>
              <SuggestBtn radius={24}>에세이스트</SuggestBtn>
              <SuggestBtn radius={24}>에디터</SuggestBtn>
              <SuggestBtn radius={24}>코치</SuggestBtn>
            </TextContainer>
            <ProfileContainer>
              <ProfileList>
                {FAKE_DATA.list[RANDOM_TEXT[random]].map((v, idx) => (
                  <ProfileItem key={idx}>
                    <Link to={"#"}>
                      <Img
                        style={{ borderRadius: "64px", margin: "0 10px" }}
                        width={120}
                        height={120}
                        src={v.profileImg}
                        alt="d"
                      />
                      <strong style={{ display: "block" }}>{v.name}</strong>
                      <span>{v.text}</span>
                    </Link>
                  </ProfileItem>
                ))}
              </ProfileList>
            </ProfileContainer>
          </SuggestGuide>
        ) : (
          <SuggestSearch>
            <ContSuggest>
              <h3>
                <Link to={"#"}>
                  글 검색 <span>&gt;</span>
                </Link>
              </h3>
              <WrapArticleList>
                <ListCommon>
                  <li>
                    <Link to={"#"}>
                      <PostTitle>
                        <strong>
                          역사란 무엇인가 (1) - E.{" "}
                          <b style={{ color: "#00c6be" }}>H</b>. 카(Carr) 지음
                        </strong>
                      </PostTitle>
                    </Link>
                  </li>
                </ListCommon>
                <ListCommon>
                  <li>
                    <Link to={"#"}>
                      <PostTitle>
                        <strong>
                          역사란 무엇인가 (1) - E.{" "}
                          <b style={{ color: "#00c6be" }}>H</b>. 카(Carr) 지음
                        </strong>
                      </PostTitle>
                    </Link>
                  </li>
                </ListCommon>
                <ListCommon>
                  <li>
                    <Link to={"#"}>
                      <PostTitle>
                        <strong>
                          역사란 무엇인가 (1) - E.{" "}
                          <b style={{ color: "#00c6be" }}>H</b>. 카(Carr) 지음
                        </strong>
                      </PostTitle>
                    </Link>
                  </li>
                </ListCommon>
                <ListCommon>
                  <li>
                    <Link to={"#"}>
                      <PostTitle>
                        <strong>
                          역사란 무엇인가 (1) - E.{" "}
                          <b style={{ color: "#00c6be" }}>H</b>. 카(Carr) 지음
                        </strong>
                      </PostTitle>
                    </Link>
                  </li>
                </ListCommon>
                <ListCommon>
                  <li>
                    <Link to={"#"}>
                      <PostTitle>
                        <strong>
                          역사란 무엇인가 (1) - E.{" "}
                          <b style={{ color: "#00c6be" }}>H</b>. 카(Carr) 지음
                        </strong>
                      </PostTitle>
                    </Link>
                  </li>
                </ListCommon>
                <ListCommon>
                  <li>
                    <Link to={"#"}>
                      <PostTitle>
                        <strong>
                          역사란 무엇인가 (1) - E.{" "}
                          <b style={{ color: "#00c6be" }}>H</b>. 카(Carr) 지음
                        </strong>
                      </PostTitle>
                    </Link>
                  </li>
                </ListCommon>
              </WrapArticleList>
            </ContSuggest>
            <AsideSuggest>
              <div>
                <MiniContSuggest>
                  <h3>
                    <Link to={"#"}>
                      작품 검색 <span>&gt;</span>
                    </Link>
                  </h3>
                </MiniContSuggest>
                <MiniWrapArticleList>
                  <SearchRecommend>
                    <ItemRecommend>
                      <Link to={"#"}>
                        <Img
                          style={{
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "4px",
                          }}
                          width={36}
                          height={36}
                          alt="dasds"
                          src={
                            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                          }
                        />
                      </Link>
                      <div
                        style={{
                          display: "table",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: "36px",
                          tableLayout: "fixed",
                        }}
                      >
                        <div
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <Link to={"#"}>H 부동산</Link>
                        </div>
                      </div>
                    </ItemRecommend>
                    <ItemRecommend>
                      <Link to={"#"}>
                        <Img
                          style={{
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "4px",
                          }}
                          width={36}
                          height={36}
                          alt="dasds"
                          src={
                            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                          }
                        />
                      </Link>
                      <div
                        style={{
                          display: "table",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: "36px",
                          tableLayout: "fixed",
                        }}
                      >
                        <div
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <Link to={"#"}>H 부동산</Link>
                        </div>
                      </div>
                    </ItemRecommend>
                    <ItemRecommend>
                      <Link to={"#"}>
                        <Img
                          style={{
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "4px",
                          }}
                          width={36}
                          height={36}
                          alt="dasds"
                          src={
                            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                          }
                        />
                      </Link>
                      <div
                        style={{
                          display: "table",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: "36px",
                          tableLayout: "fixed",
                        }}
                      >
                        <div
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <Link to={"#"}>H 부동산</Link>
                        </div>
                      </div>
                    </ItemRecommend>
                  </SearchRecommend>
                </MiniWrapArticleList>
              </div>
              <div>
                <MiniContSuggest
                  style={{ borderTop: "1px solid #333", margin: "22px 0 0" }}
                >
                  <h3
                    style={{
                      padding: 0,
                      margin: "20px 0 0 ",
                    }}
                  >
                    <Link to={"#"}>
                      작품 검색 <span>&gt;</span>
                    </Link>
                  </h3>
                </MiniContSuggest>
                <MiniWrapArticleList>
                  <SearchRecommend>
                    <ItemRecommend>
                      <Link to={"#"}>
                        <Img
                          style={{
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "4px",
                          }}
                          width={36}
                          height={36}
                          alt="dasds"
                          src={
                            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                          }
                        />
                      </Link>
                      <div
                        style={{
                          display: "table",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: "36px",
                          tableLayout: "fixed",
                        }}
                      >
                        <div
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <Link to={"#"}>H 부동산</Link>
                        </div>
                      </div>
                    </ItemRecommend>
                    <ItemRecommend>
                      <Link to={"#"}>
                        <Img
                          style={{
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "4px",
                          }}
                          width={36}
                          height={36}
                          alt="dasds"
                          src={
                            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                          }
                        />
                      </Link>
                      <div
                        style={{
                          display: "table",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: "36px",
                          tableLayout: "fixed",
                        }}
                      >
                        <div
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <Link to={"#"}>H 부동산</Link>
                        </div>
                      </div>
                    </ItemRecommend>
                    <ItemRecommend>
                      <Link to={"#"}>
                        <Img
                          style={{
                            overflow: "hidden",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            borderRadius: "4px",
                          }}
                          width={36}
                          height={36}
                          alt="dasds"
                          src={
                            "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg"
                          }
                        />
                      </Link>
                      <div
                        style={{
                          display: "table",
                          overflow: "hidden",
                          width: "100%",
                          minHeight: "36px",
                          tableLayout: "fixed",
                        }}
                      >
                        <div
                          style={{
                            display: "table-cell",
                            verticalAlign: "middle",
                          }}
                        >
                          <Link to={"#"}>H 부동산</Link>
                        </div>
                      </div>
                    </ItemRecommend>
                  </SearchRecommend>
                </MiniWrapArticleList>
              </div>
            </AsideSuggest>
          </SuggestSearch>
        )}
      </BoxSuggest>
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
  z-index: 100;
  background-color: #fff;
  top: 0;
  left: 0;
`;

const BoxSuggest = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 100px 0 227px;
  background-color: #fff;
  font-family: "Noto Sans Light", sans-serif;
  height: 100%;
  width: 100%;
`;

const Input = styled.input`
  border: none;
  width: 940px;
  height: 45px;
  margin: 0 auto;
  border-bottom: 1px solid #333;
  font-size: 30px;
  &:focus {
    outline: none;
  }
`;

const SuggestGuide = styled.div`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 949px;
  height: 86px;
  margin: 65px auto 0;
  text-align: center;
  color: #333;
  font-size: 28px;

  p {
    padding: 0 0 12px;
  }
`;

const SuggestBtn = styled(Button)`
  display: inline-block;
  width: auto;
  height: auto;
  border: 1px solid #00c6be;
  font-size: 15px;
  line-height: 22px;
  margin: 0 4px;
  padding: 4px 14px;
  color: #00c6be;
`;

const ProfileContainer = styled.div`
  margin: 45px auto 0;
  overflow: hidden;
  width: 940px;
`;

const ProfileList = styled.ul`
  font-size: 0;
  line-height: 0;
  margin: 0 0 0 -30px;
  text-align: center;
  width: 1000px;
  animation: ${animation_up} 0.5s;
  transition: opacity 0.2s ease-out 0s, transform 0.5s ease-out 0s;
`;

const ProfileItem = styled.li`
  display: inline-block;
  height: 198px;
  margin: 0 30px;
  vertical-align: top;
  width: 140px;

  strong {
    display: block;
    line-height: 1.5;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    width: 140px;
    color: #333;
    font-family: "Noto Sans Light", "Malgun Gothic", sans-serif;
    font-size: 15px;
    font-weight: lighter;
    padding: 15px 0 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    word-wrap: break-word;
    color: #666;
    display: block;
    line-height: 1.5;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    width: 140px;
    font-size: 12px;
    height: 38px;
    padding: 3px 0 0;
  }
`;

const SuggestSearch = styled.div`
  margin: 0 auto;
  min-height: 410.99px;
  overflow: hidden;
  width: 940px;
`;

const ContSuggest = styled.div`
  float: left;
  width: 720px;
  height: 100%;

  h3 {
    color: #959595;
    font-weight: normal;
    display: block;
    font-size: 13px;
    line-height: 1;
    padding: 30px 0 0;
  }

  li {
    margin: 26px 0 0;
    padding: 0;
  }
`;

const WrapArticleList = styled.div`
  padding-top: 0;
  padding-bottom: 2px;
`;

const ListCommon = styled.ul`
  overflow: hidden;
  width: 100%;
`;

const PostTitle = styled.div`
  max-width: 620px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  strong {
    line-height: 1;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
`;

const AsideSuggest = styled.div`
  overflow: hidden;
  width: 220px;
  height: 100%;
`;

const MiniContSuggest = styled.div`
  width: inherit;

  h3 {
    color: #959595;
    font-weight: normal;
    display: block;
    font-size: 13px;
    line-height: 1;
    padding: 30px 0 0;
  }
`;

const MiniWrapArticleList = styled.div`
  padding-top: 8px;
  padding-bottom: 2px;
`;

const SearchRecommend = styled.div`
  padding: 11px 0 0;
  overflow: hidden;

  height: auto;
  animation: ${animation_up} 0.5s;
  transition: opacity 0.2s ease-out 0s, transform 0.5s ease-out 0s;
`;

const ItemRecommend = styled.div`
  position: relative;
  display: block;

  a {
    display: block;
    overflow: hidden;
    line-height: 1.3;
    font-family: Noto Sans Light, Malgun Gothic, sans-serif;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 170px;
    font-size: 16px;
    margin-left: 50px;
    margin-top: 10px;
  }
  &:first-child a {
    margin-top: 0;
  }
`;
