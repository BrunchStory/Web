import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import {
  FirstItemDataProps,
  BookItemDataProps,
  BlogItemDataProps,
} from "./EditorPick";

interface FirstItemTypeProps {
  FirstItem: FirstItemDataProps;
}
interface BookItemTypeProps {
  BookItem: BookItemDataProps;
}
interface BlogItemTypeProps {
  BlogItem: BlogItemDataProps;
}

export const FirstItemType: React.FC<FirstItemTypeProps> = ({ FirstItem }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DefaultLink
        to={FirstItem.link}
        target="_blank"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <BackImage src={FirstItem.image} $hover={false} />
        <AppendInfo>
          <Title>{FirstItem.title}</Title>
          <DescInfo>{FirstItem.description}</DescInfo>
          <Author>
            <InfoBy>by</InfoBy> {FirstItem.author}
          </Author>
        </AppendInfo>
        <CheerInfo>
          <span className="icon">응원수</span>
          <span className="count">{FirstItem.cheerCount}</span>
          명이 응원
        </CheerInfo>
      </DefaultLink>
    </div>
  );
};

export const BookItemType: React.FC<BookItemTypeProps> = ({ BookItem }) => {
  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <DefaultLink to="https://brunch.co.kr/brunchbook/epi1" target="_blank">
        <FadeCover />
        <BookCover $image={BookItem.image}>
          <MainTextArea>
            <strong className="title">{BookItem.title}</strong>
            <span className="author">{BookItem.author}</span>
          </MainTextArea>
          <TextPublisher>brunch book</TextPublisher>
          <DimmedBookLeft />
          <DimmedBookRight />
        </BookCover>
        <InfoRelease>
          <InnerInfo>
            <span>First Edition</span>
            <span className="txt_g">Released date.{BookItem.releasedDate}</span>
          </InnerInfo>
        </InfoRelease>
      </DefaultLink>
    </Container>
  );
};

export const BlogItemType: React.FC<BlogItemTypeProps> = ({ BlogItem }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DefaultLink to={BlogItem.link} target="_blank">
        <BackImage src={BlogItem.image} alt="" />
        <TextArea>
          <Strong> {BlogItem.title}</Strong>
          {BlogItem.description && <DescInfo>{BlogItem.description}</DescInfo>}

          <Author>
            <InfoBy>by</InfoBy> {BlogItem.author}
          </Author>
        </TextArea>
      </DefaultLink>
    </div>
  );
};

/////////////// FirstItem //////////////
const LineClamp2 = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
`;

const LineClamp3 = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
`;

const AppendInfo = styled.div`
  padding-left: 50px;
  max-width: 330px;

  z-index: 1;
  pointer-events: none;
`;

const Title = styled(LineClamp2)`
  color: #fff;
  font-family: "Nanum Myeongjo", sans-serif;
  font-weight: 400;
  font-size: 32px;
  letter-spacing: -0.025em;
  line-height: 40px;
`;
const DescInfo = styled(LineClamp2)`
  font-family: "Noto Sans Light", san-serif;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  text-align: left;

  padding-top: 10px;
`;

const CheerInfo = styled.span`
  color: #fff;
  font-size: 14px;

  padding: 10px 50px 0 50px;
  display: block;
  height: 92px;

  z-index: 1;
  pointer-events: none;

  .icon {
    background: url("https://t1.daumcdn.net/brunch9/static/imgs/icons/pc_ico_brunch_pc_v231211.png")
      no-repeat;
    background-position: -172px -24px;
    width: 22px;
    height: 22px;
    display: inline-block;
    text-indent: -9999px;
  }

  .count {
    color: #fff;
    padding-left: 5px;
  }
`;
/////////////// BlogItemType //////////////////

const BackImage = styled.img<{ $hover?: boolean }>`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;
  filter: brightness(65%);

  &:hover {
    ${(props) =>
      props.$hover !== false &&
      css`
        transform: scale(1.1);
        filter: brightness(50%);
      `}
  }
  transition: transform 0.3s ease-in-out;
`;
const TextArea = styled.div`
  text-align: center;
  word-break: keep-all;

  width: 100%;
  padding: 0 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  pointer-events: none;
`;

const Strong = styled(LineClamp3)`
  color: #fff;
  font-family: "Nanum Myeongjo", sans-serif;
  font-weight: 400;
  font-size: 26px;
  letter-spacing: -0.025em;
  line-height: 36px;

  display: block;
`;

const Author = styled.div`
  color: #fff;
  font-family: "Noto Sans Light", san-serif;
  padding-top: 20px;
  font-size: 12px;

  opacity: 0.8;
`;

const InfoBy = styled.span`
  background: url("	https://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v9_230901.png")
    no-repeat;
  background-position: -38px -130px;

  display: inline-block;
  width: 14px;
  height: 13px;

  text-indent: -9999px;
  vertical-align: middle;
  opacity: 1;
`;

/////////////// BookItemType //////////////////
const Container = styled.div`
  background-image: linear-gradient(-180deg, #f4f4f4 0%, #dedede 82%);

  position: relative;

  &:before {
    position: absolute;
    width: 100%;
    height: 156px;
    background: #f6f6f6;
    content: "";
    bottom: 0;
    display: block;
  }
`;

const FadeCover = styled.span`
  position: absolute;
  inset: 0;

  display: block;

  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0) 0%,
    rgb(0 0 0 / 0.26) 100%
  );
`;

const BookCover = styled.span<{ $image: string }>`
  z-index: 5;
  position: absolute;
  top: 95px;
  left: 50%;
  margin-left: -115px;

  width: 230px;
  height: 324px;
  padding: 68px 0 0;
  display: block;

  z-index: 5;

  border-radius: 2px 6px 6px 2px;

  background-color: #ddd;
  ${(props) => `
    background: url(${props.$image}) no-repeat;
  `}

  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:before {
    position: absolute;
    top: 0;
    left: 0;

    width: 2px;
    height: 100%;
    display: block;

    background: #fff;
    opacity: 0.24;
    filter: blur(0.7px);

    content: "";
  }
`;

const MainTextArea = styled.div`
  font-family: Nanum Myeongjo, sans-serif;
  background: #fff;

  position: relative;

  margin: 0 50px;
  width: 130px;
  height: 172px;

  overflow: hidden;
  z-index: 1;

  .title,
  .author {
    display: block;
    line-height: 24px;
  }

  .title {
    font-size: 18px;
    font-weight: 400;
    padding: 10px 30px 0 10px;
    word-break: keep-all;
  }
  .author {
    font-size: 11px;
    color: #666;

    position: absolute;
    left: 0;
    bottom: 0;
    padding: 0 10px;
  }
`;

const DimmedBookLeft = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 9px;
  height: 100%;

  &:before {
    position: absolute;
    top: 0;
    right: 2px;
    width: 1px;
    height: 100%;
    background: rgb(0 0 0 / 0.05);
    content: "";
  }

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 2px;
    height: 100%;
    background: rgb(255 255 255 / 0.1);
    content: "";
  }
`;

const DimmedBookRight = styled.span`
  position: absolute;
  inset: 0;

  &:after {
    position: absolute;
    top: 0;
    right: 0;

    width: 2px;
    height: 100%;

    background: #000;
    filter: blur(1px);
    opacity: 0.12;

    content: "";
  }
`;

const TextPublisher = styled.span`
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  line-height: 18px;
  letter-spacing: 0.2px;
  text-align: center;

  position: absolute;
  left: 0;
  bottom: 13px;

  display: block;
  width: 100%;
  z-index: 1;
`;

const InfoRelease = styled.span`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 92px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    background: url("https://t1.daumcdn.net/brunch9/static/images/pc/bg_brunchhome.png")
      no-repeat;
    width: 357px;
    height: 53px;
    content: "";

    display: block;
    position: absolute;
    bottom: 88px;
    left: 119px;
  }
`;

const InnerInfo = styled.span`
  font-size: 12px;
  text-align: center;

  display: block;
  height:fit-content;


  span {
    display: block;
  }
  .txt_g {
    color: #959595;
    letter-spacing: -.1px;
  }
  .
`;

////////////////기본 UI ////////////////
const DefaultLink = styled(Link)`
  text-decoration: none;

  width: 100%;
  height: 100%;
  display: block;

  overflow: hidden;
  position: relative;
`;
