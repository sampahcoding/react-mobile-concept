import LoginForm from '../form/LoginForm';
import RegistrationForm from '../form/RegistrationForm';
import { StackNavigator } from 'react-navigation';

export const AuthNavigator = StackNavigator({
  SignIn: {
    screen: LoginForm,
    navigationOptions: {
      tabBarVisible:false,
      header: null
    }
  },
  Registration:{
    screen: RegistrationForm,
    navigationOptions: {
      tabBarVisible:false,
      header: null
    }
  }
});
