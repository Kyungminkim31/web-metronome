import React from 'react';
import styled from 'styled-components';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    
    flex-direction: column;
    align-items: center;
    
    padding: 2rem 0;
  `,
  CopyWrightMessage: styled.div`
  `,
};

function Footer() {
  const copyWrightMessage = '© 2023 Kyungmin Kim';
  return (
    <S.Container>
      <S.CopyWrightMessage>
        {copyWrightMessage}
      </S.CopyWrightMessage>
    </S.Container>
  );
}

export default Footer;