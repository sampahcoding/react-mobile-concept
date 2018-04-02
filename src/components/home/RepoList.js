import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native';
import { connect } from 'react-redux';

import { listRepos } from 'mobile-insta/src/reducers/ReposReducer';
import styles from 'mobile-insta/src/styles/StyleDefault';

class RepoList extends Component {
  componentDidMount() {
    this.props.listRepos('sampahcoding');
  }
  renderItem = ({ item }) => (
    <View style={styles.item} key={item.id}>
      <Text style={styles.heading} onPress={ ()=>{ Linking.openURL(item.html_url)}}>{item.name}</Text>
      <Text style={styles.default_text}>{item.description ? item.description : '-' }</Text>
    </View>
  );
  render() {
    const { repos } = this.props;
    return (
      <View style={{marginTop: 20}}>
        <View style={{ ...styles.container, ...styles.repo_heading }}>
          <Text style={{ ...styles.h1, ...styles.item_h1 }}>Repositories</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={repos}
            renderItem={this.renderItem}
          />
        </View>
      </View>
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
