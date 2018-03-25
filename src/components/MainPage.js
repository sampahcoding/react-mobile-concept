import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { width } from 'react-native-dimension';
import styles from '../styles/style-landing';

import { connect } from 'react-redux';
import { getUser } from '../reducers/userRepos';

class MainPage extends React.Component {
  componentDidMount() {
    this.props.getUser('sampahcoding');
  }

  render() {
    const { user } = this.props;
    //const { loading } = this.props.loading;
    return (
      <View style={styles.container}>
        <View style={styles.half}>
          <Image
              style={{height: 180}}
              width= {width(40)}
              source={{uri: user.avatar_url }}
          />
        </View>
        <View style={styles.half}>
          <Text style={styles.h1}>{user.name}</Text>
          <Text>Software Developer</Text>
        </View>
      </View>
    );
  }
}

const mapStateUserToProps = state => {
  let storedUser = state.userRepos.user || { avatar_url: "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg" };
  return {
    user: storedUser,
    loading: state.userRepos.loading || true
  };
};

const mapDispatchUserToProps = {
  getUser
};
export default connect(mapStateUserToProps, mapDispatchUserToProps)(MainPage);
