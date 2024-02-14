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
`;
const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;
const innerDiv = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 60%;
  height: 85%;
  background-color: white;
`;

const centeredText = css`
  text-align: center;
`;

const leftAlignedText = css`
  margin-left: 0px;
`;

const logo = css`
  width: 10rem;
  height: 10rem;
  margin-top: 1rem;
`;
const timetable = css`
  width: 15rem;
  height: 15rem;
  margin-bottom: 0.5rem;
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
  font-weight: 600;
`;

const backButton = css`
  color: black;
  background-color: white;
  border: solid 1.5px;
  border-radius: 5rem;
  margin-top: 1.2rem;
  width: 4.3rem;
  height: 2.3rem;
  text-align: center;
  border-radius: 10rem;
  font-size: 1rem;
  font-weight: 700;
  margin-right: -13rem;
`;

const number = css`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  color: #f7941e;
  margin-top: 0.7rem;
`;

const question = css`
  display: flex;
  font-size: 1.7rem;
  font-weight: bold;
  margin-top: 0.7rem;
`;

const questionText = css`
  margin-bottom: 2rem;
`;

const answerBtn_Orange = css`
  text-align: center;
  background-color: #ffe4c3;
  border-style: solid;
  border-radius: 5rem;
  border-color: #f7941e;
  width: 18rem;
  height: 3.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const answerBtn_Black = css`
  text-align: center;
  border-style: solid;
  border-radius: 5rem;
  background-color: #f3f3f3;
  border-color: black;
  width: 18rem;
  height: 3.5rem;
`;

const answerWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 1rem;
`;

const answerText = css`
  margin: auto;
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
  font-weight: bolder;
  padding: 0.2rem;
`;

const progressBar = css`
  width: 15rem;
  height: 18px;
  background-color: #ffffff;
  border-radius: 30px;
  border-style: solid;
  border-width: 2px;
  border-color: #000000;
  margin: auto;
`;

const progressFill = css`
  height: 100%;
  background-color: black;
  border-radius: 10px;
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
  font-size: 0.7rem;
  font-weight: bolder;
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

  const questionList = [
    {
      q: ["2024년 청룡의 해!", "나는 지금"],
      a: [
        { text: "1학년", value: "" },
        { text: "2학년", value: "" },
        { text: "3학년", value: "" },
        { text: "4학년", value: "" },
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
    /* if (idx === 0) {
      const data = {
        answerText: answer.text,
      };

      fetch("http://{{host}}/users/{{userId}}/grade", {
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
          return response.json(); 
        })
        .then((responseData) => {
          console.log("Response data:", responseData);
        })
        .catch((error) => {
          console.error("There was an error saving the data:", error);
        });
    } */

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
      default:
        break;
    }
    setProgress(Math.round(((idx + 1) / questionList.length) * 100));
    setPage((prevPage) => prevPage + 1);
  };

  const handleStartClick = () => {
    setPage(0);
    setProgress(0);
    setFront(0);
    setBack(0);
    setPlan(0);
    setDesign(0);
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
      return "어디서 무엇을 하든 항상 묵묵하게 하자! 힘들어도 끈기 있게 맡은 일을 끝까지 해내는 당신이 진정한 외유내강. 데이터베이스, 서버 개발처럼 보이지 않는 곳에서 꾸준하게 노력하는 백엔드 포지션을 추천합니다.";
    } else if (resultPosition === "기획") {
      return "서비스를 기획하고 분위기에 맞는 디자인을 구상하는 당신은 ‘기획/디자인’ 파트가 어울려요! 기획 디자인파트는 실생활의 문제점, 불편사항에 대한 서비스 기획과 그에 맞는 디자인을 하는 디자이너입니다. 평소에 이런게 있었다면 좋았을텐데.. 라는 생각에 그치던 아이디어를 멋사에 지원해 꿈을 펼쳐보세요~!";
    } else if (resultPosition === "디자인") {
      return "당신은 베스트 디자이너 !";
    }

    return "";
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
        <div css={[mainDiv]}>
          <div>
            <div css={container}>
              <div css={progress}>
                <div css={progressBar}>
                  <div
                    css={progressFill}
                    style={{ width: `${(page / questionList.length) * 100}%` }}
                  ></div>
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
                    <div css={question}>{val.q[0]}</div>
                    <div css={question}>{val.q[1]}</div>
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
                          aIdx % 2 === 0 ? answerBtn_Orange : answerBtn_Black
                        }
                        onClick={() => handleAnswer(answer, idx)}
                      >
                        <span css={answerText}>{answer.text}</span>
                      </button>
                    ))}
                  </div>
                  <div>
                    {page > 1 && (
                      <button
                        css={backButton}
                        onClick={() => setPage(page - 1)}
                      >
                        BACK
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
            <h1>🠗🠗🠗🠗🠗🠗🠗🠗🠗🠗</h1>
            <div css={[resultbtn]}>
              <a
                css={[resultbtna]}
                href="https://forms.gle/vruPB8KaZpMKgab56"
                title="2024 아기사자 지원폼"
              >
                Google 폼
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
