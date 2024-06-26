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
  const [isPlaying, setPlaying] = useState(false);
  const [currentNote, setCurrentNote] = useState(0);

  useEffect(() => {
    console.log("rendered");
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


  const tempo = 60.0;
  const lookahead = 25.0;
  const schedulerAheadTime = 0.1

  let nextNoteTime = 0;
  const nextNote = () => {
    const secondsPerBeat = 60.0 / tempo;

    nextNoteTime += secondsPerBeat; // Add beat length to last beat time

    // Advance the beat number, wrap to zero when reaching 4
    setCurrentNote((currentNote + 1) % 4);
  };

  const scheduleNote = (time: number) => {
    playSample(time);
  };

  const playSample = (time: number) => {
    const playbackRate = 1;
    const sampleSource = new AudioBufferSourceNode(audioCtx, {
      buffer: clickSample,
      playbackRate: playbackRate,
    });
    sampleSource.connect(audioCtx.destination);
    sampleSource.start(time);
    return sampleSource;
  }

  let timerID:any;
  const scheduler = () => {
    while(nextNoteTime < audioCtx.currentTime + schedulerAheadTime) {
      scheduleNote(nextNoteTime);
      nextNote();
    }
    timerID = setTimeout(scheduler, lookahead);
  }

  const play = (se: SyntheticEvent) => {
    se.preventDefault();

    if (audioCtx.state === "suspended") {
      audioCtx.resume().then(() => console.log('audio ctx resumed'));
    }

    nextNoteTime = audioCtx.currentTime;
    scheduler();
  };

  const stop = (se: SyntheticEvent) => {
    clearTimeout(timerID);
  }

  return (
    <S.Container>
      {clickSample ? 'loaded' : 'unloaded'}
      <div>
        {clickSample ? "a sample is loaded" : "unloaded" }
      </div>
      {currentNote}
      <button onClick={play}>play</button>
      <button onClick={stop}>stop</button>
    </S.Container>
);
}

export default Playground;
