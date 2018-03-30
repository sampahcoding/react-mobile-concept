import React, { Component } from 'react';
import { TabNavigator, TabBarBottom, StackNavigator, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Foundation';
import * as COLOR from '../../styles/Color';

const navigateOnce = (getStateForAction) => (action, state) => {
  const {type, routeName} = action;
  return (
    state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
  ) ? state : getStateForAction(action, state);
};

// =================================================================================
// TAB SEARCH
// =================================================================================
import SearchResult from '../search/SearchResult';
import SearchDetail from '../search/SearchDetail';

const NavigatorTabSearch = StackNavigator({
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: {
      tabBarVisible:false
    }
  },
  SearchResult: {
     screen: SearchResult,
     navigationOptions: {
       header: null
     }
   },
}, {
  headerMode: 'screen',
  mode: 'card',
  initialRouteName: 'SearchResult'
})

NavigatorTabSearch.router.getStateForAction = navigateOnce(NavigatorTabSearch.router.getStateForAction);

// =================================================================================
// TAB REGISTRATION
// =================================================================================
import RegistrationForm from '../registration/Form';
import MainPage from '../MainPage';

const NavigatorRegistration = StackNavigator({
  RegistrationForm: {
    screen: RegistrationForm,
    navigationOptions: {
      tabBarVisible:false
    }
  },
  MainPage: {
     screen: MainPage,
     navigationOptions: {
       header: null
     }
   },
}, {
  headerMode: 'screen',
  mode: 'card',
  initialRouteName: 'MainPage'
})

NavigatorRegistration.router.getStateForAction = navigateOnce(NavigatorRegistration.router.getStateForAction);

// =================================================================
// TAB BAR
// =================================================================

const routeConfiguration = {
  TabRegistrationNavigation: {
    screen: NavigatorRegistration,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused }) => {
        return focused ? <Icon name="home" size={25} color={COLOR.LIGHT_BLUE}/> : <Icon name="home" size={25} color={COLOR.BLUE}/>
      }
    }
  },
  TabSearchNavigation: {
    screen: NavigatorTabSearch,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: ({ focused }) => {
        return focused ? <Icon name="heart" size={25} color={COLOR.LIGHT_BLUE}/> : <Icon name="heart" size={25} color={COLOR.BLUE}/>
      }
    }
  }
}

const tabBarConfiguration = {
  initialRouteName: 'TabRegistrationNavigation',
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: COLOR.DARK_BLUE,
    inactiveTintColor: COLOR.LIGHT_BLUE,
    tabStyle: {borderTopWidth:1, borderColor:COLOR.LIGHT_BLUE, backgroundColor:COLOR.WHITE},
    style: {backgroundColor:COLOR.WHITE},
    labelStyle: {fontWeight:'bold', fontSize:12},
    showLabel: false
  }
}

export const NavigatorWithTab = TabNavigator(routeConfiguration, tabBarConfiguration);
