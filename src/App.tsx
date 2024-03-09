import React from 'react';
import 'App.css';
import Metronome from 'components/metronome/Metronome';
import styled from 'styled-components';
import {CONTENT_CONTAINER_MAX_WIDTH} from 'constants/layout-size';
import {BLACK} from 'constants/color';
import Footer from 'components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Playground from './components/playground/Playground';
import WireframeApp from './components/playground/WireframeApp';

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
    
    background-color: ${BLACK};
    
    bottom: 0;
    position: fixed;
  `,
};

function App() {
  return (
    <S.PageContainer>
      <S.ContentContainer>
        <Routes>
          <Route path="/" element={<Metronome />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/wireframe" element={<WireframeApp/>} />
        </Routes>
      </S.ContentContainer>
      <S.Footer>
        <Footer/>
      </S.Footer>
    </S.PageContainer>
  );
}

export default App;
