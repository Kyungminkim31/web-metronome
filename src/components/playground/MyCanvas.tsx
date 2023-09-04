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

    ctxRef.current.fillStyle = '#FD0';
    ctxRef.current.fillRect(0, 0, 75, 75);
    ctxRef.current.fillStyle = '#6C0';
    ctxRef.current.fillRect(75, 0, 75, 75);
    ctxRef.current.fillStyle = '#09F';
    ctxRef.current.fillRect(0, 75, 75, 75);
    ctxRef.current.fillStyle = '#F30';
    ctxRef.current.fillRect(75, 75, 75, 75);
    ctxRef.current.fillStyle = '#FFF';

    ctxRef.current.globalAlpha = 0.2;

    for (let i = 0; i < 7; i++) {
      ctxRef.current.beginPath();
      ctxRef.current.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
      ctxRef.current?.fill();
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
