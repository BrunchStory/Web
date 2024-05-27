import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../hooks/redux";
import { checkY } from "../store/slices/navheaderSlice";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../styles/global";
import { toggle } from "../store/slices/sidebarSlice";

interface PropsType {
  setClosed?: React.Dispatch<React.SetStateAction<boolean>>; //베너 닫기
  setIsSearch?: React.Dispatch<React.SetStateAction<boolean>>; // 서치 페이지 열기
  isModalOpen?: () => void; // 모달 오픈
  closed?: boolean;
  type: string;
}

interface NavType {
  [key: string]: {
    center: {
      display: string;
    };
    last: {
      display: string;
    };
    style?: {
      position: string;
      bgcPLogo: string;
      bgcPSearch: string;
      bgcPStr: string;
    };
  };
}

interface Props {
  headerprops?: PropsType;
}

const NavHeader = ({ headerprops }: Props) => {
  const {
    setIsSearch,
    setClosed,
    isModalOpen,
    closed,
    type = "default",
  } = headerprops || {};
  const dispatch = useTypedDispatch();
  const show = useTypedSelector((state) => state.navheader.show);

  useEffect(() => {
    const scrollEvent = () => {
      if (closed && window.scrollY >= 345) {
        dispatch(checkY(true));
      } else {
        dispatch(checkY(false));
      }
    };

    window.addEventListener("scroll", scrollEvent);

    return () => window.removeEventListener("scroll", scrollEvent);
  }, [closed, dispatch]);

  const onClick = () => {
    dispatch(toggle(true));
    setClosed?.(true);
  };

  return (
    <NavContainer
      $show={show}
      $type={type}
      className={show ? "top beyond_content" : "top"}
    >
      <WrapInner className="wrap_inner">
        <div className="f_l">
          <MenuBtn
            onClick={onClick}
            width={27}
            height={20}
            radius={0}
            className="btn_menu f_l"
            $type={type}
          >
            메뉴
          </MenuBtn>
          <h1 className="f_l">
            <LogoService $type={type} to={"/"}>
              brunch
            </LogoService>
          </h1>
        </div>
        <div className="f_r" style={{ display: navType[type].center.display }}>
          <WrapBtnSearch $type={type}>
            <form action="/search" method="get">
              <input
                name="q"
                type="text"
                title="검색어입력"
                placeholder="검색어를 입력해 주세요"
              />
              <input name="profileId" type="hidden" />
            </form>
            <Button
              type="button"
              className="f_r img_ico text_hide btn_search #search_btn"
              onClick={() => setIsSearch?.(true)}
            >
              검색
            </Button>
          </WrapBtnSearch>
        </div>
        <div
          style={{ display: navType[type].last.display }}
          className="f_r"
          onClick={() => isModalOpen?.()}
        >
          <Start to={"#"} className="f_r btn_request btn_default #home_join">
            시작하기
          </Start>
        </div>
      </WrapInner>
    </NavContainer>
  );
};

export default NavHeader;

const navType: NavType = {
  default: {
    center: {
      display: "block",
    },
    last: {
      display: "block",
    },
    style: {
      position: "static",
      bgcPStr: "0 -80px",
      bgcPSearch: "-30px 0",
      bgcPLogo: "0 0",
    },
  },
  search: {
    center: {
      display: "none",
    },
    last: {
      display: "none",
    },
    style: {
      position: "static",
      bgcPStr: "0 -80px",
      bgcPSearch: "-30px 0",
      bgcPLogo: "0 0",
    },
  },
  apply: {
    center: {
      display: "block",
    },
    last: {
      display: "none",
    },
    style: {
      position: "fixed",
      bgcPStr: "-120px -80px",
      bgcPSearch: "-30px -30px",
      bgcPLogo: "0 -30px",
    },
  },
  flow: {
    center: {
      display: "block",
    },
    last: {
      display: "none",
    },
    style: {
      position: "fixed",
      bgcPStr: "0 -80px",
      bgcPSearch: "-30px 0",
      bgcPLogo: "0 0",
    },
  },
};

NavHeader.defaultProps = {
  headerprops: {
    type: "default",
  },
};

interface NavContainerProps {
  $show: boolean;
  $type: any;
}

const NavContainer = styled.div<NavContainerProps>`
  position: ${(props) => navType[props.$type].style?.position || "static"};
  float: left;
  height: 80px;
  width: 100%;
  z-index: 10000;
  ${(props) =>
    props.$show &&
    css`
      background-color: hsla(0, 0%, 100%, 0.9);
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      height: 60px;
      position: fixed;
      top: 0;
      transition: background-color 0.1s ease-in;
      width: 100%;
      z-index: 10000;
    `}
`;

const WrapInner = styled.div`
  margin: 30px 30px 0;

  .f_l {
    float: left;
  }

  .f_r {
    float: right;
  }

  h1 {
    display: inline-block;
  }
`;

const MenuBtn = styled(Button)<{ $type: string }>`
  margin-right: 14px;
  background: url(//t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4_230130.png)
    no-repeat;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
  background-position: ${(props) => navType[props.$type].style?.bgcPLogo};
  /* background-position: 0 0; */
`;

const LogoService = styled(Link)<{ $type: string }>`
  width: 120px;
  background: url(//t1.daumcdn.net/brunch9/static/images/pc/logo_brunch_v1_221221.png)
    no-repeat;
  display: block;
  height: 22px;
  margin-top: -1px;
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
  background-position: ${(props) => navType[props.$type].style?.bgcPStr};
  /* background-position: 0 -80px; */
`;

const WrapBtnSearch = styled.div<{ $type: string }>`
  input {
    display: none;
  }

  input[type="hidden" i] {
    appearance: none;
    background-color: initial;
    cursor: default;
    display: none !important;
    padding: initial;
    border: initial;
  }

  .img_ico {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/ico_view_cover.v4_230130.png)
      no-repeat;
  }

  .btn_search {
    margin: 0 0 0 16px;
    background-position: ${(props) => navType[props.$type].style?.bgcPSearch};
    /* background-position: -30px 0; */

    display: inline-block;
    height: 22px;
    width: 22px;
    line-height: 0;
    overflow: hidden;
    text-indent: -9999px;
  }
`;

const Start = styled(Link)`
  width: 64px;
  height: 28px;
  border: 1px solid #959595;
  border-radius: 16px;
  margin-top: -5px;
  color: #666;
  font-size: 12px;
  line-height: 27px;
  text-align: center;

  .btn_default {
    background-color: #fff;
    opacity: 0.9;
  }
`;
