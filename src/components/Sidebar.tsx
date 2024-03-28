import React, { ReactNode, useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  width: string | number;
  children?: ReactNode;
}

// width값이 string일 경우 % number일 경우 px로 정하기

const SideBar = ({ isOpen, setIsOpen, width, children }: Props) => {
  const outside = useRef<any>();
  const style: any = {
    zIndex: 5,
    padding: "12px",
    backgroundColor: "blue",
    height: "100%",
    border: "1px solid #000",
    width: typeof width === "string" ? width + "%" : `${width}px`,
    maxWidth: "300px",
    left: isOpen ? 0 : "-55%",
    top: 0,
    position: "fixed",
    transition: isOpen ? "0.8s ease" : "0.8s ease-in",
  };

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
    <div style={style} ref={outside}>
      {children}
    </div>
  );
};

export default SideBar;

SideBar.defaultProps = {
  width: 280,
};
