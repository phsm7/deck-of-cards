import * as S from './styles'

interface HeadingProps {
  name: string;
}

const Heading = ({name}: HeadingProps) => {
  return (
    <S.Wrapper>
      <h1>Welcome, {name}</h1>
    </S.Wrapper>
  )
}

export default Heading