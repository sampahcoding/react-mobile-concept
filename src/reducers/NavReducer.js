import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { SwitchNav } from 'mobile-insta/src/components/navigator/NavigatorConfig';

const router = SwitchNav.router;
const mainNavAction = router.getActionForPathAndParams('SplashScreen');
const initialNavState = router.getStateForAction(mainNavAction);

const NavReducer = (state = initialNavState, action) => {
  return router.getStateForAction(action, state);
};

export default NavReducer;
