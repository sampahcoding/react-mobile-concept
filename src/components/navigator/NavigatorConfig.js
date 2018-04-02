import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, NavigationActions, SwitchNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Foundation';
import * as COLOR from '../../styles/Color';
import { NavigatorTabSearch } from './NavigatorTabSearch';
import { NavigatorTabHome } from './NavigatorTabHome';
import { NavigatorTabSetting } from './NavigatorTabSetting';
import { AuthNavigator } from './AuthNavigator';
import SplashScreen from '../SplashScreen';

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? state : getStateForAction(action, state);
};

//==================================//
// ALL MAIN TAB CONFIG
//=================================//
NavigatorTabSearch.router.getStateForAction = navigateOnce(NavigatorTabSearch.router.getStateForAction);
NavigatorTabHome.router.getStateForAction = navigateOnce(NavigatorTabHome.router.getStateForAction);
NavigatorTabSetting.router.getStateForAction = navigateOnce(NavigatorTabSetting.router.getStateForAction);

const routeConfiguration = {
  TabRegistrationNavigation: {
    screen: NavigatorTabHome,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ focused }) => {
        return focused ? <Icon name="home" size={30} color={COLOR.WHITE}/> : <Icon name="home" size={30} color={COLOR.BLUE}/>
      },
      elevation: 0
    }
  },
  TabSearchNavigation: {
    screen: NavigatorTabSearch,
    navigationOptions: {
      tabBarLabel: 'Photos',
      tabBarIcon: ({ focused }) => {
        return focused ? <Icon name="heart" size={30} color={COLOR.WHITE}/> : <Icon name="heart" size={30} color={COLOR.BLUE}/>
      },
      elevation: 0
    }
  },
  TabSettingNavigation: {
    screen: NavigatorTabSetting,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({ focused }) => {
        return focused ? <Icon name="torso" size={30} color={COLOR.WHITE}/> : <Icon name="torso" size={30} color={COLOR.BLUE}/>
      },
      elevation: 0
    }
  }
}

const tabBarConfiguration = {
  initialRouteName: 'TabRegistrationNavigation',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: COLOR.WHITE,
    inactiveTintColor: COLOR.LIGHT_BLUE,
    tabStyle: {borderTopWidth:0.5, borderColor:COLOR.LIGHT_BLUE, backgroundColor:COLOR.BG_BLUE},
    style: {backgroundColor: COLOR.BG_BLUE},
    labelStyle: {fontWeight:'bold', fontSize:10}
  }
}
const NavigatorWithTab = TabNavigator(routeConfiguration, tabBarConfiguration);


//==================================//
// ALL ROUTES
//=================================//
export const SwitchNav =  SwitchNavigator({
    SplashScreen: SplashScreen,
    App: NavigatorWithTab,
    Auth: AuthNavigator,
  },{
    initialRouteName: 'SplashScreen',
  });
