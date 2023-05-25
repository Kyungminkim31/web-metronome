import React from 'react';
import './App.css';
import Metronome from './components/metronome/Metronome';
import styled from 'styled-components';
import {CONTENT_CONTAINER_MAX_WIDTH} from './constants/layout-size';

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentContainer: styled.div`
    width: 100%;
    max-width: ${CONTENT_CONTAINER_MAX_WIDTH}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #282c34;
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
