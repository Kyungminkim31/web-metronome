import React, {SyntheticEvent} from 'react';
import styled from 'styled-components';
import {WHITE} from 'constants/color';

interface ButtonBarProps {
  intervalId:  NodeJS.Timer | undefined
  setIntervalId:  React.Dispatch<React.SetStateAction<NodeJS.Timer | undefined>>

  audio: HTMLAudioElement;
  setCurrentBeat: React.Dispatch<React.SetStateAction<number>>;
  tempo: number;
  maxBeat: number;
}

const S = {
  Container: styled.div`
    display: flex;

    flex-direction: row;
    align-items: center;

    gap: 0.5rem;
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
};

function TempoBar({
                    intervalId,
                    setIntervalId,
                    audio,
                    setCurrentBeat,
                    tempo,
                    maxBeat
}: ButtonBarProps) {
  const handlePlayButtonClick = (se: SyntheticEvent) => {
    se.preventDefault();

    if (!intervalId) clearInterval(intervalId);

    const id = setInterval(async () => {
      audio.currentTime = 0;
      await audio.play();
      setCurrentBeat(currentBeat => ((currentBeat % maxBeat) + 1));
    }, (60 / tempo) * 1000);
    setIntervalId(id);
  };

  const handleStopButtonClick = (se: SyntheticEvent) => {
    se.preventDefault();
    clearInterval(intervalId);
    setCurrentBeat(0);
  };

  return (
    <S.Container>
      <S.Button onClick={handlePlayButtonClick}>
        Play
      </S.Button>
      <S.Button onClick={handleStopButtonClick}>
        Stop
      </S.Button>
    </S.Container>
  );
}

export default TempoBar;