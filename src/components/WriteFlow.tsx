import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../styles/global";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  onNext: (direction: "prev" | "next", e: any) => void;
  clickNext: number;
  stepprops: {
    checkWrite: (
      word: "step1" | "step2",
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => void;
    write: {
      step1: string;
      step2: string;
      step3: string;
    };
    error: {
      step1: boolean;
      step2: boolean;
      step3: boolean;
      step4: boolean;
    };
    inside: React.ForwardedRef<any>;
    setError: any;
    setCheck: React.Dispatch<React.SetStateAction<boolean>>;
    setClickNext: React.Dispatch<React.SetStateAction<number>>;
  };
}

export const WriteFlow = ({ onNext, clickNext, stepprops }: Props) => {
  const { checkWrite, write, error, inside, setError, setCheck, setClickNext } =
    stepprops;

  const res = {
    checkWrite,
    write,
    onNext,
    error,
    inside,
    setError,
    setCheck,
    setClickNext,
  };

  const list: any = {
    0: <BoxType1 {...res} />,
    1: <BoxType2 {...res} />,
    2: <BoxType3 {...res} />,
    3: <BoxType4 {...res} />,
    4: <BoxType5 {...res} />,
  };

  return list[clickNext];
};

const BoxType1 = ({ ...res }: any) => {
  const { checkWrite, onNext, write, error, inside, setError } = res;

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (inside.current.contains(e.target)) {
        setError((prev: any) => ({ ...prev, step1: false }));
      }
    };

    window.addEventListener("mousedown", onClickOutside);

    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [setError, inside]);
  return (
    <Box>
      <h3>01. 작가소개</h3>
      <p className="tit_jojn">작가님이 궁금해요</p>
      <fieldset>
        <ScreenOut>정보입력</ScreenOut>
        <label>
          <span className="txt_info">
            작가님이 누구인지 이해하고 앞으로 브런치스토리에서 어떤 활동을
            보여주실지
            <br />
            기대할 수 있도록 알려주세요
          </span>
          <span
            className="txt_warning"
            style={{ display: error.step1 ? "inline" : "none" }}
          >
            자기 소개가 입력되지 않았습니다. <br />
            작가님에 대해 알려주세요.
          </span>
          <textarea
            ref={inside}
            onChange={(e) => checkWrite("step1", e)}
            maxLength={300}
            value={write.step1}
            placeholder="작가 소개를 입력해 주세요."
          ></textarea>
        </label>
        <span className="txt_count">
          <ScreenOut>작성중인 글자수</ScreenOut>
          <span>{write.step1.length}/300</span>
        </span>
      </fieldset>
      <fieldset className="btn_layer">
        <ScreenOut>버튼 모음입니다</ScreenOut>
        <JoinBtn
          onClick={() => onNext("next", "step1")}
          width={80}
          height={32}
          radius={30}
        >
          다음
        </JoinBtn>
      </fieldset>
      <div className="help txt_info">
        <span>
          작가 소개 신청 시, 소중한 정보 보호를 위해 불필요한 개인정보는
          포함하지 않도록 주의를 부탁드려요!
        </span>
      </div>
    </Box>
  );
};

const BoxType2 = ({ ...res }: any) => {
  const { checkWrite, onNext, write, error, inside, setError } = res;

  useEffect(() => {
    const onClickOutside = (e: any) => {
      if (inside.current.contains(e.target)) {
        setError((prev: any) => ({ ...prev, step2: false }));
      }
    };

    window.addEventListener("mousedown", onClickOutside);

    return () => window.removeEventListener("mousedown", onClickOutside);
  }, [setError, inside]);

  return (
    <Box>
      <h3>02. 브런치스토리 활동 계획</h3>
      <p className="tit_jojn">
        브런치스토리에서 어떤 글을
        <br />
        발행하고 싶으신가요?
      </p>
      <fieldset>
        <ScreenOut>정보입력</ScreenOut>
        <label className="step2">
          <span className="txt_info">
            발행하고자 하는 글의 주제나 소재, 대략의 목차를 알려주세요.
          </span>
          <span
            className="txt_warning"
            style={{ display: error.step2 ? "inline" : "none" }}
          >
            활동 계획이 입력되지 않았습니다.
            <br />
            작가님의 활동을 기대할 수 있도록 미리 알려주세요.
          </span>
          <textarea
            ref={inside}
            name="plan"
            value={write.step2}
            onChange={(e) => checkWrite("step2", e)}
            maxLength={300}
            placeholder="활동 계획을 입력해주세요."
          ></textarea>
        </label>
        <span className="txt_count step2">
          <ScreenOut>작성중인 글자수</ScreenOut>
          <span>{write.step2.length}/300</span>
        </span>
      </fieldset>
      <fieldset className="btn_layer">
        <ScreenOut>버튼 모음입니다</ScreenOut>
        <JoinBtn
          onClick={() => onNext("prev")}
          width={80}
          name="prev"
          height={32}
          radius={30}
        >
          이전
        </JoinBtn>
        <JoinBtn
          onClick={() => onNext("next", "step2")}
          width={80}
          height={32}
          radius={30}
        >
          다음
        </JoinBtn>
      </fieldset>
    </Box>
  );
};

const BoxType3 = ({ ...res }: any) => {
  const { checkWrite, onNext, write, error } = res;

  return (
    <Box>
      <h3>03. 자료첨부</h3>
      <div style={{ float: "left" }}>
        <p className="tit_jojn">
          내 서랍속에 저장!
          <br />
          이제 꺼내주세요.
        </p>
        <p className="txt_info">
          '작가의 서랍'에 저장해둔 글<br />
          또는 외부에 작성한 게시글 주소를 첨부해주세요.
          <br />
          선정 검토 시 가장 중요한 자료가 됩니다.
        </p>
      </div>
      <fieldset>
        <ScreenOut>정보입력</ScreenOut>
        <strong className="tit_check">브런치스토리 저장글</strong>
        <p className="txt_post">저장글이 없습니다.</p>
        <label className="lab_lf step3">
          <span className="txt_lab">
            이 외에 온라인매체 기고글이나 출간 책 주소 입력
          </span>
          <span className="bundle_tf" style={{ marginBottom: "10px" }}>
            <input
              className="tf_url"
              type="url"
              name="refUrl"
              placeholder="https://"
              value={write.step3}
              onChange={(e) => checkWrite("step3", e)}
            />
          </span>
          <span
            className="txt_warning"
            style={{ display: error.step3 ? "inline" : "none" }}
          >
            저장글 또는 참고용 글 주소를 첨부해주세요.
          </span>
        </label>
      </fieldset>
      <fieldset className="btn_layer">
        <ScreenOut>버튼 모음입니다</ScreenOut>
        <JoinBtn
          name="prev"
          onClick={() => onNext("prev")}
          width={80}
          height={32}
          radius={30}
        >
          이전
        </JoinBtn>
        <JoinBtn
          onClick={() => onNext("next", "step3")}
          width={80}
          height={32}
          radius={30}
        >
          다음
        </JoinBtn>
      </fieldset>
    </Box>
  );
};

const BoxType4 = ({ ...res }: any) => {
  const { onNext, error, setError, setCheck } = res;
  const [urlList, setUrlList] = useState([
    {
      className: "sns_join ico_url",
      checked: true,
      text: "url",
      name: "url",
    },
    {
      className: "sns_join ico_fb",
      checked: false,
      text: "페이스북",
      name: "fb",
    },
    {
      className: "sns_join ico_nb",
      checked: false,
      text: "네이버",
      name: "nb",
    },
    {
      className: "sns_join ico_ts",
      checked: false,
      text: "티스토리",
      name: "ts",
    },
    {
      className: "sns_join ico_dm",
      checked: false,
      text: "미디엄",
      name: "dm",
    },
    {
      className: "sns_join ico_in",
      checked: false,
      text: "링크드인",
      name: "in",
    },
  ]);
  const [url, setUrl] = useState<any>({
    url: "",
    fb: "https://facebook.com/",
    nb: "https://blog.naver.com/",
    ts: "https://tistory.com/",
    dm: "https://medium.com/@",
    in: "https://www.linkedin.com/in/",
  });
  const [selected, setSelected] = useState("url");
  const [agree, setAgree] = useState(false);
  const strUrl = useRef<any>();

  const onClick = (url: string) => {
    setUrlList((prev) =>
      prev.map((v) =>
        v.name === url ? { ...v, checked: true } : { ...v, checked: false }
      )
    );
  };

  const onAgree = () => {
    setAgree((prev) => !prev);
  };

  const onChange = (str: any, e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl((prev: any) => ({ ...prev, [str]: e.target.value }));
  };

  const onSelectURL = (name: string) => {
    setSelected(name);
  };

  const goResult = () => {
    const urlLen = strUrl.current.value.length !== 0;

    if ((agree && urlLen) || (!agree && !urlLen)) {
      alert("브런치 작가에 지원해 주셔서\n감사합니다.");
      onNext("next", "step4");
    } else {
      setError((prev: any) => ({ ...prev, step4: true }));
      setCheck((prev: any) => !prev);
    }
  };

  return (
    <Box>
      <h3>04. 마지막 단계!</h3>
      <p className="tit_jojn">
        활동 중인
        <br />
        SNS나 홈페이지가 있으신가요?
      </p>
      <p className="txt_info">
        작가님의 주 활동 분야나 작업, 관심사 등을 잘 알 수 있는 주소가 있다면
        알려주세요.
      </p>
      <fieldset>
        <ScreenOut>정보입력</ScreenOut>
        <ul className="list_sns">
          {urlList.map(({ checked, className, text, name }, idx) => (
            <li key={idx}>
              <label>
                <input
                  className="inp_radio"
                  name="sns"
                  checked={checked}
                  type="radio"
                  onChange={() => onClick(name)}
                  onClick={() => onSelectURL(name)}
                />
                <span className={className}>{text}</span>
              </label>
            </li>
          ))}
        </ul>
        <label className="lab_tf">
          <ScreenOut>url 입력</ScreenOut>
          <span className="bundle_url">
            <input
              ref={strUrl}
              type="text"
              name="personalUrl"
              className="tf_url"
              placeholder="https://"
              value={url[selected]}
              onChange={(e) => onChange(selected, e)}
            />
          </span>
        </label>
        <div className="agree_sns">
          <div className="choice_comm" style={{ display: "none" }}>
            <Link to={"#"}>[선택] 개인정보 수집 동의 철회하기</Link>
            <span
              className="ico_brunch_v1 ico_arrow_right"
              data-cmd="revokeAgreePersonalUrl"
            >
              arrow
            </span>
          </div>
          <label className="choice_comm choice_checkbox">
            <input
              className="inp_comm"
              type="checkbox"
              name="agreePersonalUrl"
              checked={agree}
              onChange={onAgree}
            />
            <span className="ico_signin"></span>
            <span className="lab_comm">
              [선택] 개인정보 수집 및 이용 동의
              <Link
                to={"https://brunch.co.kr/policy/agree_personal_url"}
                className="link_view"
                target="_blank"
              >
                보기
              </Link>
            </span>
          </label>
          <div className="txt_warning_wrapper step4">
            <span
              className="txt_warning"
              style={{ display: error.step4 ? "inline" : "none" }}
            >
              개인정보 수집 및 이용에 동의하셨습니다. SNS/웹사이트 주소를
              기재해주세요.
            </span>
          </div>
        </div>
      </fieldset>
      <fieldset className="btn_layer">
        <ScreenOut>버튼 모음입니다</ScreenOut>
        <JoinBtn
          onClick={() => onNext("prev")}
          name="prev"
          width={80}
          height={32}
          radius={30}
        >
          이전
        </JoinBtn>
        <JoinBtn onClick={goResult} width={111.45} height={32} radius={30}>
          신청서 보내기
        </JoinBtn>
      </fieldset>
    </Box>
  );
};

const BoxType5 = ({ ...res }: any) => {
  const navigate = useNavigate();
  const { setClickNext } = res;

  return (
    <JoinBox>
      <ScreenOut>신청이 완료</ScreenOut>
      <p className="tit_join">
        브런치 작가
        <br />
        신청이 완료 되었습니다.
      </p>
      <p className="txt_info">
        보내주신 신청서는 꼼꼼하고 신중하게 살펴보겠습니다.
        <br />
        신청 결과는 영업일 기준 5일 이내에 이메일과 브런치스토리 앱 알림으로
        결과 안내 드립니다.
      </p>
      <p className="txt_info">
        <span className="txt_email"></span>
        <br />
        자주 사용하시는 이메일 주소가 아닐 경우
        <Link to={"https://brunch.co.kr/me/settings"}>
          [설정 &gt; 이메일 주소]
        </Link>
        에서 변경해주세요.
      </p>
      <div className="bundle_link">
        <Link
          onClick={() =>
            window.confirm(
              "작가 신청을 취소하시겠습니까?\n지금까지 작성한 내용은 모두 지워집니다."
            )
          }
          to={"/apply"}
        >
          작가신청 취소할래요
        </Link>
        <Link
          onClick={() => setClickNext((prev: number) => (prev = 1))}
          to={"/apply?form"}
        >
          아! 아직 수정할게있어요
        </Link>
        <JoinBtn
          onClick={() => navigate("/")}
          width={150}
          height={32}
          radius={30}
          className="btn_join"
        >
          브런치스토리 홈
        </JoinBtn>
      </div>
    </JoinBox>
  );
};

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 700px;
  height: 460px;
  box-sizing: border-box;
  padding: 40px;
  margin: auto;
  background: #fff;
  box-shadow: 0 17px 40px rgba(0, 0, 0, 0.15);
`;

const ScreenOut = styled.legend`
  line-height: 0;
  overflow: hidden;
  text-indent: -9999px;
  height: 0;
  position: absolute;
  width: 0;
`;

const JoinBtn = styled(Button)`
  min-width: 80px;
  box-sizing: border-box;
  padding: 0 15px;
  border: 1px solid #00c6be;
  background: #fff;
  color: #00c6be;
  float: right;
  letter-spacing: -0.25px;
  line-height: 32px;
  vertical-align: top;

  &[name="prev"] {
    border-color: #ddd;
    color: #959595;
    float: left;
  }

  .btn_join {
    border: 1px solid red;
  }
`;

const JoinBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 700px;
  height: 460px;
  box-sizing: border-box;
  padding: 40px;
  margin: auto;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: none;
  text-align: center;
`;
