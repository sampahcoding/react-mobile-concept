import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native';
import { width } from 'react-native-dimension';
import styles from '../styles/StyleDefault';
import { connect } from 'react-redux';
import { getUser } from '../reducers/UserRepos';
import * as DEFAULT from '../utils/default';
import RepoList from './RepoList';
import * as COLOR from '../styles/Color';

class MainPage extends React.Component {

  componentDidMount() {
    this.props.getUser('sampahcoding');
  }

  render() {
    const { user } = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.one}>
            <Image
              style={styles.circle}
              borderRadius={50}
              source={ this.props.loading == true ?  DEFAULT.LOADER : {uri: user.avatar_url} }
            />
          </View>
          <View style={styles.three}>
            <Text style={styles.h1}>{user.name}</Text>
            <Text style={styles.gap}>Software Developer</Text>
            <Button
              title="Press"
              color={COLOR.BG_BLUE}
              onPress={() => this.props.navigation.navigate('RegistrationForm')}
            />
          </View>
        </View>
        <RepoList />
      </View>
    );
  }
}

const mapStateUserToProps = state => {
  let storedUser = state.userRepos.user;
  return {
    user: storedUser,
    loading: state.userRepos.loading
  };
};

const mapDispatchUserToProps = {
  getUser
};
export default connect(mapStateUserToProps, mapDispatchUserToProps)(MainPage);
