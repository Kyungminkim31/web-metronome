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
    ctxRef.current?.arc(75, 75, 50, 0, Math.PI * 2, true);
    ctxRef.current?.moveTo(110, 75);
    ctxRef.current?.arc(75, 75, 35, 0, Math.PI, false);
    ctxRef.current?.moveTo(65, 65);
    ctxRef.current?.arc(60, 65, 5, 0, Math.PI * 2, true);
    ctxRef.current?.moveTo(95, 65);
    ctxRef.current?.arc(90, 65, 5, 0, Math.PI * 2, true);
    ctxRef.current.stroke();

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
