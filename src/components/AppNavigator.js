import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import OtherView from './OtherView';

export const AppNavigator = StackNavigator({
    MainPage: { screen: MainPage },
    OtherView: { screen: OtherView }
  }, {
    initialRouteName: 'MainPage',
});

export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
        dispatch: dispatch,
        state: nav,
        addListener
      })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
