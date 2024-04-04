import React from "react";
import styled from "styled-components";

// 가짜 임시 데이터
const fakeData: FakeData = {
  list: [
    {
      0: {
        profileImage:
          "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/3UIz/image/Nz9S4pUbWCi2P9xwtZ297jM2Lh0.jpg",
        profileName: "일과삶",
        profileJob: "출간작가",
        description:
          "일하고 배우고 느낀 점을 나누며 삶의 성장으로 안내하는 글을 씁니다. 《나를 찾아가는 글쓰기》, 《아이 키우며 일하는 엄마로 산다는 건》저자",
      },
    },
    {
      1: {
        profileImage:
          "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/S55/image/zXgKobo-G_azDfKQvRHT7WtzAsY.png",
        profileName: "kakaoprivacy",
        profileJob: "카카오",
        description:
          "카카오의 프라이버시 및 개인정보 관련 정책과 활동을 소개하고, 개인정보에 대해 알고 싶은 모든 분들을 위한 브런치입니다.",
      },
    },
    {
      2: {
        profileImage:
          "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/c8u/image/Ezy7ajeg5hO9Reuq4gHiLO9TLmY",
        profileName: "뮤즈노트",
        profileJob: "방송사 출간작가",
        description:
          "문화콘텐츠학 박사, 방송사에서 문화사업, 편성PD, 뉴미디어 전략, 콘텐츠 마케팅 등 다양한 업무를 해왔다.",
      },
    },
    {
      3: {
        profileImage:
          "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/1cee/image/_1-cVZpBJAMpkfycONWjhiHc15g.jpg",
        profileName: "박찬학",
        profileJob: "더테이블세터 강연자",
        description:
          "The table setter 대표_소셜임팩트 공공소통디자인_아이스크림 원격 연수원 교사직무연수 <고교학점제>강사_네이버 프리미엄 콘텐츠 취미/학습/자기개발 분야 TOP1",
      },
    },
    {
      4: {
        profileImage:
          "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/8kr3/image/OPsIYPqIEgFmUG83meMfqhsAFnY.jpg",
        profileName: "또또비됴",
        profileJob: "에디터",
        description:
          "영화를 통해 사회를 보려 노력하는 또또비됴 브런치 입니다. 극장, VHS, DVD, VOD, OTT 가리지 않고 모든 영화를 좋아합니다.",
      },
    },

    {
      5: {
        profileImage:
          "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cZdn/image/enLi4EqF5qFUJNi8VJmX8CtAdx0",
        profileName: "allen rabbit",
        profileJob: "에세이스트",
        description:
          "<공공의적><이중간첩><가족시네마>의 시나리오 작가. <순애보>의 편집감독, <망명>의 영화감독. <빙상의신> 드라마 작가. <천공의 섬 아저씨>의 일러스트 수필작가.",
      },
    },
  ],
};
interface FakeDataItem {
  [key: number]: {
    profileImage: string;
    profileName: string;
    profileJob: string;
    description: string;
  };
}
interface FakeData {
  list: FakeDataItem[];
}

// Props의 타입 정의
interface ProfileProps {
  $imageUrl: string;
}

interface ButtonProps {
  fontSize: string;
  $padding: string;
}
const Writers = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA", paddingTop: "100px" }}>
      <Title>B R U N C H W R I T E R S</Title>
      <SubTitle>브런치 추천 작가</SubTitle>
      <UL style={{ marginTop: "43px" }}>
        <li>
          <Button fontSize="15px" $padding="7px 16px 6px">
            콘텐츠
          </Button>
        </li>
        <li>
          <Button fontSize="15px" $padding="7px 16px 6px">
            경영
          </Button>{" "}
        </li>
        <li>
          <Button fontSize="15px" $padding="7px 16px 6px">
            라이프스타일
          </Button>
        </li>
      </UL>
      <div style={{ paddingBottom: "100px" }}>
        <WriterContainer
          style={{ width: "fit-content", margin: "50px auto 0" }}
        >
          {fakeData.list.map((data, i) => (
            <WriterItem key={i}>
              <Profile $imageUrl={data[i].profileImage}></Profile>
              <Name>{data[i].profileName}</Name>
              <Job>{data[i].profileJob}</Job>
              <Description>{data[i].description}</Description>
              <UL>
                <li>
                  <Button fontSize="12px" $padding="4px 10px">
                    콘텐츠
                  </Button>
                </li>
                <li>
                  <Button fontSize="12px" $padding="4px 10px">
                    글쓰기
                  </Button>
                </li>
                <li>
                  <Button fontSize="12px" $padding="4px 10px">
                    IT
                  </Button>
                </li>
              </UL>
            </WriterItem>
          ))}
        </WriterContainer>
      </div>
    </div>
  );
};

export default Writers;

const WriterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 310px);
  gap: 16px;
`;

const Profile = styled.figure<ProfileProps>`
  background-color: #fff;
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  margin: 0 auto;
`;

const Name = styled.strong`
  font-family: "Nanum Myeongjo", serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 28px;
  text-align: center;
  color: #333;

  display: block;

  padding: 17px 12px 0;
`;

const Job = styled.span`
  line-height: 18px;
  text-align: center;
  color: #666;

  margin-top: 4px;

  display: block;
`;

const Description = styled.span`
  line-height: 20px;
  color: #959595;

  margin-top: 16px;

  overflow: hidden;
  white-space: normal;
  max-height: calc(20px * 3); /* line-height x 3줄 */

  text-align: center;
  display: block;
`;
const WriterItem = styled.div`
  font-family: "Noto Sans";
  font-size: 12px;
  font-weight: 300;

  color: #333;
  background-color: #fff;

  width: 230px;
  min-height: 288px;

  padding: 46px 40px;
`;

// TODO
const Title = styled.h3`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/txt_brunch_v6_221227.png")
    no-repeat;
  background-position: 0 -175px;

  width: 266px;
  height: 13px;

  font-size: 14.04px;
  font-weight: 700;
  line-height: 21.06px;
  text-align: center;
  text-indent: -9999px;

  color: #333;

  margin: 0 auto;
`;

// TODO
const SubTitle = styled.p`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/txt_brunch_v6_221227.png")
    no-repeat;
  background-position: -270px -70px;
  font-size: 12px;
  line-height: 18px;
  text-indent: -9999px;

  width: 94px;
  height: 11px;

  color: #333;

  margin: 17px auto 0;

  text-align: center;
`;

const UL = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;

  list-style: none;

  margin: 43px 0 0;
  padding: 0;
`;

const Button = styled.button<ButtonProps>`
  font-size: ${(props) => props.fontSize};
  letter-spacing: -1px;
  color: #959595;

  border: 1px solid #ddd;
  border-radius: 20px;

  background-color: #fff;

  /*padding: 4px 10px;*/
  padding: ${(props) => props.$padding};

  cursor: pointer;
`;
