import React, {useState} from 'react';
import styled from 'styled-components';
import {NOTE_VALUE} from 'types/note-value';
import clickUrl from 'assets/sounds/metronome-click.mp3';
import TempoBar from 'components/metronome/TempoBar';
import ButtonBar from 'components/metronome/ButtonBar';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    gap: 2rem;
  `,
  ButtonBar: styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
  `,

  ProgressBar: styled.div`
    font-weight: bold;
    font-size: 2rem;
  `,
};

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

  return (
    <S.Container>
      <h3>Metronome</h3>
      <TempoBar tempo={tempo} setTempo={setTempo}/>
      <p>Time Signature: {maxBeat}/{noteValue}</p>
      <ButtonBar intervalId={intervalId}
                 setIntervalId={setIntervalId}
                 audio={audio}
                 setCurrentBeat={setCurrentBeat}
                 tempo={tempo}
                 maxBeat={maxBeat}/>
      <S.ProgressBar>{currentBeat === 0 ? '-' : currentBeat}</S.ProgressBar>
    </S.Container>
  );
}

export default Metronome;