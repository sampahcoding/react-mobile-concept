import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { width } from 'react-native-dimension';
import styles from './styles/style-landing';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{key: 1, image: "https://img-9gag-fun.9cache.com/photo/avOon1W_460swp_v3.webp", title: "Start it now"},
                {key: 2, image: "https://img-9gag-fun.9cache.com/photo/agX5XXq_460s.jpg", title: "Stop that now"},
                {key: 3, image: "https://img-9gag-fun.9cache.com/photo/aR30A22_460s.jpg", title: "Don't make a mess in the head"}]}
          renderItem={({item}) =>
              <View key={item.key} style={styles.list}>
                <Text style={styles.heading} >{item.title}</Text>
                <AutoHeightImage
                    style={styles.image}
                    width= {width(100)}
                    source={{uri: item.image}}
                />
              </View>
          }
          />
      </View>
    );
  }
}
