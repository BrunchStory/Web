import React from "react";
import styled from "styled-components";
import { ListProps } from "./WeekWriteList";
import { Img } from "../styles/global";

interface Props {
  filterData: ListProps[];
}

const WriteItems = ({ filterData }: Props) => {
  return (
    <>
      {filterData.map(({ title, text, writer, img }, idx) => {
        return (
          <WriteItemContainer key={idx}>
            <WriteItem
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <span>{title}</span>
              <strong>{text}</strong>
              <span>{writer}</span>
            </WriteItem>
            {img && <Img width={80} height={80} src={img} alt="사진" />}
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
  box-sizing: border-box;
  cursor: pointer;
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

  strong {
    color: #111;
    font-size: 16px;
    line-height: 26px;
    font-weight: normal;
  }
`;
