import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { store } from '@models';
import axios from 'axios';
import LoginScreen from './modules/Administration/Login/Login.screen'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true

interface Props {
}

interface State {
};

class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <div>
          hello
          <LoginScreen />
        </div>
      </Provider>
    );
  }
}

export default App;