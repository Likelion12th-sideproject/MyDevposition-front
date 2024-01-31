import styled from "styled-components";
import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const WrapperDiv = styled.div`
  text-align: center;
`;

export default function Wrapper({ children }: WrapperProps) {
  return <WrapperDiv>{children}</WrapperDiv>;
}
