import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
        container: string;
        gutter: string;
    },
    border: {
        radius: string;
    },
    colors: {
        primary: string;
        white: string;
        black: string;
        gray: string;
        error: string;
    },
    font: {
        normal: number;
        bold: number;
        sizes: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            huge: string;
        }
    },
    spacings: {
        xxsmall: string;
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
    },
  }
}