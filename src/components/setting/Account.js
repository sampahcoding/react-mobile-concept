import React from 'react';
import { Text, View, TouchableHighlight, AsyncStorage } from 'react-native';
import styles from '../../styles/StyleLoginForm';
import * as COLOR from '../../styles/Color';

export default class Account extends React.Component {

  _logoutUser = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLOR.WHITE}}>
        <TouchableHighlight
          underlayColor={COLOR.WHITE}
          style={{...styles.gap, ...styles.btn_wrapper}}
          onPress={this._logoutUser}>
          <Text style={{...styles.button}}>LOGOUT</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
