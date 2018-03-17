/**
  * @flow
*/
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';
import LoginForm from './components/LoginForm';
import Router from './components/Router';

class App extends Component<{}> {

  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
