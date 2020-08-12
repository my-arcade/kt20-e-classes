import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { theme } from '@ui/core';
import { store } from '@models';
import { GlobalStyle } from '@ui/core/theme/global';

import Navigator from './App/Navigator.component';

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true

const Container = styled.div`
  position: relative;
  background: ${({theme}) => theme.colors.background};
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

// function loadLocaleMessages(locale: string) {
//   switch(locale) {
//     default:
//       return import('./lang/en.json')
//   }
// }

type StateType = {
  messages?: Record<string, string>, 
  locale: string
}

class App extends Component<{}, StateType> {
  state : StateType = {messages: {}, locale: 'en'}

  componentDidMount() {
    // loadLocaleMessages('en').then(messages => this.setState({messages}))
  }

  render() {
    const { messages, locale } = this.state
    if(!messages) return (
      <div>Loading...</div>
    )
    console.log(theme.colors.skeleton.base)
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <IntlProvider messages={messages} locale={locale} defaultLocale={locale}>
            <GlobalStyle />
            <Container>
              <Router>
                <Navigator />
              </Router>
            </Container>
          </IntlProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;