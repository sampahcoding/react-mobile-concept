import { StackNavigator } from 'react-navigation';
import SearchResult from '../search/SearchResult';
import SearchDetail from '../search/SearchDetail';

export const NavigatorTabSearch = StackNavigator({
  SearchDetail: {
    screen: SearchDetail,
    navigationOptions: {
      tabBarVisible:false,
      header: null
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
