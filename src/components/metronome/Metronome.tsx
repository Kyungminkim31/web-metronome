import React, {SyntheticEvent, useState} from 'react'; import styled from 'styled-components';
import {PRIMARY, WHITE} from '../../constants/color';
import {NOTE_VALUE} from '../../types/note-value';

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
  const initialBeat = 4;
  const noteValue = NOTE_VALUE.QUARTER_NOTE;
  const [maxBeat,] = useState(initialBeat);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [currentBeat, setCurrentBeat] = useState(1);

  const handlePlayButtonClick = (se: SyntheticEvent) => {
    se.preventDefault();
    console.log("start");
    if (!intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      console.log(currentBeat)
      setCurrentBeat(currentBeat => ((currentBeat % maxBeat) + 1));
    }, 1000);
    setIntervalId(id);
  };

  const handleStopButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    console.log("stop");
    clearInterval(intervalId);
    setCurrentBeat(1);
  }

  return (
    <S.Container>
      <h3>Metronome</h3>
      <p>Time Signature:  {maxBeat}/{noteValue}</p>
      <S.ButtonBar>
        <S.Button onClick={handlePlayButtonClick}>Play</S.Button>
        <S.Button onClick={handleStopButtonClick}>Stop</S.Button>
      </S.ButtonBar>
      <S.ProgressBar>{currentBeat}</S.ProgressBar>
    </S.Container>
  );
}

export default Metronome;