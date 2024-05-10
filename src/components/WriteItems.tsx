import React from "react";
import styled, { keyframes } from "styled-components";
import { ListProps } from "./WeekWriteList";
import { Img } from "../styles/global";

interface Props {
  filterData: ListProps[];
}

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

const WriteItems = ({ filterData }: Props) => {
  return (
    <>
      {filterData.map(({ title, text, writer, img }, idx) => {
        return (
          <WriteItemContainer key={idx}>
            <WriteItem>
              <span>{title}</span>
              <span>
                <strong>{text}</strong>
              </span>
              <span>{writer}</span>
            </WriteItem>
            <div
              style={{
                width: "80px",
                height: "80px",
                marginLeft: "20px",
              }}
            >
              {" "}
              {img && <Img width={80} height={80} src={img} alt="사진" />}
            </div>
          </WriteItemContainer>
        );
      })}
    </>
  );
};

export default WriteItems;

const WriteItemContainer = styled.div`
  border: 1px solid #eee;
  width: 470px;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px;
  animation: ${animation_up} 0.5s;
  transition: opacity 0.2s ease-out 0s, transform 0.5s ease-out 0s;
`;

const WriteItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span:first-child {
    color: #333;
    font-size: 12px;
  }

  span:last-child {
    color: #959595;
    font-size: 12px;
    margin-top: 10px;
  }

  span:last-child::before {
    content: "by";
    margin-right: 4px;
  }

  span:nth-child(2) {
    display: flex;
    align-items: center;
    padding-right: 11px;
    width: 100%;

    strong {
      display: -webkit-box;
      overflow: hidden;
      max-width: 92%;
      max-height: 52px;
      -webkit-box-orient: vertical;
      color: #111;
      font-size: 16px;
      font-weight: 100;
      -webkit-line-clamp: 1;
      line-height: 26px;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
`;
