import React from 'react';
import './App.css';
import Metronome from './components/metronome';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
  `,
};

function App() {
  return (
    <S.Container>
      <Metronome/>
    </S.Container>
  );
}

export default App;
