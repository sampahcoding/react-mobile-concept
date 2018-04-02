import React from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    setTimeout(() => {
      this._loadAsync();
    }, 5000)
  }

  // Fetch the token from storage then navigate to our appropriate place
  _loadAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#47aee6'}}>
        <AutoHeightImage
          width={300}
          source={ require('mobile-insta/assets/splashscreen.gif') }
        />
      </View>
    );
  }
}
