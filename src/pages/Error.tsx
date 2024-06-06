import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <>
      <ErrorStyle>
        <div className="container">
          <img
            src="https://t1.daumcdn.net/brunch/static/img/help/pc/img_logo_error.png"
            alt="brunch"
          />
          <div className="title">원하시는 페이지를 찾을 수 없습니다.</div>
          <div className="desc">
            찾으려는 페이지의 주소가 잘못 입력되었거나,
            <br />
            주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
            <br />
            입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
          </div>
          <Link to="https://brunch.co.kr" className="alert-button">
            서비스 홈 가기
          </Link>
        </div>
      </ErrorStyle>
    </>
  );
};

const ErrorStyle = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  background-color: rgb(249, 249, 249);

  .container {
    width: 100%;
    height: auto;
    text-align: center;
    background-image: url("https://t1.daumcdn.net/brunch/static/img/help/pc/img_error_404.png");

    img {
      margin-bottom: 6px;
    }
    .title {
      font-size: 22px;
      letter-spacing: -1px;
      font-family: "Noto Sans Light";
    }
    .desc {
      color: #959595;
      font-size: 14px;
      line-height: 22px;
      margin-top: 2px;
    }
    .alert-button {
      display: inline-block;
      border: 1px solid #bbb;
      color: #959595;
      height: 30px;
      border-radius: 16px;
      font-size: 13px;
      line-height: 32px;
      margin-top: 25px;
      padding: 0 20px;
    }
  }
`;

export default Error;
