import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: row-reverse;
    width: 80vw;
    padding: 0 5%;
    h1 {
      width: 24rem;
      right: 0;
      text-transform: uppercase;
      font-size: ${theme.font.sizes.large};
      text-align: right;
    }
  `}
`