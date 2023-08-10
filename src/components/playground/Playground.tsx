import React from 'react';
import styled from 'styled-components';
import MyCanvas from './MyCanvas';

const S = {
  Container: styled.div`
    display: flex;
  `,
};

function Playground () {
  return (
    <S.Container>
      <MyCanvas />
    </S.Container>
);
}

export default Playground;
