import React, { useEffect, useState } from "react";
import { Img } from "../styles/global";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RightButton, LeftButton } from "./ScrollButton";

interface DataItem {
  imgUrl?: string;
  title: string;
  text: string;
  writer: string;
  imgWidth: number;
  imgHeight: number;
}

interface FakeData {
  list: DataItem[];
}

const FAKE_DATA: FakeData = {
  list: [
    {
      title: "노인 둘이 사는 집은 몇 평이 적당할까",
      text: "bdjhfbdfshjfbdshjfbadsfjkgbsdjhkgbdsjkghbdfsjgbdsfhjgbdfsjhgbdfjhgsbdfhjgbdsfjhgbdfsjhgbdfsjhgbfshdjgbsdhjfgbhjdfgbhjdsfgbhjsdfgbdfshjgbsdhjgbdfsjhgbdfsjgbsfdjhgbj",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "우리 집 최애 보양식",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "ATM기에서 잃어버린 돈",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dskjdnkjadnaskjdnaskjdnasjkdnskjdnaskjdnaskjdnjksadnajksdnsjkadnjhsdbfkjdshbfhjksfdgbshjdfgbfdhjsgbdsfhjgbdfshjgbdsfjhgbsfdhjgdfjgbdfjhgbjhgbdhjgbfdhjgbdfhjgbdfjhgbdfhjgbdfhkgbdfkgnds;kjfnsdkjfnsjkdhbfsjdhbfdshjbfdsjhbfjhd",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
    {
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_1280.jpg",
      title: "dkssusda",
      text: "dsakjdnaskjdsna",
      writer: "adsdsa",
      imgWidth: 240,
      imgHeight: Math.random() * 100 + 200,
    },
  ],
};

const InfinitePagination = () => {
  const [moveSlide, setMoveSlide] = useState(0);
  const [enableBtn, setEnableBtn] = useState({
    left: true,
    right: false,
  });

  useEffect(() => {
    if (Math.abs(moveSlide) >= 6720) {
      setEnableBtn((prevBtnState) => ({ ...prevBtnState, right: true }));
    } else {
      setEnableBtn((prevBtnState) => ({ ...prevBtnState, right: false }));
    }

    if (moveSlide >= 0) {
      setEnableBtn((prevBtnState) => ({ ...prevBtnState, left: true }));
    } else {
      setEnableBtn((prevBtnState) => ({ ...prevBtnState, left: false }));
    }
  }, [moveSlide]);

  const onNext = (direction: "right" | "left") => {
    const directionCase = {
      right: () => {
        setMoveSlide((prev) => (prev -= 960));
      },
      left: () => {
        setMoveSlide((prev) => (prev += 960));
      },
    };

    return directionCase[direction]();
  };

  return (
    <RecommededArticlesContainer>
      <Title>RECOMMENDED ARTICLES</Title>
      <p style={{ width: "960px", margin: "0 auto" }}>
        <SubTitle>갓 구워낸 따끈따끈한 추천글을 만나보세요</SubTitle>
      </p>
      <ListSlideContainer>
        <ListSlide $move={moveSlide}>
          {FAKE_DATA.list.map((v, idx) => (
            <Link key={idx} to={"#"} style={{ padding: "0 10px" }}>
              <Item>
                {v.imgUrl && (
                  <div>
                    <Img
                      width={v.imgWidth}
                      height={v.imgHeight}
                      src={v.imgUrl}
                    />
                  </div>
                )}
                <strong>{v.title}</strong>
                <p>{v.text}</p>
                <span>by {v.writer}</span>
              </Item>
            </Link>
          ))}
        </ListSlide>
      </ListSlideContainer>
      <div style={{ visibility: enableBtn.right ? "hidden" : "visible" }}>
        <RightButton
          onClick={() => onNext("right")}
          $right={"2%"}
          $top={"40%"}
        />
      </div>
      <div style={{ visibility: enableBtn.left ? "hidden" : "visible" }}>
        <LeftButton onClick={() => onNext("left")} $left={"2%"} $top={"40%"} />
      </div>
    </RecommededArticlesContainer>
  );
};

export default InfinitePagination;

const RecommededArticlesContainer = styled.div`
  height: 869px;
  text-align: center;
  position: relative;
`;

const Title = styled.h3`
  width: 380px;
  height: 13px;
  margin-top: 152px;
  background-position: 0 -225px;
  background-image: url(https://t1.daumcdn.net/brunch9/static/images/pcrtn/txt_brunch_v6_221227.png);
  background-size: 380px 640px;
  display: block;
  overflow: hidden;
  margin: 17px auto 0;
  text-indent: -9999px;
`;

const SubTitle = styled.span`
  width: 162px;
  height: 11px;
  background-position: 0 -75px;
  background-image: url(//t1.daumcdn.net/brunch9/static/images/pcrtn/txt_brunch_v6_221227.png);
  background-size: 380px 640px;
  display: block;
  overflow: hidden;
  margin: 17px auto 0;
  text-indent: -9999px;
  margin-bottom: 47px;
`;

const ListSlideContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 781px;
`;

const ListSlide = styled.ul<{ $move: number }>`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  width: 7800px;
  height: 781px;
  padding-bottom: 180px;
  transform: ${(props) => `translateX(${props.$move}px)`};
  transition: transform 0.5s ease;
`;
const Item = styled.li`
  width: 240px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #959595;
  text-align: start;

  div {
    overflow: hidden;
    max-height: 320px;
    margin-bottom: 22px;
  }

  strong {
    display: inline;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.025em;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
    width: 100%;
    letter-spacing: 0.24px;
  }

  p {
    display: block;
    padding-top: 10px;
    font-size: 12px;
    letter-spacing: -0.025em;
    line-height: 20px;
    text-align: justify;
    word-break: break-all;
    width: 100%;
  }

  span {
    width: 100%;
    display: block;
    overflow: hidden;
    padding-top: 22px;
    font-size: 12px;
  }
  &:hover strong {
    text-decoration: underline;
  }
`;

// const [list, setList] = useState([]);
// const [isLoading, setIsLoading] = useState(false);

// const getDataList = async () => {
//   setIsLoading(true);
//   try {
//     const response = await axios.get("url 입력 부분");
//     console.log(response.data);
//     const newData = response.data.map((info): DataItem => ({
//       img: info.img,
//       text: info.text,
//       writer: info.writer,
//       imgWidth: info.imgWidth,
//       imgHeight: info.imgHeight
//     }));

//     setList((prevData) => [...prevData, nextData]);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     setIsLoading(false)
//   }
// };

// useEffect(() => {
//   getDataList();
// }, ["deps에는 버튼 크기? 위치? 마다 받아오게 하기"]);
