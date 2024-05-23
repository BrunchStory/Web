import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Img, WhiteSpace } from "../styles/global";
import { Link } from "react-router-dom";

interface FakeDataItem {
  imgUrl: string;
  title: string;
  text: string;
  text2: string;
}

interface FakeData {
  list: FakeDataItem[];
}

interface BtnType {
  [key: string]: () => void;
}

const fakeData: FakeData = {
  list: [
    {
      imgUrl:
        "https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-01.png",
      title: "브런치 작가로 데뷔하세요",
      text: "진솔한 에세이부터 업계 전문 지식까지,",
      text2: "당신의 이야기를 세상에 선보이세요.",
    },
    {
      imgUrl:
        "https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-02.png",
      title: "브런치스토리로 제안받는 새로운 기회",
      text: "다양한 프로젝트와 파트너를 통해",
      text2: "작가님의 작품이 책·강연 등으로 확장됩니다.",
    },
    {
      imgUrl:
        "https://t1.daumcdn.net/brunch9/static/images/pc/pc-img-start-03.png",
      title: "글로 만나는 작가의 경험",
      text: "작가를 구독하고, 새 글을 받아보세요.",
      text2: "당신에게 영감을 주는 작품을 추천합니다.",
    },
  ],
};

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setOpenModal }: Props) => {
  const [next, setNext] = useState(0);
  const outside = useRef<any>();

  const onNext = (str: "auto" | "prev" | "next") => {
    const strCase: BtnType = {
      next: () => {
        setNext((prev) => {
          if (prev === -1000) {
            prev = 0;
          } else {
            prev += -500;
          }

          return prev;
        });
      },
      auto: () => {
        setNext((prev) => {
          if (prev === -1000) {
            prev = 0;
          } else {
            prev += -500;
          }

          return prev;
        });
      },
      prev: () => {
        setNext((prev) => {
          if (prev === 0) {
            prev = -1000;
          } else {
            prev += 500;
          }

          return prev;
        });
      },
    };

    return strCase[str]();
  };

  useEffect(() => {
    const intervalId = setInterval(() => onNext("auto"), 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (!outside.current.contains(e.target)) {
        setOpenModal(false);
      }
    };

    window.addEventListener("mousedown", onClickOutside);

    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [setOpenModal]);

  /** 카카오 로그인 */
  const handleKaKaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
    const REDIRECTED_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECTED_URL}&response_type=code`;

    window.location.href = kakaoURL;
  };

  return (
    <Cotainer>
      <ModalContainer ref={outside}>
        <div
          style={{
            left: "62px",
            position: "absolute",
            top: "83px",
          }}
        >
          <span
            style={{
              backgroundPosition: "0 -820px",
              display: "inline-block",
              height: "44px",
              width: "44px",
              backgroundImage:
                "url(//t1.daumcdn.net/brunch9/static/images/pcrtn/ico_brunch_v1_221221.png)",
              backgroundSize: "200px 870px",
            }}
          ></span>
        </div>
        <AutoImgContainer>
          <ImgContainer>
            {fakeData.list.map((v, idx) => (
              <AutoMoveContainer key={idx} to={"#"} next={next}>
                <Img width={315} height={208} src={v.imgUrl} />
                <div>
                  <strong>{v.title}</strong>
                  <span>
                    {v.text} <br />
                    {v.text2}
                  </span>
                </div>
              </AutoMoveContainer>
            ))}
          </ImgContainer>
          <WhiteSpace height={17} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Button
              width={7.8}
              height={15}
              style={{ color: "gray" }}
              onClick={() => onNext("prev")}
            >
              &lt;
            </Button>
            <StyledList>
              <StyledListItem
                $active={(next === 0).toString()}
              ></StyledListItem>
              <StyledListItem
                $active={(next === -500).toString()}
              ></StyledListItem>
              <StyledListItem
                $active={(next === -1000).toString()}
              ></StyledListItem>
            </StyledList>
            <Button
              width={7.8}
              height={15}
              onClick={() => onNext("next")}
              style={{ color: "gray" }}
            >
              &gt;
            </Button>
          </div>
        </AutoImgContainer>
        <LoginContainer>
          <LoginBtnContainer>
            <LoginKakao>
              <strong>브론치 스토리 시작하기</strong>
              <Btn
                width={406}
                height={60}
                radius={5}
                $bgc={"#ffe500"}
                onClick={handleKaKaoLogin}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundImage:
                      'url("https://t1.daumcdn.net/brunch9/static/images/pcrtn/ico_brunch_v1_221221.png")',
                    backgroundPosition: "-140px -570px",
                    display: "inline-block",
                    position: "relative",
                    top: "-1px",
                    left: "-5px",
                    verticalAlign: "middle",
                    backgroundSize: "200px 870px",
                  }}
                />
                카카오 계정 로그인
              </Btn>
            </LoginKakao>
            <ForgetInfo>
              <strong>내 브런치스토리 찾기</strong>
              <Btn width={406} height={60} radius={5}>
                내 브런치스토리의 카카오계정을 모르겠어요
              </Btn>
              <Btn width={406} height={60} radius={5}>
                페이스북･트위처로만 로그인 했었나요?
              </Btn>
              <Link
                style={{
                  color: "#6c6c6c",
                  textAlign: "center",
                  fontSize: "14px",
                  marginTop: "57px",
                  width: "100%",
                  height: "21px",
                  display: "block",
                  textDecoration: "underline",
                }}
                to={"#"}
              >
                로그인 관련 상세 도움말
              </Link>
            </ForgetInfo>
          </LoginBtnContainer>
          <button
            style={{
              top: "20px",
              right: "20px",
              position: "absolute",
              backgroundColor: "transparent",
              fontSize: "28px",
              border: "none",
              fontWeight: "lighter",
              cursor: "pointer",
              display: "inline-block",
              backgroundImage:
                "url(//t1.daumcdn.net/brunch9/static/images/pcrtn/ico_brunch_v1_221221.png)",
              backgroundSize: "200px 870px",
              backgroundPosition: "-140px -760px",
              textIndent: "-9999px",
              height: "23px",
              width: "23px",
            }}
            onClick={() => setOpenModal(false)}
          >
            <span>x</span>
          </button>
        </LoginContainer>
      </ModalContainer>
    </Cotainer>
  );
};

export default Modal;

const Cotainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: 1000px;
  height: 610px;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  position: relative;
`;

const AutoImgContainer = styled.div`
  width: 500px;
  height: 616.27px;
  background-color: white;
  padding: 142px 0 101px;
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 335px;
  overflow: hidden;
  display: flex;
`;

const AutoMoveContainer = styled(Link)<{ next: number }>`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  text-align: center;
  position: relative;
  left: ${(props) => `${props.next}px`};

  div {
    margin: 41px 0 0;
    height: 86px;
  }

  strong {
    color: #333;
    display: block;
    font-size: 27px;
    font-weight: normal;
    line-height: 1;
  }

  span {
    color: #999;
    display: block;
    font-family: auto;
    font-size: 15px;
    margin-top: 14px;
  }
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 20%;
`;

const StyledListItem = styled.li<{ $active: string }>`
  width: 8px;
  height: 8px;
  border: 1px solid gray;
  border-radius: 16px;
  background-color: ${(props) =>
    props.$active === "true" ? "gray" : "transparent"};
`;

const LoginContainer = styled.div`
  width: 500px;
  height: 610px;
  position: relative;
  background-color: #f8f8f8;
  padding: 94px 47px 72px;
`;

const LoginBtnContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const LoginKakao = styled.div`
  width: "100%";
  height: 150px;
  border-bottom: 1px solid #e7e7e7;
  padding-bottom: 49px;

  strong {
    font-size: 15px;
    font-weight: normal;
    color: #333;
  }
`;

const ForgetInfo = styled.div`
  width: "100%";
  height: 328.5px;
  padding: 40px 0;

  strong {
    font-size: 15px;
    font-weight: normal;
    color: #333;
  }
`;

const Btn = styled(Button)<{ $bgc?: string }>`
  background-color: ${(props) => props.$bgc || "#fff"};
  border: none;
  line-height: 61px;
  font-size: 16px;
  margin-top: 14px;
  position: relative;
  padding: 0;
`;
