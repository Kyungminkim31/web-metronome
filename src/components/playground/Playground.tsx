import React, { SyntheticEvent, useRef } from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    display: block;
    padding: 1rem;
  `,
};

const INITIAL_VOL = 0.001;
const maxFreq = 6000;
const maxVol = 0.02;
const initialVol = 0.001;

function Playground () {
  const AudioContext = window.AudioContext;
  const audioCtx = new AudioContext();

  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);

  oscillator.detune.value = 100;

  oscillator.start();

  oscillator.onended = () => {
    console.log("Your tone has now stopped playing!");
  };

  gainNode.gain.value = initialVol;

  const handleOnClickPlay = (se: SyntheticEvent) => {
    se.preventDefault();
    gainNode.connect(audioCtx.destination);
  }

  const handleOnClickStop = (se: SyntheticEvent) => {
    se.preventDefault();
    console.log('the stop button clicked');
    gainNode.disconnect(audioCtx.destination);
  }

  return (
    <S.Container>
      <div>
        width: {window.innerWidth}px
      </div>
      <div>
        height: {window.innerHeight}px
      </div>
      <button onClick={handleOnClickPlay}>play</button>
      <button onClick={handleOnClickStop}>stop</button>
    </S.Container>
);
}

export default Playground;
