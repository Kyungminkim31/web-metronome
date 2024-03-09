import React, { useState } from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`background-color: white`,
  ProgressWheelWrapper: styled.div<{ $width?: number; }>`
    width: ${props => props.$width }px;
    height: ${ props => props.$width }px;
    position: relative;
  `,
  Outer: styled.div<{ $width?: number; }>`
    width: ${props => props.$width }px;
    height: ${props => props.$width}px;
    border-radius: 50%;
    padding: ${props => (props.$width||0)/8}px;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), 0px 0px 0px 0px rgba(255,255,255 0.7);
    //box-shadow: 0px 1px 2px rgba(0,0,0,0.1),
    //0px 2px 4px rgba(0,0,0,0.1),
    //0px 4px 8px rgba(0,0,0,0.1),
    //0px 8px 16px rgba(0,0,0,0.1);
  `,
  Inner: styled.div<{ $width?: number; }>`
    width: ${props => (props.$width||0)/4 * 3 }px;
    height: ${props => (props.$width||0)/4 * 3}px;
    border-radius: 50%;
    box-shadow: insert 4px 4px 6px -1px rgba(0,0,0,0.2), inset -4px, -4px, 6px, -1px rgba(255,255,255 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05);
  `,
};

interface Props {

}

const CircleProgressBar = (props: Props) => {
  const [width, setWidth] = useState(160);
  return (
    <S.Container>
      <S.ProgressWheelWrapper $width={width}>
        <S.Outer $width={width}>
          <S.Inner $width={width}></S.Inner>
        </S.Outer>
      </S.ProgressWheelWrapper>
    </S.Container>
  );
}

export default CircleProgressBar;
