import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 가짜 임시 데이터
const fakeData: FakeData = {
  list: [
    { 0: { description: "지구한바퀴\n세계여행", isNew: "false" } },
    { 1: { description: "그림·웹툰", isNew: "false" } },
    { 2: { description: "알수록 좋은 경제", isNew: "false" } },
    { 3: { description: "IT\n트렌드", isNew: "false" } },
    { 4: { description: "사진·촬영", isNew: "false" } },
    { 5: { description: "취향저격\n영화 리뷰", isNew: "false" } },
    { 6: { description: "오늘은\n이런 책", isNew: "true" } },
    { 7: { description: "뮤직 인사이드", isNew: "false" } },
    { 8: { description: "글쓰기\n코치", isNew: "false" } },
    { 9: { description: "직장인\n현실 조언", isNew: "false" } },
    { 10: { description: "스타트업\n경험담", isNew: "true" } },
    { 11: { description: "육아\n이야기", isNew: "false" } },
    { 12: { description: "요리·레시피", isNew: "false" } },
    { 13: { description: "건강·운동", isNew: "false" } },
    { 14: { description: "멘탈 관리\n심리 탐구", isNew: "false" } },
    { 15: { description: "디자인\n스토리", isNew: "false" } },
    { 16: { description: "문화·예술", isNew: "false" } },
    { 17: { description: "건축·설계", isNew: "false" } },
    { 18: { description: "인문학·철학", isNew: "false" } },
    { 19: { description: "쉽게 읽는\n역사", isNew: "false" } },
    { 20: { description: "우리집\n반려동물", isNew: "false" } },
    { 21: { description: "멋진\n캘리그래피", isNew: "false" } },
    { 22: { description: "사랑·이별", isNew: "false" } },
    { 23: { description: "감성\n에세이", isNew: "true" } },
  ],
};

interface FakeDataItem {
  [key: number]: {
    description: string;
    isNew: string;
  };
}

interface FakeData {
  list: FakeDataItem[];
}

const Keyword = () => {
  return (
    <div style={{ display: "relative" }}>
      <Title>BRUNCH KEYWORD</Title>
      <SubTitle>키워드로 분류된 다양한 글 모음</SubTitle>
      <div style={{ overflowX: "auto", overflowY: "hidden" }}>
        {" "}
        <KeywordContainer>
          {fakeData.list.map((data, i) => (
            <KeywordItem key={i} to="/">
              <StyledTxt>{data[i].description}</StyledTxt>
              {data[i].isNew === "true" && <Icon></Icon>}
            </KeywordItem>
          ))}
        </KeywordContainer>
      </div>
    </div>
  );
};
// 아이콘
const Icon = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;

  width: 16px;
  height: 16px;

  background: url("	https://t1.daumcdn.net/brunch/static/img/help/pc/img_weekly.v2.png")
    no-repeat;
  background-position: -77px -80px;

  border-radius: 50%;
`;
// TODO
const Title = styled.p`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/txt_brunch_v6_221227.png")
    no-repeat;
  background-position: -101px -300px;

  width: 266px;
  height: 13px;

  font-size: 14.04px;
  font-weight: 700;
  line-height: 21.06px;
  text-indent: -9999px;

  color: #333;

  margin: 152px auto 0;

  text-align: center;
`;

// TODO
const SubTitle = styled.p`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/txt_brunch_v6_221227.png")
    no-repeat;
  background-position: -175px 0;

  width: 149px;
  height: 11px;

  font-size: 12px;
  line-height: 18px;
  text-indent: -9999px;

  color: #333;

  margin: 17px auto 0;

  text-align: center;
`;
const KeywordContainer = styled.div`
  margin: 46px auto 1px;

  width: fit-content;
  display: grid;
  grid-template-columns: repeat(8, 119px);
  grid-template-rows: repeat(3, 119px);
`;

const DefaultLink = styled(Link)`
  display: block;

  text-decoration: none;
  color: inherit;
`;
const KeywordItem = styled(DefaultLink)`
  font-size: 14px;
  line-height: 18px;

  color: #333;
  background-color: #fff;

  border: 1px solid #eee;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  margin: -1px;
  &:hover {
    border-color: #00c6be;
    color: #00c6be;
    z-index: 2; /* 마우스 호버 시 border가 겹쳐서 보이지 않을 수 있으므로 높은 z-index 부여 */
  }
`;

const StyledTxt = styled.span`
  display: block;
  text-align: center;
  white-space: pre-wrap; /* JSX 에서는 줄바꿈 문자를 무시하기 때문에 설정 */
`;

export default Keyword;
