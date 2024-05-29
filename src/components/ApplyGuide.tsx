import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Apply from "../pages/Apply";
import NavHeader from "./NavHeader";
import SideBar from "./Sidebar";
import { useTypedDispatch, useTypedSelector } from "../hooks/redux";
import { checkY } from "../store/slices/navheaderSlice";

const ApplyGuide = () => {
  const [isHover, setHover] = useState(false); // 작가 신청하기 버튼의 hover 여부
  const [marginTop, setMarginTop] = useState(34); // 작가 신청하기 버튼의 margin-top
  const { search } = useLocation();
  const checkLocation = search.split("?").join("") === "form";
  const dispatch = useTypedDispatch();
  const show = useTypedSelector((state) => state.navheader.show);

  // 렌더링 시에 margin-top: 34-> 78 으로 변경하여 부드럽게 내려가는 효과
  useEffect(() => {
    const timer = setTimeout(() => {
      setMarginTop(78);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 26) {
        dispatch(checkY(true));
      } else {
        dispatch(checkY(false));
      }
    };

    window.addEventListener("scroll", checkScroll);

    return () => window.removeEventListener("scroll", checkScroll);
  }, [dispatch]);

  return (
    <>
      <NavHeader
        headerprops={{ type: checkLocation ? "flow" : show ? "flow" : "apply" }}
      />
      {checkLocation ? (
        <Apply />
      ) : (
        <div>
          <Item $bgColor="#718ec9" $firstChild>
            <Flow>
              <MegaPhone>
                브런치
                <br />
                작가를 애타게
                <br />
                찾고 있습니다.
              </MegaPhone>

              <Title>
                <h3>01.자격조건</h3>
              </Title>
            </Flow>

            <Desc>
              <Image $imgPosition="0 2px">
                누구나 쓸 수 있다! 단, 작가만 발행가능.
              </Image>
              <p>
                브런치스토리는 작가 신청을 통해 작가로 선정되어야 글을
                '발행'하실 수 있습니다.
                <br />
                출간 작가, 특정 분야의 전문가가 아니더라도 진정성 있게 글을 쓸
                분이라면 도전하실 수 있습니다.
                <br />
                브런치 작가가 되어 좋은 글을 발행하고, 독자들을 만나보세요.
                <br />
              </p>
            </Desc>
          </Item>
          <Item $bgColor="#5bb38d">
            <Flow>
              <Title>
                <h3>02. 필수자료</h3>
              </Title>
            </Flow>
            <Desc>
              <Image $imgPosition="0 -230px">
                좌절금지, 승인이 안될 수 있다.
              </Image>
              <p>작가 신청에 필요한 자료를 미리 준비해주세요. </p>
              <ul>
                <li>
                  1. 작가 소개, 브런치스토리 활동 계획, 참고용 홈페이지나 SNS
                  주소.
                </li>
                <li>
                  2. 직접 쓴 글 필수! 브런치스토리 저장글 또는 참고 글 확인
                  주소.
                </li>
              </ul>
            </Desc>
          </Item>
          <Item $bgColor="#e18a8a">
            <Flow>
              <Title>
                <h3>03. 유의사항</h3>
              </Title>
            </Flow>
            <Desc>
              <Image $imgPosition="0 -460px">
                좌절금지, 승인이 안될 수 있다.
              </Image>
              <p>
                브런치스토리는 작가님들의 좋은 글이 작품이 되고, 독자들에게
                영감을 주기를 바랍니다.
                <br />
                그러나 심사에 참고할 자료가 부족하거나, 부적절한 소재의 내용이
                포함되는 등의 경우
                <br />
                신청이 거절될 수 있는 점 미리 양해 부탁드립니다.
              </p>
            </Desc>
          </Item>

          <Item $bgColor="#606270" $lastChild>
            <Desc>
              <Image $imgPosition="0 -695px" $lastChild>
                아직 작가 신청 안내가 부족한가요?
              </Image>
              <LinkButton to={"https://brunch.co.kr/@brunch/2"}>
                작가 신청 안내 자세히보기
              </LinkButton>
              <p style={{ opacity: 0.4, fontSize: "13px" }}>
                일반 문의는
                <A to={"https://cs.kakao.com/requests?locale=ko&service=54"}>
                  고객센터 문의하기
                </A>
                를 이용해주세요
              </p>
            </Desc>
          </Item>

          {/* 작가 신청하기 네모 */}
          <ApplyButton
            to={"/apply?form"}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            $mouseHover={isHover}
            $marginTop={marginTop}
          >
            브런치
            <br />
            작가
            <br />
            신청하기
            <span></span>
          </ApplyButton>
        </div>
      )}
      <SideBar />
    </>
  );
};

export default ApplyGuide;

const Item = styled.div<{
  $bgColor: string;
  $firstChild?: boolean;
  $lastChild?: boolean;
}>`
  color: #f8f8f8;
  height: ${(props) => (props.$lastChild ? "260px" : "640px")};
  padding-top: ${(props) =>
    props.$firstChild ? "155px" : props.$lastChild ? "64px" : "160px"};
  background-color: ${(props) => props.$bgColor};

  position: relative;
`;

const Flow = styled.div`
  position: absolute;
  top: 84px;
  left: 30px;
`;
const MegaPhone = styled.div`
  font-family: "Nanum Myeongjo", serif;
  color: #fff;
  font-size: 14px;
  letter-spacing: -0.5px;
  line-height: 18px;
`;

const Title = styled.div`
  display: flex;
  transform: rotate(90deg);
  transform-origin: 0 120%;
  &:before {
    display: block;
    width: 60px;
    height: 1px;
    align-self: end;
    margin-right: 14px;
    background-color: #fff;
    content: "";
  }
  h3 {
    font-family: "Nanum Myeongjo", serif;
    color: #fff;
    font-size: 18.1px;
    letter-spacing: -0.5px;
    font-weight: 400;
  }
`;
const Desc = styled.div`
  width: 540px;
  margin: 0 auto;

  p {
    font-size: 14px;
    padding: 0 6px;
    margin-top: 25px;
    letter-spacing: -0.5px;
    line-height: 24px;
  }

  ul {
    font-size: 14px;
    margin: 11px 5px 0;
    line-height: 24px;
  }
`;

const Image = styled.strong<{ $imgPosition: string; $lastChild?: boolean }>`
  display: block;
  width: ${(props) => (props.$lastChild ? "274px" : "100%")};
  height: ${(props) => (props.$lastChild ? "48px" : "230px")};
  background-position: ${(props) => props.$imgPosition};
  background-image: url("https://t1.daumcdn.net/brunch/static/img/request/r2/img_apply.png");
  background-size: 520px 750px;
  background-repeat: no-repeat;
  text-indent: -9999px;
`;

const A = styled(Link)`
  color: #f8f8f8;
  text-decoration: underline;
`;

const LinkButton = styled(Link)`
  margin: 14px 0 9px;
  display: block;
  width: 167px;
  height: 30px;
  border: 1px solid #90919b;
  border-radius: 30px;
  color: #fff;
  font-size: 13px;
  line-height: 32px;
  text-align: center;
  text-decoration: none;
`;

const ApplyButton = styled(Link)<{
  $mouseHover: boolean;
  $marginTop: number;
}>`
  position: fixed;
  top: 555px;
  left: 50%;
  padding: 20px;
  margin-top: ${(props) => props.$marginTop}px;
  margin-left: 300px;
  width: 135px;
  height: 135px;
  color: #000;
  background-color: #fff;
  box-shadow: 0 19px 100px 21px rgba(0, 0, 0, 0.14);
  font-size: 18px;
  line-height: 20px;
  transition: margin-top 0.5s;

  span {
    display: inline-block;
    width: 133px;
    height: 10px;
    margin-top: 25px;
    background-position: ${(props) =>
      props.$mouseHover ? "-340px -691px" : "-408px -691px"};

    background-image: url("https://t1.daumcdn.net/brunch/static/img/request/r2/img_apply.png");
    background-size: 520px 750px;
    background-repeat: no-repeat;
    transition: 0.2s background-position;
  }
`;
