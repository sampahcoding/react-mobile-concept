import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default class DefaultView extends React.Component {

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#47aee6'}}>
        <Text style={{color: '#ffffff', fontSize: 18}}>Lorem ipsum...</Text>
      </View>
    );
  }
}
