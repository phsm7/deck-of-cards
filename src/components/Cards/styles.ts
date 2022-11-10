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
    background: ${theme.colors.white};
    padding: 5rem;
    border-radius: ${theme.border.radius};
    box-shadow: 0 0 1em ${theme.colors.primary};
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