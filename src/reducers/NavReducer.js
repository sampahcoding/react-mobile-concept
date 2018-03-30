import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { NavigatorWithTab } from 'mobile-insta/src/components/navigator/NavigatorConfig';

const router = NavigatorWithTab.router;
const mainNavAction = router.getActionForPathAndParams('MainPage');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state);
};

export default NavReducer;
