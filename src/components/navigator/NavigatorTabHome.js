import { StackNavigator } from 'react-navigation';
import MainPage from '../home/MainPage';

export const NavigatorTabHome = StackNavigator({
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
