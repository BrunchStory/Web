import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import WeekWriteList from "./WeekWriteList";

const week = ["월", "화", "수", "목", "금", "토", "일"];
const dayInfo = ["일", "월", "화", "수", "목", "금", "토"];
const today = new Date().getDay();
const weekEn: { [key: string]: string } = {
  월: "mon",
  화: "tue",
  수: "wed",
  목: "thu",
  금: "fri",
  토: "sat",
  일: "sun",
};

const sorted = ["최신순", "응원순"];
const sortedEn: { [key: string]: string } = {
  최신순: "PUBLISH_TIME",
  응원순: "DONATION_TOTAL_AMOUNT",
};

const WeekdayList = () => {
  const [day, setDay] = useState<string>(dayInfo[today]);
  const [selectSorted, setSelectSorted] = useState<string>("응원순");

  const onClickDay = (idx: number) => {
    setDay(week[idx]);
  };

  const onClickSorted = (idx: number) => {
    setSelectSorted(sorted[idx]);
  };

  return (
    <WeekdayListContainer>
      <Title>요일별 연재</Title>
      <Desc>브런치북 오리저널 연재를 만나 보세요</Desc>
      <SelectWeekContainer>
        <SelectWeek>
          {week.map((v, idx) => (
            <Week
              to={`/#${weekEn[v]}/#${sortedEn[selectSorted]}`}
              key={idx}
              onClick={() => onClickDay(idx)}
              isSelected={day === v}
            >
              {v}
            </Week>
          ))}
        </SelectWeek>
      </SelectWeekContainer>
      <LatestLikesContainer>
        {sorted.map((v, idx) => (
          <LatestLikes
            to={`/#${weekEn[day]}/#${sortedEn[v]}`}
            isSelected={v === selectSorted}
            onClick={() => onClickSorted(idx)}
            key={idx}
          >
            {v}
          </LatestLikes>
        ))}
      </LatestLikesContainer>
      <WeekWriteList selectedDay={weekEn[day]} />
      <SerialsContainer>
        <Serials to={"/"}>연재 작품 더 보기 &gt;</Serials>
      </SerialsContainer>
    </WeekdayListContainer>
  );
};

export default WeekdayList;

const WeekdayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 960px;
  height: 833px;
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 150;
  width: 100%;
  text-align: center;
`;

const Desc = styled.p`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #959595;
  margin: 10px 0 0 0;
  line-height: 20px;
`;

const SelectWeekContainer = styled.div`
  width: 100%;
  height: 35px;
  margin-top: 40px;
`;

const SelectWeek = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style-type: none;
  border-bottom: 1px solid #eee;
  padding: 0;
  margin: 0;
`;

const Week = styled(Link)<{ isSelected: boolean }>`
  color: ${(props) => (props.isSelected ? "#111" : "#959595")};
  font-size: 14px;
  padding: 0 14px 12px;
  cursor: pointer;
  text-decoration: none;
  // relative로 ul에 기준을 맞춤
  position: relative;

  &::after {
    content: "";
    // ul 기준으로 border-bottom이 생겼을 때 어색하지 않도록 bottom: -1px 설정해주기
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: ${(props) => props.isSelected && "1px solid #00c6be"};
  }
`;

const LatestLikesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 25px 20px;
  box-sizing: border-box;
`;

const LatestLikes = styled(Link)<{ isSelected: boolean }>`
  font-size: 13px;
  color: ${(props) => (props.isSelected ? "#333" : "#959595")};
  padding: 0 0 0 12px;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &:last-child {
    margin-left: 8px;
  }

  &:hover {
    text-decoration: underline;
  }

  &::before {
    position: absolute;
    left: 25%;
    bottom: 47%;
    content: "";
    width: 4px;
    border-radius: 50%;
    height: 4px;
    margin: -2px 4px 0 -8px;
    background-color: ${(props) => props.isSelected && "#00c6be"};
  }
`;

const SerialsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Serials = styled(Link)`
  border-radius: 30px;
  border: 1px solid #eee;
  width: 180px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 23px;
  padding-right: 15px;
  color: #333;
  line-height: 38px;
  font-size: 14px;
  text-decoration: none;
`;
