import { css } from 'styled-components';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#FFC926',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const colors = {
  // Palette
  primary: '#FFC926',
  secondary: '#1EA7FD',
  tertiary: '#DDDDDD',

  metaPrimary: '#FFFBEB',
  clearBackground: '#FFFFFF',
  background: '#FAFBFD',

  text: '#2A3A5F',
  metaText: 'rgb(42, 58, 95, 0.5)',

  border: 'rgba(0,0,0,.1)',

  // Monochrome
  lightest: '#FFFFFF',
  lighter: '#F8F8F8',
  light: '#F3F3F3',
  mediumlight: '#EEEEEE',
  medium: '#DDDDDD',
  mediumdark: '#999999',
  dark: '#666666',
  darker: '#444444',
  darkest: '#333333',


  // Status
  success: '#66BF3C',
  danger: '#FF726C',
  warning: '#E69D00',
};

// TODO: check which colors from the old app can be used in the theme
export const colorsx = {

  // colors from old app - to be decided which ones to keep
  yellow1: '#FFB500', // Selective Yellow
  yellow2: '#FFC926', // Lightning Yellow
  yellow3: '#FFCD05', // Supernova 
  blue1: '#135AAA', // Tory blue
  blue2: '#53BAEC', // Picton Blue
  blue3: '#40c4ff', // Dodger blue
  blue4: '#0071e6', // blue ribbon
}

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Mandali", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    extralight: '200',
    light: '300',
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;
