import React, { SyntheticEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import clickUrl from 'assets/sounds/metronome-click.mp3';
import { Simulate } from 'react-dom/test-utils';

const S = {
  Container: styled.div`
    display: block;
    padding: 1rem;
  `,
};


// https://github.com/mdn/webaudio-examples/blob/main/step-sequencer/index.html#L426
function Playground () {
  const audioCtx = new AudioContext();
  const [clickSample, setClickSample] = useState<AudioBuffer>();
  useEffect(() => {
    const setupSample = async (audioCtx: AudioContext) => {
      return await getFile(audioCtx, clickUrl);
    };

    const getFile = async (audioContext :AudioContext, filePath: URL) => {
      const response = await fetch(filePath);
      const arrayBuffer = await response.arrayBuffer();
      return await audioContext.decodeAudioData(arrayBuffer);
    };

    setupSample(audioCtx).then((sample) => {
      setClickSample(sample);
    }).catch(error => console.error(error));

  }, []);

  const playSample = (se: SyntheticEvent) => {
    se.preventDefault();

    const playbackRate = 1;
    const sampleSource = new AudioBufferSourceNode(audioCtx, {
      buffer: clickSample,
      playbackRate: playbackRate,
    });
    sampleSource.connect(audioCtx.destination);
    sampleSource.start(0);
    return sampleSource;
  };

  return (
    <S.Container>
      {clickSample ? "a sample is loaded" : "unloaded" }
      <button onClick={playSample}>play</button>
    </S.Container>
);
}

export default Playground;
