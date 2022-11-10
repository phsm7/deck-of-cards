import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const wrapperModifiers = {
  disabled: () => css`
  &:disabled {
    cursor: not-allowed;
    filter: saturate(30%);
  }
`,
  fullWidth: () => css`
    width: 100%;
  `,
};

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, fullWidth, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};

    text-decoration: none;
    &:hover {
      background: ${theme.colors.btnHover};
    }
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled()}
  `}
`;