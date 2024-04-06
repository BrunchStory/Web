import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface IconProps {
  $posX: string;
  $posY: string;
}

interface ButtonProps {
  $moreInfo: boolean;
}
interface ListItem {
  title: string;
  link: string;
}

const listService: ListItem[] = [
  { title: "브런치 이용안내", link: "/" },
  { title: "작가신청", link: "/" },
  { title: "작가 지원 프로젝트", link: "/" },
  { title: "제휴제안", link: "/" },
  { title: "고객센터", link: "/" },
];

const listPolicy: ListItem[] = [
  { title: "이용약관", link: "/" },
  { title: "이전 이용약관", link: "/" },
  { title: "카카오 유료서비스", link: "/" },
  { title: "카카오 개인정보 처리방침", link: "/" },
  { title: "청소년 보호정책", link: "/" },
  { title: "운영정책", link: "/" },
];

const listSns: ListItem[] = [
  { title: "브런치스토리팀 공지사항", link: "/" },
  { title: "공식 카카오톡 채널", link: "/" },
  { title: "공식 인스타그램", link: "/" },
  { title: "제휴제안", link: "/" },
  { title: "공식 페이스북", link: "/" },
];

const Footer = () => {
  const [moreInfo, setMoreInfo] = useState(false);
  const moreInfoClick = () => {
    setMoreInfo((prev) => !prev);
  };
  return (
    <StyledFooter>
      <InnerFoot>
        <WrapInfo>
          <div style={{ marginRight: "auto" }}>
            <BrunchIcon></BrunchIcon>
            <Slogan>
              You can make anything <br />
              by writing
            </Slogan>
            <SloganWriter>C.S.Lewis</SloganWriter>
          </div>
          <LinkContainer>
            {listService.map((item, i) => (
              <LinkItem key={i}>
                <StyledLink to={item.link}>{item.title}</StyledLink>
              </LinkItem>
            ))}
          </LinkContainer>

          <LinkContainer>
            {listPolicy.map((item, i) => (
              <LinkItem key={i}>
                <StyledLink to={item.link}>{item.title}</StyledLink>
              </LinkItem>
            ))}
          </LinkContainer>

          <LinkContainer>
            {listSns.map((item, i) => (
              <LinkItem key={i}>
                <StyledLink to={item.link}>{item.title}</StyledLink>
              </LinkItem>
            ))}
          </LinkContainer>
        </WrapInfo>

        <WrapCorp>
          <div style={{ fontSize: "14px", width: "800px" }}>
            <LinkCorp onClick={moreInfoClick}>
              <Small>© Kakao Corp.</Small>
              <MoreButton $moreInfo={moreInfo}></MoreButton>
            </LinkCorp>

            {moreInfo && (
              <CorpInfoList>
                <li>대표이사 : 정신아 | &nbsp;</li>
                <li>사업자등록번호 : 120-81-47521 | &nbsp;</li>
                <li>
                  통신판매업신고번호 : &nbsp;
                  <Link to="/" style={{ color: "#595959" }}>
                    제2015-제주아라-0032호
                  </Link>
                </li>
                <li>
                  주소 : 제주특별자치도 제주시 첨단로 242(영평동) | &nbsp;
                </li>
                <li>호스팅서비스사업자 : (주)카카오 | &nbsp;</li>
                <li>고객센터 : 1577-3754 </li>
                <li>이메일 : help.notice@kakaocorp.com</li>
              </CorpInfoList>
            )}
          </div>

          <LinkIcons>
            <LinkIcon
              $posX="-260px"
              $posY="-100px"
              to="https://play.google.com/store/apps/details?id=com.daumkakao.android.brunchapp"
            >
              안드로이드 앱 다운로드
            </LinkIcon>
            <LinkIcon
              $posX="-290px"
              $posY="-100px"
              to="https://apps.apple.com/kr/app/%EB%B8%8C%EB%9F%B0%EC%B9%98%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A2%8B%EC%9D%80-%EA%B8%80%EA%B3%BC-%EC%9E%91%EA%B0%80%EB%A5%BC-%EB%A7%8C%EB%82%98%EB%B3%B4%EC%84%B8%EC%9A%94/id1001388574"
            >
              아이폰 앱 다운로드
            </LinkIcon>
          </LinkIcons>
        </WrapCorp>
      </InnerFoot>
    </StyledFooter>
  );
};

export default Footer;

const LinkCorp = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  overflow: hidden;
`;

const MoreButton = styled.button<ButtonProps>`
  background: url("https://t1.daumcdn.net/brunch9/static/imgs/icons/pc_ico_brunch_pc_v231211.png")
    no-repeat;
  background-position: -128px 0;
  transform: ${(props) => !props.$moreInfo && "rotate(180deg)"};

  width: 22px;
  height: 22px;

  border: none;
`;
const LinkIcons = styled.div`
  display: flex;
  gap: 24px;
  margin-left: auto;
`;
const StyledFooter = styled.footer`
  background-color: #101010;
  color: #fff;

  height: 417px;
`;

const InnerFoot = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 39px 0;
`;

const LinkIcon = styled(Link)<IconProps>`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v9_230901.png")
    no-repeat;

  background-position: ${(props) => props.$posX} ${(props) => props.$posY};

  width: 20px;
  height: 22px;

  display: block;

  text-indent: -9999px;
`;
const WrapInfo = styled.div`
  padding-bottom: 45px;
  display: flex;
`;
const LinkContainer = styled.ul`
  font-family: "Noto Sans";
  font-size: 13px;
  font-weight: 300;
  letter-spacing: -0.8px;

  list-style: none;

  margin: 0 0 0 104px;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LinkItem = styled.li`
  line-height: 33px;
`;

/** Link 태그 기본 속성 */
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #bfbfbf;

  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const BrunchIcon = styled.span`
  background: url("https://t1.daumcdn.net/brunch9/static/images/pc/ico_brunch_v9_230901.png");
  background-position: -320px -112px;
    no-repeat;

    width: 32px;
    height: 32px;

    margin: 12px 0 18px;

  display: block;
`;

const Slogan = styled.p`
  font-family: Georgia, serif; /** 브라우저가 지원하는 폰트 (별도 설치 안함)*/
  font-size: 16px;
  font-style: italic;
  line-height: 20px;
`;

const SloganWriter = styled.p`
  font-family: Georgia, serif;
  font-size: 11px;
  font-style: italic;
  letter-spacing: 0.55px;

  margin: 7px 0 0;
`;

const WrapCorp = styled.div`
  display: flex;
  padding-top: 22px;
`;

const CorpInfoList = styled.ul`
  font-size: smaller;
  color: #595959;
  line-height: 20px;

  list-style: none;

  margin: 10px 0 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
`;

const Small = styled.small`
  font-family: Georgia, serif;
  font-size: 11px;
  font-style: italic;
  opacity: 0.4;
`;
