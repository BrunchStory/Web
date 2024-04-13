import React, { useEffect, useState } from "react";
import { Button, Img } from "../styles/global";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
      <SubTitle>브런치의 다양한 글을 만나보세요.</SubTitle>
      <ListSlideContainer>
        <ListSlide move={moveSlide} len={FAKE_DATA.list.length}>
          {FAKE_DATA.list.map((v, idx) => (
            <Link to={"#"} style={{ padding: "0 10px" }}>
              <Item key={idx}>
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
      <ArrowBtn
        right={"right"}
        onClick={() => onNext("right")}
        width={100}
        height={101}
        radius={64}
        hidden={enableBtn.right}
      >
        →
      </ArrowBtn>
      <ArrowBtn
        left={"left"}
        onClick={() => onNext("left")}
        width={100}
        height={101}
        radius={64}
        hidden={enableBtn.left}
      >
        ←
      </ArrowBtn>
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
  margin: 17px auto 0;
  letter-spacing: 10px;
`;

const SubTitle = styled.p`
  color: gray;
  width: 100%;
  height: 11px;
  margin: 0 auto;
  font-size: 12px;
  margin: 17px auto 38px;
`;

const ListSlideContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 781px;
`;

const ListSlide = styled.ul<{ len: number; move: number }>`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  width: 7800px;
  height: 781px;
  padding-bottom: 180px;
  transform: ${(props) => `translateX(${props.move}px)`};
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

const ArrowBtn = styled(Button)<{
  left?: string;
  right?: string;
  hidden?: boolean;
}>`
  position: absolute;
  top: 48%;
  ${(props) =>
    props.left === "left"
      ? css`
          left: 2%;
        `
      : css`
          right: 2%;
        `};
  font-size: 32px;
  background-color: #ffffff40;
  border: 1px solid #000;
  color: #333;
  z-index: 5;
  display: ${(props) => (props.hidden ? "none" : "inline")};
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
