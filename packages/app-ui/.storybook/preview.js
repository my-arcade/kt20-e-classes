import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { GlobalStyle } from '@theme/global'

addDecorator(style => <><GlobalStyle />{style()}</>);
addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)