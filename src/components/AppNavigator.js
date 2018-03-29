import React from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import MainPage from './MainPage';
import OtherView from './OtherView';

export const AppNavigator = StackNavigator({
    MainPage: { screen: MainPage },
    OtherView: { screen: OtherView }
  }, {
    initialRouteName: 'MainPage',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");



class AppNav extends React.PureComponent<Props> {

  constructor (props: Props) {
    super(props)
    this.onBackPress = this.onBackPress.bind(this)
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress () {
    const { dispatch, nav } = this.props
    dispatch(NavigationActions.back())
    return nav !== this.props.nav
  }

  render() {
    const { dispatch, nav } = this.props
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
            dispatch: dispatch,
            state: nav,
            addListener
          })}
      />
    );
  }

}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppNav);
