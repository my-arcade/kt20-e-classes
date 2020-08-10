import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      metaPrimary: string;
      background: string;
      text: string;
      metaText: string;
      clearText: string;
      clearBackground: string;
      dividerColor: string;

       // Monochrome
      lightest: string;
      lighter: string;
      light: string;
      mediumlight: string;
      medium: string;
      mediumdark: string;
      dark: string;
      darker: string;
      darkest: string;

      border: string;

      // Status
      success: string;
      danger: string;
      warning: string;
    },
    spacing: {
      padding: {
        small: number;
        medium: number;
        large: number;
      },
      borderRadius: {
        small: number;
        default: number;
      },
    },
    typography: {
      type: {
        primary: string;
        code: string;
      },
      weight: {
        extralight: string;
        light: string;
        regular: string;
        bold: string;
        extrabold: string;
        black: string;
      },
      size: {
        s1: number;
        s2: number;
        s3: number;
        m1: number;
        m2: number;
        m3: number;
        l1: number;
        l2: number;
        l3: number;
        code: number;
      },
    }
  }
}