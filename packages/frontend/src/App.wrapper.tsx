import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '@ui/core';
import { store } from '@models';
import { GlobalStyle } from '@ui/core/theme/global';

import Navigator from './App/Navigator.component';

axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.withCredentials = true

interface Props {
}

interface State {
};

const Container = styled.div`
  background: ${({theme}) => theme.colors.background};
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Container>
            <Router>
              <Navigator />
            </Router>
          </Container>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;