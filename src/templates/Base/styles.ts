import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    flex: 1 0 auto;
  `}
`;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
  `}
`;