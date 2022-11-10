import { Container } from 'components/Container';
import { Main } from 'components/Main';
import useDeckContext from 'hooks/useDeckContext';
import * as S from './styles'

type DefaultTemplateProps = {
  children: React.ReactNode | React.ReactNode[];
};

const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  const { loading } = useDeckContext();
  return (
    <S.Wrapper>
    <Main>
        {loading ? (
          <Container>
            <p className='loading'>Loading</p>
          </Container>
        ):(
          <Container>
            {children}
          </Container>
        )}
    </Main>
    </S.Wrapper>
  )
};

export default DefaultTemplate;