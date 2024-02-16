/** @jsxImportSource @emotion/react */

import React from "react";
import { useState } from "react";
import { keyframes, css } from "@emotion/react";

const Wrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7941e;
  width: 100wh;
  height: 100vh;
  flex-direction: column;
  font-family: "Poor Story", system-ui;
  font-weight: 400;
  font-style: normal;
`;
const outerDiv = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const mainDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 90%;
  height: 95%;
  background-color: white;
  border-radius: 30px;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

const subDiv = css`
  margin-top: -30px;
`;

const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;

const centeredText = css`
  text-align: center;
`;

const logo = css`
  width: 9rem;
  height: 9rem;
  margin-top: 1rem;
`;

const timetable = css`
  width: 10rem;
  height: 10rem;
  margin-top: 0.5rem;
`;

const startButton = css`
  color: white;
  background-color: black;
  margin-top: 2rem;
  width: 8rem;
  height: 2.5rem;
  text-align: center;
  border: 0;
  border-radius: 10rem;
  font-size: 1rem;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

const backButton = css`
  width: 1rem;
  height: 1.6rem;
  margin-right: 0.7rem;
`;

const nextButton = css`
  width: 1rem;
  height: 1.6rem;
  margin-left: 0.7rem;
`;

const number = css`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  color: #f7941e;
  margin-top: 0.5rem;
`;

const question1 = css`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.2rem;
`;
const question2 = css`
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 0.1rem;
`;

const answerBtn_Orange = css`
  text-align: center;
  background-color: #ffe4c3;
  border-style: solid;
  border-width: 2px;
  border-radius: 5rem;
  border-color: #f7941e;
  width: 13rem;
  height: 2.6rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  outline: none;
  color: black;

  &:active,
  &:focus {
    background-color: #ffc885;
    border-width: 4px;
    color: white;
  }
`;

const answerBtn_Black = css`
  text-align: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 5rem;
  background-color: #f3f3f3;
  border-color: #000000;
  width: 13rem;
  height: 2.6rem;
  outline: none;
  color: black;
  &:active,
  &:focus {
    background-color: #7e7e7e;
    color: white;
    border-color: #d3d3d3;
    border-width: 4px;
  }
`;

const answerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 0.2rem;
`;

const answerText = css`
  margin: auto;
  margin-bottom: 0.3rem;
  font-size: 0.7rem;
  font-weight: bolder;
  padding: 0.2rem;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

const progressBar = css`
  width: 10rem;
  height: 15px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 3px;
  margin-bottom: 0.5rem;
`;

const progressDot = css`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: black;
`;

const spinnerStyle = css`
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 6px solid white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-top: 2rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const spinnerText = css`
  font-size: 1.3rem;
  font-weight: bolder;
  padding: 0.2rem;
  color: white;
  margin-top: 2rem;
`;

const balloon1 = css`
  width: 9rem;
  margin-left: -10rem;
`;

const balloon2 = css`
  width: 9rem;
  margin-right: -10rem;
`;

const balloon3 = css`
  width: 12rem;
  margin-left: -5rem;
  margin-top: 2rem;
`;

const balloon4 = css`
  width: 3rem;
  margin-right: -15rem;
`;

const resultDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 90%;
  height: 95%;
  background-color: white;
  border-radius: 30px;
  font-size: 0.4rem;
  border: 1px;
`;

const resultQ = css`
  margin-top: 30px;
  margin-bottom: 0px;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

const resultTitle = css`
  font-size: 2rem;
  font-weight: bolder;
  color: #f7941e;
  margin-top: 0px;
  margin-bottom: 6px;
  font-family: "IBM Plex Sans KR";
  font-weight: 550;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const resultContent = css`
  display: float;
  width: 75%;
  height: auto;
  background-color: #ffe0bc;
  border-radius: 10px;
  font-size: 0.7rem;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  text-align: row;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;
const resultText = css`
  margin: 15px;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

const resultContentDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  height: 20%;
  font-size: 0.4rem;
  border: 1px;
`;

const resultbtn = css`
  display: flex;
  width: 85%;
  height: 30px;
  background-color: #f7941e;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  text-align: row;
  align-items: center;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;
const blinkEffect = keyframes`
  50% {
    opacity: 0;
  }
`;
const resultbtna = css`
  text-decoration: none;
  color: white;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
  animation: ${blinkEffect} 1s step-end infinite;
`;
const reslutCircleDiv = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const reslutCircleBtn = css`
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  margin-top: 1rem;
  background-color: #ffb864;
  border: none;
  margin: 25px 25px 0px 25px;
`;
const reslutCircleText = css`
  font-size: 0.6rem;
  font-weight: bolder;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

interface Answer {
  text: string;
}

interface Question {
  q: string[];
  a: Answer[];
}

function App() {
  const [page, setPage] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  const [plan, setPlan] = useState(0);
  const [design, setDesign] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const questionList = [
    {
      q: ["2024년 청룡의 해!", "나는 지금"],
      a: [
        { text: "1학년", value: "" },
        { text: "2학년", value: "" },
        { text: "3학년", value: "" },
        { text: "4학년 이상", value: "" },
      ],
    },
    {
      q: ["조별 과제에서", "내가 원하는 역할은?"],
      a: [
        { text: "자료조사 및 정리", value: "back" },
        { text: "ppt 제작", value: "front and design" },
        { text: "발표", value: "plan and front" },
        { text: "무임승차", value: "" },
      ],
    },
    {
      q: ["책을 사 볼까?", "주로 나는"],
      a: [
        {
          text: "표지가 예쁜 책에 눈이 가",
          value: "front and design",
        },
        { text: "관심 분야인 책부터!", value: "plan" },
        { text: "나에게 익숙한 책이 좋아", value: "back" },
        { text: "좋아하는 작가의 책을 찾아봐", value: "plan" },
      ],
    },
    {
      q: ["식당을 고를 때", "가장 중요한 것은?"],
      a: [
        { text: "인테리어", value: "plan and design" },
        { text: "대기 여부", value: "front" },
        { text: "맛", value: "back" },
        { text: "유명세", value: "plan and front" },
      ],
    },
    {
      q: ["SNS에 글을 올릴 때", "나는"],
      a: [
        { text: "접속수가 많은 시간에 올려", value: "back" },
        { text: "피드 꾸미기가 가장 중요해", value: "design" },
        { text: "육하원칙, 무조건.", value: "plan" },
        {
          text: "메인 사진 추천받기!",
          value: "front",
        },
      ],
    },
    {
      q: ["시간표가 이상하다!", "가장 먼저 보이는 것은?"],
      a: [
        { text: "요일이 이상한데?", value: "back" },
        { text: "색 조합 누가 짰어!", value: "design" },
        { text: "OMG. 뭐든 당장 수정해!", value: "plan" },
        { text: "폰트 통일감 제로..", value: "front" },
      ],
    },
  ];

  const handleAnswer = (answer: { text?: string; value: any }, idx: number) => {
    if (idx === 0) {
      const extractInteger = (text: string): string => {
        const regex = /\d+/;
        const match = text.match(regex);
        return match ? match[0] : "";
      };

      const transformedText = extractInteger(answer.text || "");
      const data = {
        grade: transformedText,
      };

      fetch("https://mydevposition-b0c4f67bee0a.herokuapp.com/grade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          console.log("Data saved:", data);
        })

        .catch((error) => {
          console.error("There was an error saving the data:", error);
        });
    }

    const value = answer.value;

    switch (value) {
      case "front":
        setFront((prevState) => prevState + 1);
        break;
      case "back":
        setBack((prevState) => prevState + 1);
        break;
      case "plan":
        setPlan((prevState) => prevState + 1);
        break;
      case "design":
        setDesign((prevState) => prevState + 1);
        break;
      case "front and design":
        setFront((prevState) => prevState + 1);
        setDesign((prevState) => prevState + 1);
        break;
      case "plan and front":
        setPlan((prevState) => prevState + 1);
        setFront((prevState) => prevState + 1);
        break;
      case "plan and design":
        setPlan((prevState) => prevState + 1);
        setDesign((prevState) => prevState + 1);
        break;
    }
    if (idx === questionList.length - 1) {
      setShowResultButton(true);
    } else {
      setProgress(Math.round(((idx + 1) / questionList.length) * 100));
    }
  };

  const loadingClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowResultButton(true);
      setPage(page + 1);
    }, 4000);
  };

  const handleStartClick = () => {
    setPage(0);
    setProgress(0);
    setFront(0);
    setBack(0);
    setPlan(0);
    setDesign(0);
    setShowResultButton(false);
  };

  const getResultPosition = () => {
    const positions = [
      { name: "프론트엔드", value: front },
      { name: "백엔드", value: back },
      { name: "기획", value: plan },
      { name: "디자인", value: design },
    ];

    // 가장 큰 값을 찾음
    const maxPosition = Math.max(
      ...positions.map((position) => position.value)
    );

    // 가장 큰 값에 해당하는 포지션만 반환
    const resultPosition = positions.find(
      (position) => position.value === maxPosition
    );

    return resultPosition ? `${resultPosition.name}` : "";
  };

  const getResultContent = () => {
    const resultPosition = getResultPosition();

    if (resultPosition === "프론트엔드") {
      return "데이터는 글쎄... 시각적인 것에 끌리는 당신에게 어울리는 포지션은 바로 프론트엔드 개발자! 가끔 UI/UX 디자인을 배우고 싶을 때도 있지. 배울 게 너무 많아서 고민이라고~? 오히려 좋아~~ 디자이너와 협업하기 위해서는 프론트엔드 개발자도 어느 정도 디자인 툴에 익숙해야 한다고. 프론트 개발과 디자인을 함께 공부하면서 어느 쪽이 나에게 더 맞는지 직접 알아보자! 어디서? ‘멋쟁이사자처럼’에서~~~~~~";
    } else if (resultPosition === "백엔드") {
      return "어디서 무엇을 하든 항상 묵묵하게 하자! 힘들어도 끈기 있게 맡은 일을 끝까지 해내는 당신이 진정한 외유내강. 데이터베이스, 서버 개발처럼 보이지 않는 곳에서 꾸준하게 노력하는 백엔드 포지션을 추천합니다. 멋쟁이사자처럼에서 백엔드 개발자로 활약할 당신의 모습이 벌써 기대되는군요:)";
    } else if (resultPosition === "기획") {
      return "내가 바로 대문자 J. 계획 없이 사는 것은 절대 있을 수 없는 일이야! 플랜 A부터 Z까지 꼼꼼하고 확실하게 해 두는 것을 선호하는 당신에게 기획 포지션을 추천합니다. 프로젝트는 코딩을 잘 하는 사람만 있으면 된다고 생각하기 쉽지만, 훌륭한 기획자가 있어야 그것을 구현하는 개발자들이 존재할 수 있는 법. 멋쟁이사자처럼에서 아이디어 뱅크로 활약할 당신을 기대할게요!";
    } else if (resultPosition === "디자인") {
      return "책을 살 때도, 식당을 고를 때도 언제나 외관을 먼저 보게 되는 당신! 예쁘고 효율적인 디자인을 싫어하는 사람은 없어. 아무리 잘 만든 프로젝트여도 디자인이 별로라면 활용도가 떨어지는게 당연한거 아니야? 이런 당신에게 미적 감각이 뛰어나야 하는 것은 물론, 창의력과 상상력까지 겸비해야 맡을 수 있는 디자인 포지션을 추천합니다. 멋쟁이사자처럼에서 당신의 감각을 보여주세요!";
    }

    return "";
  };

  return (
    <div css={Wrapper}>
      {loading ? (
        <>
          <img css={balloon1} src="Images/1.png" />
          <img css={balloon2} src="Images/2.png" />
          <div css={spinnerText}>결과 불러오는 중...</div>
          <div css={spinnerStyle}></div>
          <img css={balloon3} src="Images/3.png" />
          <img css={balloon4} src="Images/4.png" />
        </>
      ) : page === 0 ? (
        <div css={[mainDiv, centeredText]} onClick={() => setPage(1)}>
          <h1>
            나에게 맞는
            <br />
            개발 포지션은?
          </h1>

          <img css={logo} src="Images/lionLogo.png" alt="logo" />
          <button css={startButton}>시작하기</button>
        </div> //시작페이지
      ) : page < questionList.length + 1 ? (
        <div css={mainDiv}>
          <div css={outerDiv}>
            <div>
              {page >= 1 && (
                <img
                  css={backButton}
                  src="Images/prebtn.png"
                  onClick={() => setPage(page - 1)}
                />
              )}
            </div>
            <div css={[subDiv]}>
              <div>
                <div css={container}>
                  <div css={progress}>
                    <div css={progressBar}>
                      {[...Array(questionList.length)].map((_, idx) => (
                        <div
                          key={idx}
                          css={[
                            progressDot,
                            {
                              backgroundColor: idx < page ? "black" : "#C9C9C9",
                            },
                          ]}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {questionList.map((val, idx) => (
                  <div
                    style={{ display: page === idx + 1 ? `flex` : "none" }}
                    key={idx}
                  >
                    <div css={container}>
                      <div>
                        <div css={number}>Q{idx + 1}</div>
                        <div css={question1}>{val.q[0]}</div>
                        <div css={question2}>{val.q[1]}</div>
                      </div>
                      <div css={answerWrapper}>
                        {" "}
                        {idx === questionList.length - 1 && (
                          <img
                            css={timetable}
                            src="Images/시간표.png"
                            alt="시간표"
                          />
                        )}
                        {val.a.map((answer, aIdx) => (
                          <button
                            tabIndex={0} //ios에서 답변 버튼 눌렀을 때 정상적으로 작동하도록 하는 코드
                            key={aIdx}
                            css={
                              aIdx % 2 === 0
                                ? answerBtn_Orange
                                : answerBtn_Black
                            }
                            onClick={() => handleAnswer(answer, idx)}
                          >
                            <span css={answerText}>{answer.text}</span>
                          </button>
                        ))}
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {page == questionList.length && (
                <img
                  css={nextButton}
                  src="Images/nextbtn.png"
                  onClick={() => loadingClick()}
                />
              )}
            </div>
            <div>
              {page < questionList.length && (
                <img
                  css={nextButton}
                  src="Images/nextbtn.png"
                  onClick={() => setPage(page + 1)}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div css={[resultDiv]}>
          <h1 css={[resultQ]}>당신에게 딱 맞는 포지션은</h1>
          <p css={[resultTitle]}>{getResultPosition()}</p>
          <div css={[resultContent]}>
            <div css={[resultText]}>{getResultContent()}</div>
          </div>
          <div css={[resultContentDiv]}>
            <h1>지금 바로 멋사 지원하기</h1>
            <div css={[resultbtn]}>
              <a
                css={[resultbtna]}
                href="https://forms.gle/vruPB8KaZpMKgab56"
                title="2024 아기사자 지원폼"
              >
                아기사자 지원폼 CLICK! 🦁
              </a>
            </div>
          </div>
          <div css={reslutCircleDiv}>
            <div>
              <button css={reslutCircleBtn}>
                <a href="https://likelion.university/">
                  <img src="Images/likelionpagelink.png" />
                </a>
              </button>
              <p css={reslutCircleText}>멋사 홈페이지</p>
            </div>
            <div>
              <button css={reslutCircleBtn}>
                <img
                  src="Images/restart.png"
                  onClick={() => handleStartClick()}
                />
              </button>
              <p css={reslutCircleText}>다시하기</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
