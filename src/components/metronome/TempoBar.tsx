import React, {SyntheticEvent} from 'react';
import styled from 'styled-components';
import {WHITE} from '../../constants/color';

interface TempoBarProps {
  tempo: number;
  setTempo: React.Dispatch<React.SetStateAction<number>>;
}

const S = {
  Container: styled.div`
    display: flex;
    
    flex-direction: row;
    align-items: center;
  `,
  TempoDisplay: styled.div`
    padding: 0.24rem 0.75rem;
  `,
  TempoButton: styled.div`
    color: ${WHITE};

    :hover {
      color: #61dafb;
    }

    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.25rem 0.75rem;
  `,
};

function TempoBar({ tempo, setTempo }: TempoBarProps) {
  const handlePlusButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    if (tempo + 4 > 200) return;
    setTempo(tempo => tempo + 4);
  }

  const handleMinusButtonClick = (se:SyntheticEvent) => {
    se.preventDefault();
    if (tempo - 4 < 40) return;
    setTempo(tempo => tempo - 4);
  }

  return (
    <S.Container>
      <S.TempoButton onClick={handleMinusButtonClick}>
        -
      </S.TempoButton>
      <S.TempoDisplay>
        {tempo}
      </S.TempoDisplay>
      <S.TempoButton onClick={handlePlusButtonClick}>
        +
      </S.TempoButton>
    </S.Container>
  );
}

export default TempoBar;