import 'styled-components'
import theme from 'styles/theme';
theme

type ApplicationTheme = typeof theme
declare module 'styled-components' {
  export interface DefaultTheme extends ApplicationTheme {}
}