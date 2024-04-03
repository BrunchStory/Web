import React, { useEffect, useState } from "react";
import Data from "./fakeData.json";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import WriteItems from "./WriteItems";

interface Props {
  selectedDay: string;
}

export interface ListProps {
  DONATION_TOTAL_AMOUNT: number;
  PUBLISH_TIME: string;
  id: number;
  text: string;
  title: string;
  writer: string;
  img?: string;
}

const WeekWriteList = ({ selectedDay }: Props) => {
  const location = useLocation();
  const [today, sorted] = location.hash.split("#").join("").split("/");
  const [dataList, setDataList] = useState<ListProps[]>([]);

  useEffect(() => {
    const weekInfo: { [key: string]: number } = {
      mon: 1,
      tue: 2,
      wed: 3,
      thu: 4,
      fri: 5,
      sat: 6,
      sun: 0,
    };
    const list = Data[weekInfo[selectedDay || today]].list;
    setDataList(list);
  }, [selectedDay, today]);

  const filterData =
    sorted === "PUBLISH_TIME"
      ? dataList.sort(
          (a, b) =>
            new Date(b.PUBLISH_TIME).getTime() -
            new Date(a.PUBLISH_TIME).getTime()
        )
      : dataList.sort(
          (a, b) =>
            b.DONATION_TOTAL_AMOUNT - a.DONATION_TOTAL_AMOUNT ||
            new Date(a.PUBLISH_TIME).getTime() -
              new Date(b.PUBLISH_TIME).getTime()
        );
  return (
    <div style={{ width: "100%" }}>
      <ListSerialContainer>
        <WriteItems filterData={filterData} />
      </ListSerialContainer>
    </div>
  );
};

export default WeekWriteList;

const ListSerialContainer = styled.div`
  width: 100%;
  height: 560px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 2px solid #eee;
`;
