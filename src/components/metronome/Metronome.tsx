import React, {SyntheticEvent} from 'react'; import styled from 'styled-components';
import {PRIMARY, WHITE} from '../../constants/color';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    border: 1px ${PRIMARY} dotted;
    padding: 1rem;
  `,
  Button: styled.div`
    color: ${WHITE};
    border: 1px ${WHITE} solid;
    
    :hover {
      color: #282c34;
      background-color: #61dafb;
    }
    
    border-radius: 0.25rem;
    
    cursor: pointer; 
    padding: 0.25rem 0.75rem;
  `,

  ButtonBar: styled.div`
    width: 100%;
    margin-top: 0.75rem;
    
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  `,
  ProgressBar: styled.div`
    width: 100%;
    margin-top: 0.75rem;
  `,

}

function Metronome() {
  const handlePlayButtonClick = (se: SyntheticEvent) => {
    se.preventDefault();
    console.log("start");
  };

  const handleStopButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    console.log("stop");
  }

  return (
    <S.Container>
      <h3>Metronome</h3>
      <p>This is metronome section.</p>
      <S.ButtonBar>
        <S.Button onClick={handlePlayButtonClick}>Play</S.Button>
        <S.Button onClick={handleStopButtonClick}>Stop</S.Button>
      </S.ButtonBar>
      <S.ProgressBar>Test</S.ProgressBar>
    </S.Container>
  );
}

export default Metronome;