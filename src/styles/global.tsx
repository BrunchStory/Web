import styled from "styled-components";
import React from "react";

interface ImgProps {
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
}

export const Img = styled.img<ImgProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  ${(props) =>
    props.style &&
    `
    ${Object.entries(props.style)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")}
  `}
`;
