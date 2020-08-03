import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { GlobalStyle } from '@theme/global'
import {withA11y} from '@storybook/addon-a11y';

addDecorator(withA11y);
addDecorator(style => <><GlobalStyle />{style()}</>);
addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)