/** @jsxImportSource @emotion/react */

import React from "react";
import { useState } from "react";
import { css } from "@emotion/react";

// import MainPage from './Pages/MainPage';

const prograss = css`
  font-size: 1.5rem;
  font-weight: 500;
`;

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

const centeredText = css`
  text-align: center;
`;

const leftAlignedText = css`
  text-align: left;
`;

const logo = css`
  width: 10rem;
  height: 10rem;
  margin-top: 1rem;
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

const switchButtonWrapper = css`
  display: flex;
`;

const switchButton = css`
  color: white;
  background-color: black;
  margin-top: 3rem;
  width: 2.7rem;
  height: 2.7rem;
  text-align: center;
  border: 0;
  border-radius: 10rem;
  font-size: 1.1rem;
  font-weight: 700;
  margin-right: 6rem;
  margin-left: 6rem;
`;

const QnStyle = css`
  font-size: 3rem;
  font-weight: bolder;
  color: #f7941e;
`;

const questionText = css`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

const answerBtn_Orange = css`
  text-align: center;
  background-color: #ffe4c3;
  border-style: solid;
  border-radius: 5rem;
  border-color: #f7941e;
  width: 18rem;
  height: 4rem;
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
  height: 4rem;
`;

const answerWrapper = css`
  margin-top: 2.5rem;
  align-items: center;
`;

const answerText_Describe = css`
  margin-top: 0.3rem;
  margin-bottom: 0.1rem;
  font-weight: bold;
`;

const answerText = css`
  margin: 0;
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
  font-weight: bolder;
`;

interface Answer {
  type: string;
  text: string;
}

interface Question {
  q: string[];
  a: Answer[];
}

//d1, d2, dfront처럼 d가 붙으면 describe라는 뜻
function App() {
  const [page, setPage] = useState<number>(0);

  const questionList: Question[] = [
    {
      q: ["2024년 청룡의 해!", "나는 지금"],
      a: [
        { type: "d1", text: "저를 새내기라고 불러주세요" },
        { type: "front", text: "1학년" },
        { type: "d2", text: "나도 마음만은 새내기" },
        { type: "back", text: "2학년" },
        { type: "d3", text: "내가 벌써?" },
        { type: "full", text: "3학년" },
        { type: "d4", text: "저 화석 아닌데요" },
        { type: "design", text: "4학년" },
      ],
    },
    {
      q: ["두번째", "페이지입니다"],
      a: [
        { type: "d1", text: "두번째" },
        { type: "front", text: "페이지임" },
        { type: "d2", text: "2" },
        { type: "back", text: "2학년" },
        { type: "d3", text: "3?" },
        { type: "full", text: "3학년" },
        { type: "d4", text: "4" },
        { type: "design", text: "4학년" },
      ],
    },
    {
      q: ["세 번째", "페이지입니다"],
      a: [
        { type: "d1", text: "저를 새내기라고 불러주세요" },
        { type: "front", text: "1학년" },
        { type: "d2", text: "나도 마음만은 새내기" },
        { type: "back", text: "2학년" },
        { type: "d3", text: "내가 벌써?" },
        { type: "full", text: "3학년" },
        { type: "d4", text: "저 화석 아닌데요" },
        { type: "design", text: "4학년" },
      ],
    },
    {
      q: ["네 번째", "페이지입니다"],
      a: [
        { type: "d1", text: "저를 새내기라고 불러주세요" },
        { type: "front", text: "1학년" },
        { type: "d2", text: "나도 마음만은 새내기" },
        { type: "back", text: "2학년" },
        { type: "d3", text: "내가 벌써?" },
        { type: "full", text: "3학년" },
        { type: "d4", text: "저 화석 아닌데요" },
        { type: "design", text: "4학년" },
      ],
    },
    {
      q: ["다섯번째", "페이지입니다"],
      a: [
        { type: "d1", text: "저를 새내기라고 불러주세요" },
        { type: "front", text: "1학년" },
        { type: "d2", text: "나도 마음만은 새내기" },
        { type: "back", text: "2학년" },
        { type: "d3", text: "내가 벌써?" },
        { type: "full", text: "3학년" },
        { type: "d4", text: "저 화석 아닌데요" },
        { type: "design", text: "4학년" },
      ],
    },
    {
      q: ["여섯번째", "페이지입니다"],
      a: [
        { type: "d1", text: "저를 새내기라고 불러주세요" },
        { type: "front", text: "1학년" },
        { type: "d2", text: "나도 마음만은 새내기" },
        { type: "back", text: "2학년" },
        { type: "d3", text: "내가 벌써?" },
        { type: "full", text: "3학년" },
        { type: "d4", text: "저 화석 아닌데요" },
        { type: "design", text: "4학년" },
      ],
    },

    { q: ["결과 보기"], a: [{ type: "", text: "결과" }] },
  ];

  const [positionList, setPositionList] = useState([
    { name: "front", count: 0 },
    { name: "back", count: 0 },
    { name: "full", count: 0 },
    { name: "design", count: 0 },
  ]);

  const handleAnswer = (type: any, idx: any) => {
    let ls = positionList;
    for (let i = 0; i < ls.length; i++) {
      if (ls[i].name === type) {
        ls[i].count = ls[i].count + 1;
      }
    }
    setPositionList(ls);
    setPage(page + 1);

    if (idx + 1 === questionList.length) {
      console.log("결과보기");
    }
  };

  return (
    <div css={Wrapper}>
      {page === 0 ? ( //page 값이 0일때는 시작화면이 보이도록.
        //시작 페이지 클릭 시 setPage가 1이 되면서 질문 페이지로 넘어감.
        <div css={[mainDiv, centeredText]} onClick={() => setPage(1)}>
          <h1>
            나에게 맞는
            <br />
            개발 포지션은?
          </h1>

          <img css={logo} src="Images/lionLogo.png" alt="logo" />
          <button css={startButton}>시작하기</button>
        </div> //시작페이지
      ) : page < questionList.length ? ( //페이지가 질문 리스트보다 작으면 질문페이지가 나오도록
        //질문 페이지
        <div css={[mainDiv, leftAlignedText]}>
          <div css={prograss}>{`${page} / ${questionList.length - 1}`}</div>
          {questionList.map((val, idx) => (
            <div
              style={{ display: page === idx + 1 ? `flex` : "none" }}
              key={idx}
            >
              {/* 질문 하나만 나오도록 하는 코드 */}
              <div>
                <div css={QnStyle}>{`Q${page}.`}</div>

                {/* 질문 */}
                <div css={questionText}>
                  {val.q.map(
                    (
                      qval,
                      qidx //질문 엔터용도
                    ) => (
                      //질문 인덱스값
                      <div key={qidx}>{qval}</div>
                    )
                  )}
                </div>

                {/* 답변들 감싸는 div */}
                <div css={answerWrapper}>
                  {/* 첫번째 답변 */}
                  <div
                    css={answerBtn_Orange}
                    onClick={() => handleAnswer(val.a[0].type, idx)}
                  >
                    <div css={answerText_Describe}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "d1" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                    <div css={answerText}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "front" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                  </div>

                  {/* 두 번째 답변 */}
                  <div
                    css={answerBtn_Black}
                    onClick={() => handleAnswer(val.a[0].type, idx)}
                  >
                    <div css={answerText_Describe}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "d2" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                    <div css={answerText}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "back" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                  </div>

                  {/* 세 번째 답변 */}
                  <div
                    css={answerBtn_Orange}
                    onClick={() => handleAnswer(val.a[0].type, idx)}
                  >
                    <div css={answerText_Describe}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "d3" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                    <div css={answerText}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "full" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                  </div>

                  {/* 네 번째 답변 */}
                  <div
                    css={answerBtn_Black}
                    onClick={() => handleAnswer(val.a[0].type, idx)}
                  >
                    <div css={answerText_Describe}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "d4" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                    <div css={answerText}>
                      {val.a.map(
                        (aval, aidx) =>
                          aval.type === "design" && (
                            <div key={aidx}>{aval.text}</div>
                          )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* 돌아가거나 다음으로 넘어가는 버튼 감싸는 div */}
          <div css={switchButtonWrapper}>
            {/* 이전 페이지로 가는 버튼 */}
            {page > 0 && page < questionList.length - 1 && (
              <button css={switchButton} onClick={() => setPage(page - 1)}>
                ◀
              </button>
            )}

            {/* 결과 보기 또는 다음 페이지로 가는 버튼 */}
            {page === questionList.length - 1 ? (
              // 여섯 번째 페이지인 경우
              <button css={startButton} onClick={() => handleAnswer("", page)}>
                결과 보기
              </button>
            ) : (
              // 다음 페이지로 가는 버튼
              page < questionList.length - 1 && (
                <button css={switchButton} onClick={() => setPage(page + 1)}>
                  ▶
                </button>
              )
            )}
          </div>
        </div>
      ) : (
        <div>
          결과
          <div>
            <button onClick={() => setPage(0)}>처음으로 돌아가기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
