import styled, { css, keyframes } from "styled-components";
import React from "react";

interface Props {
  width?: number | string;
  height?: number | string;
  radius?: number;
  style?: React.CSSProperties;
}

interface SpaceProps {
  width?: number | string;
  height?: number | string;
}

export const Img = styled.img<Props>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  background-size: contain;
  ${(props) =>
    props.style &&
    `
    ${Object.entries(props.style)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
  `};
`;

export const Button = styled.button<Props>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "100%")};
  background-color: transparent;
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.radius &&
    css`
      border-radius: ${props.radius}px;
    `};

  ${(props) =>
    props.style &&
    `
      ${Object.entries(props.style)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n")}
    `}
`;

export const WhiteSpace = styled.div<SpaceProps>`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => (props.height ? `${props.height}px` : "50px")};
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;
