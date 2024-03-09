import React from 'react';
import styled from 'styled-components';
import MyCanvas from './MyCanvas';
import CircleProgressBar from './CircleProgressBar';

const S = {
  Container: styled.div`
    display: flex;
  `,
};

function Playground () {
  return (
    <S.Container>
      <CircleProgressBar />
    </S.Container>
);
}

export default Playground;
