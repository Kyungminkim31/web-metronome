import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div``,
};

interface Props {

}

const MyCanvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    ctxRef.current = canvasRef.current?.getContext('2d');

    if(!ctxRef.current) return
    ctxRef.current.fillStyle = "rgb(200, 0, 0)";
    ctxRef.current?.fillRect(10, 10, 50, 50);


    ctxRef.current.fillStyle = "rgb(20, 200, 123)";
    ctxRef.current?.fillRect(30, 30, 50, 50);

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
