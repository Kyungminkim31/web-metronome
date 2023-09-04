import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    background-color: white;
  `,
};

const MyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    ctxRef.current = canvasRef.current?.getContext('2d');

    if (!ctxRef.current) return

    ctxRef.current.fillStyle = 'rgb(255, 221, 0)';
    ctxRef.current?.fillRect(0, 0, 150, 37.5);
    ctxRef.current.fillStyle = 'rgb(102, 204, 0)';
    ctxRef.current?.fillRect(0, 37.5, 150, 37.5);
    ctxRef.current.fillStyle = 'rgb(0, 153, 255)';
    ctxRef.current?.fillRect(0, 75, 150, 37.5);
    ctxRef.current.fillStyle = 'rgb(255, 51, 0)';
    ctxRef.current?.fillRect(0, 112.5, 150, 37.5);

    for (let i = 0; i < 10; i ++) {
      ctxRef.current.fillStyle = `rgb(255, 255, 255, ${(i + 1) /10}`;
      for (let j = 0; j < 4; j ++) {
        ctxRef.current?.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
      }
    }
  }, []);

  return (
    <S.Container>
      <canvas ref={canvasRef} id="tutorial" width="150" height="150">
        Fallback Content
      </canvas>
    </S.Container>
  );
}

export default MyCanvas;
