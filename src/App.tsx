import React from 'react';
import './App.css';
import Metronome from './components/metronome';
import styled from 'styled-components';
import {MAIN_CONTAINER_MAX_WIDTH} from './constants/layout-size';

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

function App() {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <Metronome/>
      </S.ContentContainer>
    </S.PageContainer>
  );
}

export default App;
