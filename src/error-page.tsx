import { useRouteError } from "react-router-dom";
import styled from 'styled-components';

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
}
export default function ErrorPage() {
  const error= useRouteError() as Error;
  console.error(error);

  return (
    <S.Container >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </S.Container>
  );
}
