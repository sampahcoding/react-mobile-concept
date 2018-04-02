import React from 'react';
import { Text, View, TextInput, Button, TouchableHighlight, Keyboard, AsyncStorage } from 'react-native';
import styles from '../../styles/StyleLoginForm';
import * as COLOR from '../../styles/Color';
import { authUser } from '../../reducers/AuthReducer';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.token.key !== false) {
      AsyncStorage.setItem('userToken', nextProps.token.key);
      return this.props.navigation.navigate('App');
    }
    return true;
  }

  _loginUser = () => {
    this.props.authUser(this.state.email, this.state.password);
    Keyboard.dismiss()
  }

  render() {
    let { loading, error } = this.props
    let error_message = null;
    if (error == true) {
      error_message = <Text style={styles.text}>Incorrect email or password...</Text>
    }
    return (
      <View style={styles.container}>
        { error_message }
        <TextInput
          style={{...styles.search_input, ...(error == true ? styles.error : {})}}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholderTextColor={COLOR.BLUE}
          placeholder='Username or Email...'
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={{...styles.search_input, ...(error == true ? styles.error : {})}}
          autoCorrect={false}
          underlineColorAndroid='transparent'
          placeholderTextColor={COLOR.BLUE}
          placeholder='Password...'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableHighlight
          underlayColor={COLOR.WHITE}
          style={{...styles.gap, ...styles.btn_wrapper}}
          onPress={this._loginUser}
          disabled={loading}>
          <Text style={{...styles.button}}>{loading == true ? 'Logging into sweet...' : 'LOGIN'}</Text>
        </TouchableHighlight>
        <Text style={{...styles.text, ...styles.gap}}>OR</Text>
        <View style={styles.hr} />
        <TouchableHighlight
          underlayColor={COLOR.WHITE}
          style={styles.btn_wrapper}
          disabled={loading}
          onPress={() => this.props.navigation.navigate('Registration')}>
          <Text style={styles.button}>SIGN UP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let token = state.token
  let loading = state.token.loading
  let error = false
  if (state.token.error !== undefined) {
    error = true
  }
  return {
    token: token,
    loading: loading,
    error: error
  };
};

const mapDispatchToProps = {
  authUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
