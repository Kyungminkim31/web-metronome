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

    ctxRef.current?.beginPath();
    ctxRef.current.moveTo(75, 50);
    ctxRef.current.lineTo(100, 75);
    ctxRef.current.lineTo(100, 25);
    ctxRef.current.fill();

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
