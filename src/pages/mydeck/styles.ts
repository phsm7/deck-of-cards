import styled from "styled-components";

export const Content = styled.div`
  display : flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 80vw;
  max-width: 90vw;
`

export const NumberOfCards = styled.h2`
  ${({theme}) => `
    font-size: ${theme.font.sizes.xxlarge};
  `}
`