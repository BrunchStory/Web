import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: string | number;
  children?: ReactNode;
}

// width값이 string일 경우 % number일 경우 px로 정하기

const SideBar = ({ isOpen, setIsOpen, width, children }: Props) => {
  const outside = useRef<any>();

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (!outside.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", onClickOutside);

    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [setIsOpen]);

  return (
    <SdieBarContainer $width={width} $isOpen={isOpen.toString()} ref={outside}>
      {children}
    </SdieBarContainer>
  );
};

export default SideBar;

const SdieBarContainer = styled.div<{
  $width: number | string;
  $isOpen: string;
}>`
  z-index: 5;
  padding: 12px;
  background-color: blue;
  height: 100%;
  border: 1px solid #000;
  width: ${({ $width }) =>
    typeof $width === "string" ? $width + "%" : `${$width}px`};
  max-width: 300px;
  left: ${(props) => (props.$isOpen === "true" ? 0 : "-55%")};
  top: 0;
  position: fixed;
  transition: ${(props) =>
    props.$isOpen === "true" ? "0.8s ease" : "0.8s ease-in"};
`;

SideBar.defaultProps = {
  width: 280,
};