import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import Repos from './src/reducers/Repos';
import userRepos from './src/reducers/userRepos';

import RepoList from './src/components/RepoList';
import MainPage from './src/components/MainPage';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

//const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
//const store = createStore(userReducer, applyMiddleware(axiosMiddleware(client)));

//const allReducers = Object.assign({}, reducer, userReducer);
//const reducers = combineReducers(allReducers);
const store = createStore(
  combineReducers({
    Repos,
    userRepos
  }),
  applyMiddleware(axiosMiddleware(client))
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainPage />
          <RepoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  }
});
