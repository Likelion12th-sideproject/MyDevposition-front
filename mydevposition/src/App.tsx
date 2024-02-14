/** @jsxImportSource @emotion/react */

import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";

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
  width: 10rem;
  height: 10rem;
  margin-top: 1rem;
`;

const timetable = css`
  width: 14rem;
  height: 14rem;
  margin-top: 0.5rem;
`;

const startButton = css`
  color: white;
  background-color: black;
  margin-top: 2rem;
  width: 9rem;
  height: 3rem;
  text-align: center;
  border: 0;
  border-radius: 10rem;
  font-size: 1.3rem;
  font-family: "IBM Plex Sans KR";
  font-weight: 500;
`;

const backButton = css`
  width: 1.2rem;
  height: 1.8rem;
  margin-right: 1.7rem;
`;

const nextButton = css`
  width: 1.2rem;
  height: 1.8rem;
  margin-left: 1.7rem;
`;

const number = css`
  display: flex;
  font-size: 2.5rem;
  font-weight: bold;
  color: #f7941e;
  margin-top: 0.7rem;
`;

const question1 = css`
  display: flex;
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 0.2rem;
`;
const question2 = css`
  display: flex;
  font-size: 1.7rem;
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
  width: 16rem;
  height: 3.4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  &:focus {
    background-color: #ffc885;
    border-width: 4px;
  }
`;

const answerBtn_Black = css`
  text-align: center;
  border-style: solid;
  border-width: 2px;
  border-radius: 5rem;
  background-color: #f3f3f3;
  border-color: black;
  width: 16rem;
  height: 3.4rem;

  &:focus {
    background-color: #cfcfcf;
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
  font-size: 1.1rem;
  font-weight: bolder;
  padding: 0.2rem;
  font-family: "IBM Plex Sans KR";
  font-weight: 550;
`;

const progressBar = css`
  width: 15rem;
  height: 18px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
`;

const progressDot = css`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
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
  font-size: 0.6rem;
  border: 1px;
`;

const resultQ = css`
  margin-top: 30px;
  margin-bottom: 0px;
`;

const resultTitle = css`
  font-size: 3rem;
  font-weight: bolder;
  color: #f7941e;
  margin-top: 0px;
  margin-bottom: 5px;
`;

const resultContent = css`
  display: float;
  width: 85%;
  height: auto;
  background-color: #ffe0bc;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
  text-align: row;
`;
const resultText = css`
  margin: 15px;
`;

const resultContentDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  height: 20%;
  font-size: 0.6rem;
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
`;

const resultbtna = css`
  text-decoration: none;
  color: white;
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

      fetch(
        "https://838e598f-e98b-4557-8f47-05ab7487c670.mock.pstmn.io/grade",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
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

  const handleStartClick = () => {
    setPage(0);
    setProgress(0);
    setFront(0);
    setBack(0);
    setPlan(0);
    setDesign(0);
    setShowResultButton(false);
  };

  return (
    <div css={Wrapper}>
      {page === 0 ? (
        /* //page 값이 0일때는 시작화면이 보이도록.
        //시작 페이지 클릭 시 setPage가 1이 되면서 질문 페이지로 넘어감. */
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
              {page <= questionList.length && (
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
          <p css={[resultTitle]}>
            프론트: {front} / 백엔드: {back} / 기획: {plan} / 디자인: {design}
          </p>
          <div css={[resultContent]}>
            <div css={[resultText]}>
              가끔 UI/UX 디자인을 배우고 싶을 때도 있지.
              <br />
              배울 게 너무 많아서 고민이라고~?
              <br />
              오히려 좋아~~
              <br />
              디자이너와 협업하기 위해서는
              <br />
              프론트엔드 개발자도 어느 정도
              <br />
              디자인 툴에 익숙해야 한다고.
              <br />
              프론트 개발과 디자인을 함께 공부하면서
              <br />
              어느 쪽이 나에게 더 맞는지 직접 알아보자!
              <br />
              어디서? ‘멋쟁이사자처럼’에서~~~~~~
            </div>
          </div>
          <div css={[resultContentDiv]}>
            <h1>지금 바로 멋사 지원하기</h1>
            <h1>🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗</h1>
            <div css={[resultbtn]}>
              <a css={[resultbtna]} href="#" title="2024 아기사자 지원폼">
                Google 폼
              </a>
            </div>
          </div>
          <div>
            <button css={startButton} onClick={() => handleStartClick()}>
              처음으로
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
