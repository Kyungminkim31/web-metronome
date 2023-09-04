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

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        ctxRef.current.fillStyle = `rgb(${Math.floor(255 - 42.5 * i)}, ${Math.floor(255 - 42.5 * j,)}, 0)`;
        ctxRef.current?.fillRect(j * 25, i * 25, 25, 25);
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
