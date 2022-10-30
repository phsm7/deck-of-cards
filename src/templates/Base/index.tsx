

import { Container } from 'components/Container'
import * as S from './styles'

type BaseProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <S.Content>{children}</S.Content>
    <S.SectionFooter>
      <Container>
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
);

export default Base;