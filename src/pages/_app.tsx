import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import theme from 'styles/theme'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Deck of Cards</title>
        <meta
          name="description"
          content="NextJS, React, TypeScript and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}