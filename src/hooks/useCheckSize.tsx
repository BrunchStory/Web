import React, { useEffect, useState } from "react";

export const useCheckSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const updateWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  useEffect(() => {
    const checkMobile = width <= 479;
    const checkTablet = width >= 480 && width <= 768;
    setIsMobile(checkMobile);
    setIsTablet(checkTablet);
  }, [width]);

  return { isMobile, isTablet };
};
