import { InputHTMLAttributes } from 'react';
import * as S from './styles';

export type TextFieldProps = {
  label?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  label,
  disabled = false,
  name,
  errorMessage,
  ...rest
}: TextFieldProps) => {

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          disabled={disabled}
          {...rest}
          {...(label ? { id: name } : {})}
        />
      </S.InputWrapper>
      {!!errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Wrapper>
  );
};
export default TextField;