import React from "react";
import styled from "styled-components";

interface ButtonProps {
  $top: string;
  $left?: string;
  $right?: string;
  onClick: (e: React.MouseEvent<HTMLSpanElement>) => void;
}

export const LeftButton = ({ $top, $left, onClick }: ButtonProps) => {
  return (
    <ButtonContainer $top={$top} $left={$left} onClick={onClick}>
      <ButtonImage $backgroundPosition="-167px -175px">
        이전 에디터픽 보기
      </ButtonImage>
    </ButtonContainer>
  );
};

export const RightButton = ({ $top, $right, onClick }: ButtonProps) => {
  return (
    <ButtonContainer $top={$top} $right={$right} onClick={onClick}>
      <ButtonImage $backgroundPosition="-269px -175px">
        다음 에디터픽 보기
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

const ButtonImage = styled(Button)<{ $backgroundPosition: string }>`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v9_230901.png")
    no-repeat;
  background-position: ${(props) => props.$backgroundPosition};

  display: block;
  width: 100px;
  height: 101px;

  text-indent: -9999px;
`;
