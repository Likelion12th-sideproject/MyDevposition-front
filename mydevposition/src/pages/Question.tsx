import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/QuestionCard";
import questions from "../data/questions.json";
import Wrapper from "../components/Wrapper";
const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResultButton, setShowResultButton] = useState(false);

  const handleOptionClick = (option: string) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResultButton(true);
    }
  };
  return (
    <Wrapper>
      <Card>
        <h2>{questions[currentQuestion].number}</h2>
        <p>{questions[currentQuestion].question}</p>
        <Button
          onClick={() => handleOptionClick(questions[currentQuestion].option1)}
        >
          {questions[currentQuestion].option1}
        </Button>
        <Button
          onClick={() => handleOptionClick(questions[currentQuestion].option2)}
        >
          {questions[currentQuestion].option2}
        </Button>
        <Button
          onClick={() => handleOptionClick(questions[currentQuestion].option3)}
        >
          {questions[currentQuestion].option3}
        </Button>
        <Button
          onClick={() => handleOptionClick(questions[currentQuestion].option4)}
        >
          {questions[currentQuestion].option4}
        </Button>
      </Card>
      {showResultButton ? (
        <Link to="/result">
          <Button>결과 보기</Button>
        </Link>
      ) : (
        <Link to="/question"></Link>
      )}
    </Wrapper>
  );
};
export default Question;
