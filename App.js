import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';

import RepoList from './src/components/RepoList';
import MainPage from './src/components/MainPage';

import store from './src/utils/store'
// NAVIGATION
import AppWithNavigationState from './src/components/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40
  }
});
