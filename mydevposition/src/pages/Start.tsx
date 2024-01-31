import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

const Start = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>개발 포지션 테스트 시작하기</h1>
      <button onClick={() => navigate(`/question`)}>시작하기</button>
    </Wrapper>
  );
};

export default Start;
