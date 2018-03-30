import React from 'react';
import { BackHandler } from 'react-native';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { NavigatorWithTab } from './NavigatorConfig';

export const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const addListener = createReduxBoundAddListener("root");

class AppNav extends React.PureComponent<Props> {

  //****//
  // HANDLING PRESSING
  // BACK BUTTON ON ANDROID
  //****//
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

  //****//
  // HANDLING PRESSING
  // BACK BUTTON ON ANDROID
  //****//

  render() {
    const { dispatch, nav } = this.props
    return (
      <NavigatorWithTab
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
