import React from 'react';
import { Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import styles from '../../styles/StyleLoginForm';
import * as COLOR from '../../styles/Color';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Incorrect email or password...</Text>
        <TextInput
          style={{...styles.search_input, ...styles.error}}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholderTextColor={COLOR.BLUE}
          placeholder='Username or Email...'
        />
        <TextInput
          style={styles.search_input}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholderTextColor={COLOR.BLUE}
          placeholder='Password...'
          secureTextEntry={true}
        />
        <TextInput
          style={styles.search_input}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholderTextColor={COLOR.BLUE}
          placeholder='Retype Password...'
          secureTextEntry={true}
        />
        <TouchableHighlight
          underlayColor={COLOR.WHITE}
          style={{...styles.gap, ...styles.btn_wrapper}}
          onPress={() => this_loginUser()}>
          <Text style={{...styles.button}}>SIGN UP</Text>
        </TouchableHighlight>
        <Text style={{...styles.text, ...styles.gap}}>OR</Text>
        <View style={styles.hr} />
        <TouchableHighlight
          underlayColor={COLOR.WHITE}
          style={styles.btn_wrapper}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.button}>LOGIN</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
