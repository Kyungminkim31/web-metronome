import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import MyCanvas from './MyCanvas';
import CircleProgressBar from './CircleProgressBar';
import ContentEditable from 'react-contenteditable';

const S = {
  Container: styled.div`
    display: flex;
    /* iphone 13 & 14 - 1*/
    width: 390px;
    //height: 844px;
    height: 400px;
    background-color: white;
    flex-direction: column;
  `,

  Wrapper: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  `,

  HeaderContainer: styled.div`
    width: 100%;
    background-color: #d9d9d9;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  HeaderTitle: styled.div`
    font-family: 'Noto Sans', sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    line-height: 30px;

    color: #000000;
  `,
  ContentContainer: styled.div`
    width: 100%;
    /* 100% 로 할경우 부모 높이를 가져옴... */
    height: 100%;
    
    /* max-height 에서 %는 현재 element 의 height 의 비율 */
    //max-height: 100%;
    
    padding: 16px 12px;
  `,

  ButtonBarContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 12px;
    
    margin-top: auto;
  `,
  Button: styled.div`
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    color: #000000;
    background-color: #D9D9D9;
    
    border-radius: 8px;
    
    padding: 16px;
    cursor: pointer;
  `,
};

function Playground() {
  const text = useRef('testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest');

  const handleChange = (evt: any) => {
    text.current = evt.target.value;
  }

  const handleBlur = () => {
    console.log(text.current);
  }

  const template = { html: <b>Hello <i>World</i></b>};
  const [content, setContent] = useState(template);

  return (
    <S.Container>
      <S.Wrapper>
        <S.HeaderContainer>
          <S.HeaderTitle>
            Wireframe App
          </S.HeaderTitle>
        </S.HeaderContainer>
        <S.ContentContainer>
          {/*https://blixtdev.com/how-to-use-contenteditable-with-react/*/}
          <ContentEditable className='contentEditable' html={text.current} onBlur={handleBlur} onChange={handleChange}/>
        </S.ContentContainer>
        <S.ButtonBarContainer>
          <S.Button>Click</S.Button>
        </S.ButtonBarContainer>
      </S.Wrapper>
    </S.Container>
  );
}

export default Playground;
