import React from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: flex;
  `,
};

function Playground () {
  return (
    <S.Container>
      Test
    </S.Container>
);
}

export default Playground;
