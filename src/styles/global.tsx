import {
  createGlobalStyle
} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
      font-family: "Roboto, 'Open Sans', sans-serif";
      margin: 0;
      padding: 0;
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.gray};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .loading {
    font-size: ${({theme}) => theme.font.sizes.xlarge};
    text-transform: uppercase;
  }
`;

export default GlobalStyle