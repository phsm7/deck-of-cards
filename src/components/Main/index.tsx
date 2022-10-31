import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme }) => css`
    padding: ${theme.grid.gutter} 0;
    gap: calc(${theme.grid.gutter}/4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `}
`;