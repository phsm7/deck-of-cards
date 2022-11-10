import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.small};
    background: transparent;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    outline: none;
    width: 100%;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;
    display: block;
    margin-bottom: ${theme.spacings.xxsmall};
    padding-left: ${theme.spacings.xxsmall};
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    border-color: ${theme.colors.gray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.xxsmall};
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.medium};
    padding-left: ${theme.spacings.xxsmall};
  `}
`