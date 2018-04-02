import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/utils/store'
import AppWithNavigationState from 'mobile-insta/src/components/navigator/AppNavigator';

export default class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <AppWithNavigationState />
        </Provider>
    );
  }
}
