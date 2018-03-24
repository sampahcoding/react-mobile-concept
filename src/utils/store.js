import Repos from '../reducers/Repos';
import userRepos from '../reducers/userRepos';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

export default createStore(
  combineReducers({
    Repos,
    userRepos
  }),
  applyMiddleware(axiosMiddleware(client))
);
