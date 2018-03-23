import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
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
    return (
      <View>
        <Text style={styles.h1}>{user.name}</Text>
        <AutoHeightImage
            style={styles.image}
            width= {width(100)}
            source={{uri: user.avatar_url }}
        />
      </View>
    );
  }
}

const mapStateUserToProps = state => {
  let storedUser = state.userRepos.user || { avatar_url: "https://img-9gag-fun.9cache.com/photo/agX5XXq_460s.jpg" };
  return {
    user: storedUser
  };
};

const mapDispatchUserToProps = {
  getUser
};
export default connect(mapStateUserToProps, mapDispatchUserToProps)(MainPage);
