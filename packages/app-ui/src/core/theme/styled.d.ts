import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      metaPrimary: string;
      background: string;
      danger: string;
      text: string;
      metaText: string;
      clearBackground: string;
    };
  }
}