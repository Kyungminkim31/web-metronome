import React from 'react';
import 'App.css';
import Metronome from 'components/metronome/Metronome';
import styled from 'styled-components';
import {CONTENT_CONTAINER_MAX_WIDTH} from 'constants/layout-size';
import {BLACK} from 'constants/color';

const S = {
  PageContainer: styled.div`
    height: 100vh;
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
    
    background-color: ${BLACK};
  `,
  Footer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: red;
    bottom: 0;
    position: fixed;
  `,
};

function App() {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <Metronome/>
      </S.ContentContainer>
      <S.Footer>
        footer
      </S.Footer>
    </S.PageContainer>
  );
}

export default App;
