import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({theme}) => css`
    display: block;
    justify-content: center;
    align-items: center;
    gap: calc(${theme.grid.gutter}/ 4);
    width: 100%;
    height: 100%;
    min-height: 50rem;
  `}
`

export const Card = styled.div`
  background: transparent;

  img {
    margin: 0 auto;
  }
`
export const Value = styled.p`
  font-size: 16px;
  text-align: center;
`
export const Description = styled.p`
  font-size: 16px;
  text-align: center;
`