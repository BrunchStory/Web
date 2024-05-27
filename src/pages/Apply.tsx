import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { WriteFlow } from "../components/WriteFlow";

interface WriteState {
  step1: string;
  step2: string;
  step3: string;
  [key: string]: string;
}

const Apply = () => {
  const [clickNext, setClickNext] = useState(0);
  const [check, setCheck] = useState(false);
  const inside = useRef<any>();

  const [write, setWrite] = useState<WriteState>({
    step1: "",
    step2: "",
    step3: "",
  });

  const [error, setError] = useState({
    step1: false,
    step2: false,
    step3: false,
    step4: false,
  });

  const checkWrite = (
    word: "step1" | "step2",
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const words = e.target.value;

    setWrite((prev) => ({ ...prev, [word]: words }));
  };

  useEffect(() => {
    const init = setTimeout(() => {
      setError({
        step1: false,
        step2: false,
        step3: false,
        step4: false,
      });
    }, 4000);

    return () => clearTimeout(init);
  }, [check]);

  const onNext = (direction: "prev" | "next", step: string) => {
    const directionCase = {
      next: () => {
        if (write[step]?.length === 0 && step !== "step4") {
          setError((prev) => ({ ...prev, [step]: true }));
          setCheck((prev) => !prev);
        } else {
          setClickNext((prev) => {
            if (prev === 4) {
              return (prev += 0);
            }

            prev += 1;

            return prev;
          });
        }
      },
      prev: () => {
        setClickNext((prev) => {
          prev -= 1;

          return prev;
        });
      },
    };

    return directionCase[direction]();
  };

  const stepProps = {
    checkWrite,
    write,
    error,
    inside,
    setError,
    setCheck,
    setClickNext,
  };

  return (
    <ApplyContainer>
      <InfoFlow>
        <TxtMegaphone>
          브런치
          <br />
          작가를 애타게
          <br />
          찾고 있습니다.
        </TxtMegaphone>
        <FlowApply>
          <span>작가 신청서</span>
        </FlowApply>
      </InfoFlow>
      <ContainerJoin className={clickNext === 4 ? "container_complete" : ""}>
        {clickNext === 4 ? (
          <WriteFlow
            stepprops={stepProps}
            onNext={onNext}
            clickNext={clickNext}
          />
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <WriteFlow
              stepprops={stepProps}
              onNext={onNext}
              clickNext={clickNext}
            />
          </form>
        )}
      </ContainerJoin>
    </ApplyContainer>
  );
};

export default Apply;

const ApplyContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eaeaea;
`;

const InfoFlow = styled.div`
  position: absolute;
  z-index: 20;
  top: 95px;
  left: 30px;
`;

const TxtMegaphone = styled.p`
  color: #666;
  font-family: Nanum Myeongjo, serif;
  letter-spacing: -0.5px;
  line-height: 18px;
`;

const FlowApply = styled.div`
  margin: -10px 0 0 -4px;
  transform: rotate(90deg);
  transform-origin: 0 100%;

  &::before {
    display: inline-block;
    width: 60px;
    height: 1px;
    margin-right: 14px;
    background: #666;
    content: "";
  }

  span {
    color: #666;
    font-family: Nanum Myeongjo, serif;
    font-size: 18.1px;
    letter-spacing: 0.5px;
    vertical-align: bottom;
  }
`;

const ContainerJoin = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  min-width: 1000px;
  min-height: 750px;
  background: #eaeaea;

  h3 {
    margin-top: -3px;
    color: #00c6be;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.25px;
    line-height: 20px;
  }

  .tit_jojn {
    margin: 29px 0 0 -2px;
    color: #333;
    font-family: Nanum Myeongjo, serif;
    font-size: 32px;
    letter-spacing: -0.9px;
    line-height: 40px;
  }

  form::after {
    display: block;
    clear: both;
    content: "";
  }

  fieldset {
    border: 0;
    min-width: 0;
  }

  label {
    display: block;
    cursor: pointer;
  }

  .txt_info {
    display: block;
    margin-top: 7px;
    color: #959595;
    font-size: 13px;
    letter-spacing: -0.25px;
    line-height: 20px;
  }
  .step2 .txt_warning {
    bottom: 106px;
  }

  .txt_warning {
    position: absolute;
    bottom: 126px;
    left: 55px;
    width: 350px;
    height: 134px;
    background-color: #fff;
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
    color: #ff5c5c;
    font-size: 13px;
    letter-spacing: -0.25px;
    line-height: 22px;
  }

  .step3 .txt_warning,
  .step4 .txt_warning {
    z-index: 1;
    overflow: hidden;
    box-sizing: border-box;
    color: #ff5c5c;
    font-size: 13px;
    letter-spacing: -0.25px;
    line-height: 22px;
    position: static;
  }

  textarea {
    position: absolute;
    bottom: 103px;
    left: 40px;
    width: 620px;
    height: 170px;
    box-sizing: border-box;
    padding: 12px 14px;
    border: solid 1px #e1e1e1;
    background: transparent;
    box-shadow: none;
    color: #171817;
    font-size: 13px;
    line-height: 22px;
    outline: none;
    resize: none;
    vertical-align: middle;
  }

  .txt_count {
    position: absolute;
    right: 43px;
    bottom: 289px;
    color: #959595;
    font-size: 13px;
    line-height: 20px;
  }

  .step2 {
    bottom: 268px;
  }

  .btn_layer {
    position: absolute;
    right: 40px;
    bottom: 40px;
    left: 40px;
  }

  .help {
    position: absolute;
    bottom: -50px;
    left: 0;
  }

  textarea[name="plan"] {
    width: 620px;
    height: 150px;
  }

  .tit_check {
    display: block;
    padding-top: 30px;
    color: #666;
    font-weight: 400;
  }

  .txt_post {
    height: 104px;
    margin-top: 13px;
    color: #ff5c5c;
    font-size: 12px;
  }
  .lab_lf {
    padding-top: 16px;
    border-top: 1px solid #f4f4f4;
    margin-top: 18px;
  }

  .txt_lab {
    color: #959595;
    font-size: 13px;
    letter-spacing: -0.5px;
  }

  .bundle_tf {
    display: block;
    width: 311px;
    height: 34px;
    box-sizing: border-box;
    padding: 6px 0 0 10px;
    border: 1px solid #e1e1e1;
    margin: 5px -1px 0 0;
    letter-spacing: -0.5px;
  }

  .tf_url {
    width: 250px;
    border: 0 none;
    box-shadow: none;
    color: #333;
    font-size: 12px;
    outline: none;
    vertical-align: top;
  }

  input[type="url"] {
    padding-block: 1px;
    padding-inline: 2px;
  }

  .list_sns {
    padding-top: 24px;
  }

  .inp_radio {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 10px;
    height: 10px;
    opacity: 0;
  }

  input[type="radio" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    border: initial;
  }

  .inp_radio:checked + .sns_join {
    background-position-y: -40px;
  }

  .sns_join {
    display: block;
    overflow: hidden;
    width: 40px;
    height: 40px;
    background-image: url(//t1.daumcdn.net/brunch/static/img/request/r2/sns_join.gif);
    background-size: 240px 80px;
    text-indent: -999px;
  }

  .ico_fb {
    background-position: -40px 0;
  }

  .ico_nb {
    background-position: -80px 0;
  }

  .ico_ts {
    background-position: -120px 0;
  }

  .ico_dm {
    background-position: -160px 0;
  }

  .ico_in {
    background-position: -200px 0;
  }

  .list_sns::after {
    display: block;
    clear: both;
    content: "";
  }

  li {
    margin-right: 10px;
    float: left;
  }

  .bundle_url {
    display: block;
    padding: 27px 0 10px;
    border: 0 none;
    border-bottom: 1px solid #ddd;
    font-size: 0;
  }

  .lab_tf {
    display: block;
  }

  .bundle_url .tf_url {
    width: 559px;
    font-size: 20px;
  }

  .tf_url {
    border: 0 none;
    box-shadow: none;
    color: #333;
    outline: none;
    vertical-align: top;
  }

  .choice_comm {
    color: #333;
    font-size: 12px;
    font-weight: 300;
    position: relative;
    display: block;
  }

  .inp_comm {
    position: absolute;
    z-index: -1;
    top: 2px;
    left: 0;
    width: 18px;
    height: 18px;
    border: 0 none;
    opacity: 0.01;
    vertical-align: top;
  }

  .choice_checkbox .inp_comm + .ico_signin {
    background-position: -97px -28px;
  }
  .ico_signin {
    height: 18px;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 1px;
    width: 19px;
  }
  .ico_signin {
    background: url(//t1.daumcdn.net/brunch/static/img/help/pc/ico_sidebar_rtn.png)
      no-repeat;
    background-size: 200px 50px;
    display: inline-block;
    line-height: 0;
    overflow: hidden;
    text-indent: -9999px;
    vertical-align: top;
  }

  .lab_comm {
    padding-top: 2px;
  }

  .lab_comm {
    display: block;
    overflow: hidden;
    padding-left: 25px;
    color: #666;
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .link_view {
    margin-left: 3px;
  }

  .link_view {
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: underline;
    text-decoration-color: #bbb;
    text-underline-offset: 2px;
  }

  .agree_sns {
    margin-top: 10px;
  }

  .choice_checkbox .inp_comm:checked + .ico_signin {
    background-position: -74px -28px;
  }

  .txt_warning_wrapper {
    margin-top: 4px;
    margin-left: 26px;
  }

  .container_complete::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url(https://t1.daumcdn.net/brunch/static/img/request/bg_complete.jpg)
      no-repeat 50% 50%;
    background-size: cover;
    content: "";
    opacity: 0.5;
  }

  .tit_join {
    margin: 29px 0 0 -2px;
    margin-top: 51px;
    color: #333;
    font-family: Nanum Myeongjo, serif;
    font-size: 32px;
    letter-spacing: -0.9px;
    line-height: 40px;
  }

  .tit_join + .txt_info {
    margin-top: 22px;
  }

  .txt_info + .txt_info {
    margin-top: 10px;
  }

  .txt_info a {
    border-bottom: 1px solid #ddd;
    color: #959595;
  }

  .bundle_link {
    position: absolute;
    bottom: 48px;
    left: 40px;
    font-size: 0;
  }

  .bundle_link a {
    display: inline-block;
    border-bottom: 1px solid #ddd;
    margin: 0 14px 0 0;
    color: #959595;
    font-size: 12px;
    line-height: 13px;
  }

  .btn_join {
    position: absolute;
    right: -370px;
    bottom: -7px;
    width: 150px;
  }
`;
