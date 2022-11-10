

import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
} & ButtonTypes;

const Button = (
  {
    children,
    size = 'medium',
    fullWidth = true,
    ...props
  }: ButtonProps
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    {...props}
  >
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default Button;