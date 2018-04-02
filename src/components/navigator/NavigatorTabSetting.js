import Account from '../setting/Account';
import { StackNavigator } from 'react-navigation';

export const NavigatorTabSetting = StackNavigator({
  Account: {
     screen: Account,
     navigationOptions: {
       header: null
     }
   },
}, {
  headerMode: 'screen',
  mode: 'card',
  initialRouteName: 'Account'
})
