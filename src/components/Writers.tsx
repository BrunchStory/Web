import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 카테고리 리스트
const category = [
  { id: 100, name: "에세이" },
  { id: 200, name: "사랑" },
  { id: 300, name: "IT" },
];

// 가짜 임시 데이터
const fakeDataList: FakeDataList = {
  category: category,
  results: [
    {
      category_id: 100,
      list: [
        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/3UIz/image/Nz9S4pUbWCi2P9xwtZ297jM2Lh0.jpg",
          profile_name: "일과삶",
          profile_job: "출간작가",
          profile_desc:
            "일하고 배우고 느낀 점을 나누며 삶의 성장으로 안내하는 글을 씁니다. 《나를 찾아가는 글쓰기》, 《아이 키우며 일하는 엄마로 산다는 건》저자",
          profile_categories: [
            { id: 100, name: "에세이" },
            { id: 200, name: "사랑" },
            { id: 300, name: "IT" },
          ],
        },
        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/S55/image/zXgKobo-G_azDfKQvRHT7WtzAsY.png",
          profile_name: "kakaoprivacy",
          profile_job: "카카오",
          profile_desc:
            "카카오의 프라이버시 및 개인정보 관련 정책과 활동을 소개하고, 개인정보에 대해 알고 싶은 모든 분들을 위한 브런치입니다.",
          profile_categories: [
            { id: 100, name: "에세이" },
            { id: 200, name: "해외생활" },
            { id: 300, name: "IT" },
          ],
        },
        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/c8u/image/Ezy7ajeg5hO9Reuq4gHiLO9TLmY",
          profile_name: "뮤즈노트",
          profile_job: "방송사 출간작가",
          profile_desc:
            "문화콘텐츠학 박사, 방송사에서 문화사업, 편성PD, 뉴미디어 전략, 콘텐츠 마케팅 등 다양한 업무를 해왔다.",
          profile_categories: [
            { id: 100, name: "에세이" },
            { id: 200, name: "책" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/1cee/image/_1-cVZpBJAMpkfycONWjhiHc15g.jpg",
          profile_name: "박찬학",
          profile_job: "더테이블세터 강연자",
          profile_desc:
            "The table setter 대표_소셜임팩트 공공소통디자인_아이스크림 원격 연수원 교사직무연수 <고교학점제>강사_네이버 프리미엄 콘텐츠 취미/학습/자기개발 분야 TOP1",
          profile_categories: [
            { id: 100, name: "에세이" },
            { id: 200, name: "교육" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/8kr3/image/OPsIYPqIEgFmUG83meMfqhsAFnY.jpg",
          profile_name: "또또비됴",
          profile_job: "에디터",
          profile_desc:
            "영화를 통해 사회를 보려 노력하는 또또비됴 브런치 입니다. 극장, VHS, DVD, VOD, OTT 가리지 않고 모든 영화를 좋아합니다.",
          profile_categories: [
            { id: 100, name: "에세이" },
            { id: 200, name: "경영" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cZdn/image/enLi4EqF5qFUJNi8VJmX8CtAdx0",
          profile_name: "allen rabbit",
          profile_job: "에세이스트",
          profile_desc:
            "<공공의적><이중간첩><가족시네마>의 시나리오 작가. <순애보>의 편집감독, <망명>의 영화감독. <빙상의신> 드라마 작가. <천공의 섬 아저씨>의 일러스트 수필작가.",
          profile_categories: [
            { id: 100, name: "에세이" },
            { id: 200, name: "콘텐츠" },
            { id: 300, name: "IT" },
          ],
        },
      ],
    },

    {
      category_id: 200,
      list: [
        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/3UIz/image/Nz9S4pUbWCi2P9xwtZ297jM2Lh0.jpg",
          profile_name: "효라빠",
          profile_job: "교도관 공무원",
          profile_desc:
            "18년차 교도관 입니다. 운동(유도,주짓수 등)과 책읽기, 글쓰기를 좋아합니다. 50가지의 독특한 교도소 이야기로 책 출간했습니다. 다양한 글을  쓰고 싶습니다.",
          profile_categories: [
            { id: 100, name: "사랑" },
            { id: 200, name: "라이프스타일" },
            { id: 300, name: "IT" },
          ],
        },
        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/e00Q/image/9kbRLYhUVZ8oyWshmhQAMU-FZ6E",
          profile_name: "문득",
          profile_job: "출간작가",
          profile_desc:
            "앞만 보고 달려가자 바보처럼 울지 말자 너를 위해서 나를 위해서",
          profile_categories: [
            { id: 100, name: "사랑" },
            { id: 200, name: "영화" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/9Z5x/image/ZdTSz3pNMzpYkTiKyJiwrW-_IYM.JPG",
          profile_name: "고대윤",
          profile_job: "수의사 포토그래퍼",
          profile_desc:
            "사진을 찍고 글을 쓰는 수의사입니다. 누구도 봐주지 않았지만, 2023 [당신의 시간]을 출판했습니다.",
          profile_categories: [
            { id: 100, name: "사랑" },
            { id: 200, name: "여행" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "	https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/28ME/image/zEqvOGCnHsJdLPWh74XVVUGnTZw.JPG",
          profile_name: "상담자 혜운",
          profile_job: "상담자혜운 출간작가",
          profile_desc:
            "심리학을 전공한, 심리상담을 하는 상담자. 일상에서 일어난 내 마음의 변화, 내 아이의 마음, 더 나아가 타인의 마음을 바라보며 기록하고 있습니다.",
          profile_categories: [
            { id: 100, name: "사랑" },
            { id: 200, name: "해외생활" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/2RGx/image/nbfX3Nk5akziiBPTtK49f7_vBRI.png",
          profile_name: "기록하는 슬기",
          profile_job: "에세이스트",
          profile_desc:
            "記록 하는 슬記 / '기록'을 남기고, '마음'을 나누는 일을 오랫동안 하고 싶습니다.",
          profile_categories: [
            { id: 100, name: "사랑" },
            { id: 200, name: "여행" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/8Ac0/image/RTGd_cBTy0wS41nMywxjLG3bZss.jpg",
          profile_name: "스마일펄",
          profile_job: "에세이스트",
          profile_desc:
            "심리에세이 <부모님과 헤어지는 중입니다> 저자. 심리/인간관계/사랑/연애/결혼/이혼/자존감/일상/노하우 관련 글을 쓰는 중. 사랑스러운 엔프제(ENFJ-T). 따뜻한 감성의 소유자",
          profile_categories: [
            { id: 100, name: "사랑" },
            { id: 200, name: "에세이" },
            { id: 300, name: "IT" },
          ],
        },
      ],
    },

    {
      category_id: 300,
      list: [
        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/bcpZ/image/d0KK2Y49Qi2sK9w404R7NogfSvA.png",
          profile_name: "카카오벤처스",
          profile_job: "카카오벤처스",
          profile_desc:
            "카카오벤처스의 공식 블로그 입니다. 카카오벤처스와 함께하는 모두의 이야기를 담아냅니다.",
          profile_categories: [
            { id: 100, name: "IT" },
            { id: 200, name: "반려동물" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/575g/image/8pBE8WbNfkmAa1kdJc_ItB5LE0U.jpg",
          profile_name: "OOJOO",
          profile_job: "프리랜서 출간작가",
          profile_desc:
            "디지털 기술이 사회와 산업 그리고 기업과 개인에 가져다 주는 변화와 이에 대한 대응 방안을 고민하고 연구하고 있습니다.",
          profile_categories: [
            { id: 100, name: "IT" },
            { id: 200, name: "책" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/lzk/image/w1pf3bdLmRVsWjjX9uoHXMadq0o.jpg",
          profile_name: "엄지용",
          profile_job: "커넥터스 크리에이터",
          profile_desc:
            "국내 최대 유통물류 버티컬 콘텐츠 멤버십 '커넥터스' 운영합니다.",
          profile_categories: [
            { id: 100, name: "IT" },
            { id: 200, name: "에세이" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/7zIK/image/KodOR8YeUUCf-D12WEJ2Uimr3sE.JPG",
          profile_name: "여행하는 기획자",
          profile_job: "출간작가",
          profile_desc:
            "UX 박사과정생이자 10년차 서비스기획자.흩어지는 순간을 기억하고자 기록합니다.",
          profile_categories: [
            { id: 100, name: "IT" },
            { id: 200, name: "경영" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/4qBH/image/HMjWRMkecW05rIM-ELHHIBQq41g.jpg",
          profile_name: "김태완",
          profile_job: "교수",
          profile_desc:
            "변화하는 세상을 함께 공감하고자 하는 김태완의 브런치입니다.",
          profile_categories: [
            { id: 100, name: "IT" },
            { id: 200, name: "라이프스타일" },
            { id: 300, name: "IT" },
          ],
        },

        {
          profile_image:
            "https://img1.daumcdn.net/thumb/C120x120/?fname=http://t1.daumcdn.net/brunch/service/user/2joe/image/gjE6kYxkU9DZkxkZ-ohYvuXiDnY.png",
          profile_name: "유플리트",
          profile_job: "디지털에이전시",
          profile_desc:
            "<공공의적><이중간첩><가족시네마>의 시나리오 작가. <순애보>의 편집감독, <망명>의 영화감독. <빙상의신> 드라마 작가. <천공의 섬 아저씨>의 일러스트 수필작가.",
          profile_categories: [
            { id: 100, name: "IT" },
            { id: 200, name: "사랑" },
            { id: 300, name: "IT" },
          ],
        },
      ],
    },
  ],
};

interface FakeDataList {
  category: Category[];
  results: DataByCategory[];
}

interface Category {
  id: number;
  name: string;
}

interface DataByCategory {
  category_id: number;
  list: Profile[];
}

interface Profile {
  profile_image: string;
  profile_name: string;
  profile_job: string;
  profile_desc: string;
  profile_categories: Category[];
}

interface Category {
  id: number;
  name: string;
}

// Props의 타입 정의
interface ProfileProps {
  $imageUrl: string;
}

interface ButtonProps {
  fontSize: string;
  $padding: string;
  $isActive?: boolean;
}
const Writers = () => {
  const [activeButton, setActiveButton] = useState(0); // 활성화된 버튼 번호(0~2)
  const handleCategoryClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };

  const openWindow = (categoryName: string) => {
    let url = `https://brunch.co.kr/keyword/profile/${categoryName}`;

    window.open(url, "_blank");
  };
  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        paddingTop: "100px",
      }}
    >
      <Title>B R U N C H W R I T E R S</Title>
      <SubTitle>브런치 추천 작가</SubTitle>

      {/* 카테고리 버튼  */}
      <UL style={{ marginTop: "43px" }}>
        {fakeDataList.category.map((category, buttonId) => (
          <li key={category.id}>
            <Button
              fontSize="15px"
              $padding="7px 16px 6px"
              $isActive={activeButton === buttonId}
              onClick={() => handleCategoryClick(buttonId)}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </UL>

      {/* 카테고리별 프로필 리스트 */}
      <div style={{ paddingBottom: "100px" }}>
        <WriterContainer
          style={{ width: "fit-content", margin: "50px auto 0" }}
        >
          {fakeDataList.results[activeButton].list.map((data, i) => (
            <WriterItem
              key={i}
              to="https://brunch.co.kr/@hmr3341"
              target="_blank"
            >
              <StyledProfile $imageUrl={data.profile_image}></StyledProfile>
              <Name>{data.profile_name}</Name>
              <Job>{data.profile_job}</Job>
              <Description>{data.profile_desc}</Description>
              {/* 한 프로필 당 카테고리 리스트 */}
              <UL>
                {data.profile_categories.map((category) => (
                  <li key={category.id}>
                    <Button
                      fontSize="12px"
                      $padding="4px 10px"
                      $isActive={false}
                      onClick={() => openWindow(category.name)}
                    >
                      {category.name}
                    </Button>
                  </li>
                ))}
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

const StyledProfile = styled.figure<ProfileProps>`
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
  font-family: "Noto Sans Light", sans-serif;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #666;

  margin-top: 4px;

  display: block;
`;

const Description = styled.span`
  font-family: "Noto Sans Light", sans-serif;
  line-height: 20px;
  color: #959595;

  margin-top: 16px;

  overflow: hidden;
  white-space: normal;
  height: calc(20px * 3); /* line-height x 3줄 */

  text-align: center;
  display: block;
`;

const DefaultLink = styled(Link)`
  display: block;

  text-decoration: none;
  color: inherit;
`;
const WriterItem = styled(DefaultLink)`
  font-size: 12px;
  font-weight: 300;

  color: #333;
  background-color: #fff;

  width: 230px;
  min-height: 288px;

  padding: 46px 40px;
`;

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
  font-family: "Noto Sans Light", sans-serif;
  font-size: ${(props) => props.fontSize};
  letter-spacing: -1px;
  line-height: 18px;
  color: #959595;

  border: ${(props) => (props.$isActive ? "#00c6be" : "#ddd")} 1px solid;

  border-radius: 20px;

  background-color: #fff;

  /*padding: 4px 10px;*/
  padding: ${(props) => props.$padding};

  cursor: pointer;

  display: block;
`;
