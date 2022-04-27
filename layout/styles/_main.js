import styled from '@emotion/styled'

export const Main = styled.main`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  & div[class='menu-client'] {
    display: flex;
    flex-direction: row;
    background-color: var(--lightgray);
    height: 100%;
    width: 410px;
  }
`
