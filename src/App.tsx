import React from 'react';
import './App.css';
import Container from './components/metronome/Container';
import styled from 'styled-components';
import {CONTENT_CONTAINER_MAX_WIDTH, MAIN_CONTAINER_MAX_WIDTH} from './constants/layout-size';

const S = {
  PageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentContainer: styled.div`
    width: ${CONTENT_CONTAINER_MAX_WIDTH}px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

function App() {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <Container/>
      </S.ContentContainer>
    </S.PageContainer>
  );
}

export default App;
