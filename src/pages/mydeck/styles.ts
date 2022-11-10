import styled from "styled-components";

export const Content = styled.div`
  ${({theme}) => `
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
  ${({theme}) => `
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const MaxCards = styled.h3`
  ${({theme})=> `
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.error};
  `}
`