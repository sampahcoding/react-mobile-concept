import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from '../reducers/Repos';
import styles from '../styles/style-landing';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('sampahcoding');
  }
  renderItem = ({ item }) => (
    <View style={styles.item} key={item.id}>
      <Text style={styles.heading} onPress={ ()=>{ Linking.openURL(item.html_url)}}>{item.name}</Text>
      <Text style={styles.itemDesc}>{item.description ? item.description : '-' }</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => {
  let storedRepositories = [];
  if (state.Repos.repos.length > 0) {
    storedRepositories = state.Repos.repos.map(repo => ({ key: repo.id, ...repo }));
  }

  return {
    repos: storedRepositories
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
