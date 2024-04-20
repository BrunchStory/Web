import React from "react";
import styled from "styled-components";

interface ButtonProps {
  $top: string;
  $left?: string;
  $right?: string;
}

interface ButtonImageProps {
  $backgroundPosition: string;
}

export const LeftButton = ({ $top, $left }: ButtonProps) => {
  return (
    <ButtonContainer $top={$top} $left={$left}>
      <ButtonImage $backgroundPosition="-167px -175px">
        이전 에디터픽 보기
      </ButtonImage>
    </ButtonContainer>
  );
};

export const RightButton = ({ $top, $right }: ButtonProps) => {
  return (
    <ButtonContainer $top={$top} $right={$right}>
      <ButtonImage $backgroundPosition="-269px -175px">
        이전 에디터픽 보기
      </ButtonImage>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<ButtonProps>`
  position: absolute;
  z-index: 99;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left ?? "auto"};
  right: ${(props) => props.$right ?? "auto"};
  transform: translateY(-50%);
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  cursor: pointer;
`;

const ButtonImage = styled(Button)<ButtonImageProps>`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v9_230901.png")
    no-repeat;
  background-position: ${(props) => props.$backgroundPosition};

  display: block;
  width: 100px;
  height: 101px;

  text-indent: -9999px;
`;
