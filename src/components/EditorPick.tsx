import React, { useState } from "react";
import styled from "styled-components";

import { LeftButton, RightButton } from "./ScrollButton";
import { FirstItemType, BookItemType, BlogItemType } from "./EditorPickItems";

interface PageNumProps {
  $posX: string;
  $posY: string;
  $height: string;
}

export interface FirstItemDataProps {
  title: string;
  description: string;
  author: string;
  cheerCount: number;
  image: string;
  link: string;
}

export interface BookItemDataProps {
  title: string;
  author: string;
  releasedDate: string;
  image: string;
  link: string;
}

export interface BlogItemDataProps {
  title: string;
  description?: string;
  author: string;
  image: string;
  link: string;
}

interface FakeDataProps {
  firstItem: FirstItemDataProps;
  bookItem: BookItemDataProps;
  blogItem: BlogItemDataProps[];
}

const FAKE_DATA: FakeDataProps = {
  firstItem: {
    title: "낙원의 전경을 만든 기술: 궁극적 사치로서 물의 공간",
    description: `이번 글에서는 중세 이슬람 문화의 고전적 정원 시스템이 어떻게 유럽에
    적용될 수 있었는지, 르네상스 이후 크게 발전하게 되는 초기 분수
    디자인 및 조각, 그리고 궁전과 빌라 정원에 어떻게 도입되었는지에 대해
    살펴봅니다. 서양 문명에서 물을 유도하는 기술은 공학 역사를 이루는
    중요한 측면 중 하나입니다. 기술 발전은 특히 중세 이후 아랍 및 비잔틴
    공학 영향`,
    author: "이민정",
    cheerCount: 1,
    image:
      "http://t1.daumcdn.net/brunch/service/user/f9dN/image/uIvIsZIxvMUHSEiNLKal8EXR4mw.jpg",
    link: "https://brunch.co.kr/@maypaperkunah/169",
  },
  bookItem: {
    title: `일본 공대생 연구실 생존기 1부`,
    author: "유즈",
    releasedDate: "Oct.22.2023",
    image:
      "https://img1.daumcdn.net/thumb/C460x648/?fname=http://t1.daumcdn.net/brunch/service/user/fpbQ/image/qiNUIJjNfke06AZ96hCdWUKs8E4.jpg",
    link: "https://brunch.co.kr/brunchbook/epi1",
  },
  blogItem: [
    {
      title: "두릅 에그베네딕트",
      author: "최명진",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429044835448",
    },
    {
      title: "내 아내는 도대체 어느 나라 시차로 살고 있는 것인가",
      author: "망고 파일럿",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429020043166",
    },

    {
      title: "중국계 사장님이 튀겨주는 우리 동네 피시 앤 칩스의 맛",
      description: ` 2019년부터 연례행사로 봄가을 10km 마라톤 대회에 참여하고 있다.
    치열하게 연습해 셀프 기록을 경신한다거나 이런 것보다는 에너지
    넘치는 러너들과 함께 서울 한복판을 달리는 경험 그 자체가 짜릿해
    애뉴얼 이벤트가 됐다.`,
      author: "킨스데이",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240502091125837",
    },
    {
      title: "수린이가 시골 수영장에 가면 생기는 일",
      description: `나는 수영 실력이 초급 같은 중급자이다. 그러다 보니 6주간의 공백기는 인기 절정의 아이돌이 군대에 가는 것처럼 치명적이라는 생각이 들었다. 수영 강습을 6주간 홀드해 놨지만 한 달 넘게 수영을 못 한다는 사실은 나를 불안하게 만들었다`,
      author: "pathos",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240503111508403",
    },
    {
      title: "아니, 양념게장에 이게 안 들어갔다고?",
      description:
        "팔순 안여사가 제일 자신있어하는 요리는 바로 달디 달고 붉디 붉은 양념게장이다.",
      author: "피어라",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429053806116",
    },

    {
      title: "Since 1981, 11시 37분에 문을 여는 중국집",
      author: "권오찬",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240430015918904",
    },
    {
      title: "나는 왜 도시락을 엎었던가",
      author: "우유기",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "주인을 잘못 만난 죄",
      author: "루카미노",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240502120505190",
    },
    {
      title: "칭송을 거절하는 승무원",
      author: "지구여행자",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429054326200",
    },

    {
      title: "한국 집과 미국 집 뭐가 다를까?",
      description:
        "미국의 주택들은 구경하는 재미가 있다. 밖에서 보면 집들이 모두 다 비슷비슷해 보일 수 있지만, 안으로 들어가면 구조와 동선이 모두 달라 구경하는 재미가 크다.",
      author: "아이비 ivy",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429104228594",
    },
    {
      title: "망고의 나라는 태국이 아니다. 인도다",
      author: "Pawittra",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "전문직이 최고라고들 하길래",
      author: "잔향",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },

    {
      title: "5만원 이라니까 4만 원만 받으라는 손님.",
      description:
        "요즘 다시 일을 시작했다. 평일엔 육아를 하느라 집에서 보내고, 주말엔 남편의 손을 빌려 아기를 잠시 맡기고 난 출근을 한다. ",
      author: "허가영",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "백화수복",
      description: `"9시도 이른데 무슨 8시야. 제사가 장난이야?" "식구들 다 모이면 그냥 지내면 되는 거지 시간이 그렇게 중요해? 다들 내일 출근해야 되고 애들 학교도 가야 하는데 좀 합리적으로 삽시다. 시대가 바뀌면 엄마도 좀 바뀌어봐."`,
      author: "은빛엉글",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "엄마의 계란찜",
      description:
        "집밥을 만든 지 10년 차가 되니 이제 정말 많은 음식을 할 수 있게 되었다. 그러나 나에게도 어려운 요리가 하나 있다(물론 딱 하나만 있는 것은 아니지만) 그것은 바로 계란찜이다.",
      author: "Blair",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },

    {
      title: "저녁은 간단하게 먹기",
      description:
        "요즘 날씨가 참 좋다. 봄날 햇살이 참 따뜻하고 생기가 느껴져서 좋다. 나뭇잎은 어느새 풍성하게 나무를 가득 채워서 온 세상이 푸릇하다. 봄꽃 마냥 같이 들떠서일까. 요즘 식욕이 폭발을 했다. 평소 먹던 집밥뿐 아니라 그동아 ㄴ피해왔던 달고 자극적인 음식들도 마구 먹었다. 이렇게 먹으며 안 되는 걸 알면서 이번만 먹자고 자꾸 타협을 했다.",
      author: "샤이니율",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240502093435949",
    },
    {
      title: "와. 저사람은 흰쌀밥 먹어서 좋겠다.",
      author: "페르세우스",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "직급폐지! 회사가 숨기는 비밀",
      author: "초맹",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "양계장집 딸의 추억",
      author: "인테리언니",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },

    {
      title: "이사 가야 해서, 당근에 키우던 화분을 팔았다",
      description: "2년 전에도 난 화분을 팔았다.",
      author: "안개꽃",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "5월인데... 자식들의 외식 제안이 부답스럽다",
      author: "이브런",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
    {
      title: "봄날, 이러다 매일 '쌈'난다",
      author: "이우석 더 프리맨",
      link: "https://brunch.co.kr/@desdemon/287",
      image: "https://t1.daumcdn.net/tromm/content/20240429112212034",
    },
  ],
};

const EditorPick = () => {
  const [slidePosition, setSlidPosition] = useState(0); // x좌표로 얼마만큼 이동했는지
  const [activePage, setActivePage] = useState(1); // 현재 활성화된 페이지번호(1~10)

  /** 페이지 버튼 클릭 */
  const handleNumberButtonClick = (x: number, pageNum: number) => {
    setSlidPosition(x);
    setActivePage(pageNum);
  };

  /** 스크롤 (왼, 오) 버튼 클릭 */
  const handleScrollButtonClick = (isLeftButton: boolean) => {
    if (isLeftButton) {
      setSlidPosition((prev) => (prev += activePage === 2 ? 480 : +960));
      setActivePage((prev) => prev - 1);
    } else {
      setSlidPosition((prev) => (prev -= activePage === 1 ? 480 : 960));
      setActivePage((prev) => prev + 1);
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ position: "relative" }}>
        {/* 왼쪽 오른쪽 버튼 구현부 */}
        {/* 스크롤 버튼이 2 <= activePage <= 9 일 때만 화면에 표시 */}
        {activePage >= 2 && (
          <div onClick={() => handleScrollButtonClick(true)}>
            <LeftButton $left="30px" $top="50%" />
          </div>
        )}
        {activePage <= 9 && (
          <div onClick={(e) => handleScrollButtonClick(false)}>
            <RightButton $right="30px" $top="50%" />
          </div>
        )}

        {/* 슬라이드 구현부 */}
        <WrapSlide
          style={{
            transform: `translateX(${slidePosition}px)`,
            transition: "-webkit-transform 0.3s ease 0s ",
          }}
        >
          {/* 1페이지 */}
          <li>
            <div style={{ width: "480px", height: "520px" }}>
              <FirstItemType FirstItem={FAKE_DATA.firstItem} />
            </div>
          </li>
          {/* 2페이지 */}
          <li>
            <ItemListPerPage>
              <div style={{ width: "480px", height: "520px" }}>
                <BookItemType BookItem={FAKE_DATA.bookItem} />
              </div>
              <div style={{ width: "480px", height: "100%" }}>
                {[0, 1].map((num, i) => (
                  <div style={{ width: "100%", height: "50%" }} key={i}>
                    <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                  </div>
                ))}
              </div>
            </ItemListPerPage>
          </li>
          {/* 3페이지 */}
          <li>
            <ItemListPerPage>
              {[2, 3, 4].map((num, i) => (
                <div style={{ width: "320px", height: "100%" }} key={i}>
                  <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                </div>
              ))}
            </ItemListPerPage>
          </li>
          {/* 4페이지 */}
          <li>
            <ItemListPerPage>
              {[5, 6, 7, 8].map((num, i) => (
                <div style={{ width: "50%", height: "50%" }} key={i}>
                  <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                </div>
              ))}
            </ItemListPerPage>
          </li>
          {/* 5페이지 */}
          <li>
            <ItemListPerPage>
              <div style={{ width: "50%", height: "100%" }}>
                <BlogItemType BlogItem={FAKE_DATA.blogItem[9]} />
              </div>
              <div style={{ width: "50%", height: "100%" }}>
                {[10, 11].map((num, i) => (
                  <div style={{ width: "100%", height: "50%" }} key={i}>
                    <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                  </div>
                ))}
              </div>
            </ItemListPerPage>
          </li>
          {/* 6페이지 */}
          <li>
            <ItemListPerPage>
              {[12, 13, 14].map((num, i) => (
                <div style={{ width: "320px", height: "100%" }} key={i}>
                  <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                </div>
              ))}
            </ItemListPerPage>
          </li>
          {/* 7페이지 */}
          <li>
            <ItemListPerPage>
              <div style={{ width: "100%", height: "320px" }}>
                <BlogItemType BlogItem={FAKE_DATA.blogItem[15]} />
              </div>
              {[16, 17, 18].map((num, i) => (
                <div style={{ width: "320px", height: "200px" }} key={i}>
                  <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                </div>
              ))}
            </ItemListPerPage>
          </li>
          {/* 8페이지 */}
          <li>
            <ItemListPerPage>
              <div style={{ width: "50%", height: "100%" }}>
                <BlogItemType BlogItem={FAKE_DATA.blogItem[19]} />
              </div>
              <div style={{ width: "50%", height: "100%" }}>
                {[19, 20].map((num, i) => (
                  <div style={{ width: "100%", height: "50%" }} key={i}>
                    <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                  </div>
                ))}
              </div>
            </ItemListPerPage>
          </li>
          {/* 9페이지 */}
          <li>
            <ItemListPerPage>
              {[2, 3, 4].map((num, i) => (
                <div style={{ width: "320px", height: "100%" }} key={i}>
                  <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                </div>
              ))}
            </ItemListPerPage>
          </li>
          {/* 10페이지 */}
          <li>
            <ItemListPerPage>
              <div style={{ width: "100%", height: "320px" }}>
                <BlogItemType BlogItem={FAKE_DATA.blogItem[14]} />
              </div>
              {[15, 16, 17].map((num, i) => (
                <div style={{ width: "320px", height: "200px" }} key={i}>
                  <BlogItemType BlogItem={FAKE_DATA.blogItem[num]} />
                </div>
              ))}
            </ItemListPerPage>
          </li>
        </WrapSlide>
      </div>

      {/* 페이지 버튼 구현부 */}
      <div style={{ margin: "22px auto 0px", width: "fit-content" }}>
        <PageButton onClick={() => handleNumberButtonClick(0, 1)}>
          <PageNum
            $posX="0"
            $posY={activePage === 1 ? "-10" : "0"}
            $height={activePage === 1 ? "12" : "9"}
          >
            1
          </PageNum>
        </PageButton>
        <PageButton onClick={() => handleNumberButtonClick(-480, 2)}>
          <PageNum
            $posX="-20"
            $posY={activePage === 2 ? "-10" : "0"}
            $height={activePage === 2 ? "12" : "9"}
          >
            2
          </PageNum>
        </PageButton>
        {[3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <PageButton
            key={num}
            onClick={() =>
              handleNumberButtonClick(-480 + -960 * (num - 2), num)
            }
          >
            <PageNum
              $posX={`${-20 * (num - 1)}`}
              $posY={activePage === num ? "-10" : "0"}
              $height={activePage === num ? "12" : "9"}
            >
              {num}
            </PageNum>
          </PageButton>
        ))}
      </div>
    </div>
  );
};

export default EditorPick;

const DefaultUl = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;

  overflow: visible;
`;

const WrapSlide = styled(DefaultUl)`
  width: 960px;
  height: 520px;

  margin: 0 auto;

  display: flex;

  background-color: #d9d9d9;
`;

const ItemListPerPage = styled.div`
  width: 960px;
  height: 520px;
  display: flex;
  flex-wrap: wrap;
`;
const PageButton = styled.button`
  color: #333;

  padding: 0 11px;

  height: 31px;

  background-color: #fff;
  border: none;

  cursor: pointer;
`;

const PageNum = styled.span<PageNumProps>`
  text-indent: -9999px;
  width: 13px;
  height: ${(props) => props.$height}px;

  background: url("https://t1.daumcdn.net/brunch/static/img/help/pc/top/img_paging.v2.png")
    no-repeat;
  background-position: ${(props) => props.$posX}px ${(props) => props.$posY}px;

  display: block;
`;
