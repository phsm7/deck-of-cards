import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({theme}) => css`
    display : flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 80vw;
    max-width: 90vw;
    background: ${theme.colors.gray};
  `}
`

export const NumberOfCards = styled.h2`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const MaxCards = styled.h3`
  ${({theme})=> css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.error};
  `}
`