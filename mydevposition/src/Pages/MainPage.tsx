/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';



const mainStyle = css`
  background-color: orange;
`;

const MainPage: React.FC = () => {
  return (
    <div css={mainStyle}>
      나에게 맞는 
    </div>
  );
}

export default MainPage;

