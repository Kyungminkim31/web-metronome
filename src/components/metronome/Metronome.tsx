import React, {SyntheticEvent, useState} from 'react'; import styled from 'styled-components';
import {PRIMARY, WHITE} from '../../constants/color';
import {NOTE_VALUE} from '../types/note-value';
import clickUrl from '../../assets/sounds/metronome-click.mp3';

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
    font-weight: bold;
    font-size: 2rem;
  `,
}

function Metronome() {
  const initialBeat = 4;
  const initialTempo = 100;

  const noteValue = NOTE_VALUE.QUARTER_NOTE;
  const [maxBeat,] = useState(initialBeat);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  const [currentBeat, setCurrentBeat] = useState(0);

  // BPM stands for Beat Per Minute
  const [tempo, setTempo] = useState(initialTempo);

  const [audio] = useState(new Audio(clickUrl));

  const handlePlayButtonClick = (se: SyntheticEvent) => {
    se.preventDefault();

    if (!intervalId) clearInterval(intervalId);

    const id = setInterval(() => {
      audio.currentTime = 0;
      setCurrentBeat(currentBeat => ((currentBeat % maxBeat) + 1));
      audio.play();
    }, (60 / tempo) * 1000);
    setIntervalId(id);
  };

  const handleStopButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    clearInterval(intervalId);
    setCurrentBeat(0);
  }

  const handlePlusButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    if (tempo + 4 > 200) return;
    setTempo(tempo => tempo + 4);

  }

  const handleMinusButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    if (tempo - 4 < 40) return;
    setTempo(tempo => tempo - 4);
  }

  return (
    <S.Container>
      <h3>Metronome</h3>
      <div>
        Tempo: {tempo}
        <S.ButtonBar>
          <S.Button onClick={handlePlusButtonClick}>+</S.Button>
          <S.Button onClick={handleMinusButtonClick}>-</S.Button>
        </S.ButtonBar>
      </div>
      <p>Time Signature:  {maxBeat}/{noteValue}</p>
      <S.ButtonBar>
        <S.Button onClick={handlePlayButtonClick}>Play</S.Button>
        <S.Button onClick={handleStopButtonClick}>Stop</S.Button>
      </S.ButtonBar>
      <S.ProgressBar>{currentBeat === 0 ? '-' : currentBeat}</S.ProgressBar>
    </S.Container>
  );
}

export default Metronome;