import React from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px #61dafb dotted;
    
    width: 200px;
  `,
}

function Metronome() {
  return (
    <S.Container>
      <h3>Metronome</h3>
      <p>This is metronome section.</p>
    </S.Container>
  );
}

export default Metronome;