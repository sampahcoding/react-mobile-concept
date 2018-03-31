import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight, TextInput, Dimensions, Image } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { connect } from 'react-redux';
import { listPhotos } from '../../reducers/Photos';
import styles from '../../styles/StyleSearchPhotos';
import * as COLOR from '../../styles/Color';
import Icon from 'react-native-vector-icons/Foundation';
import * as DEFAULT from '../../utils/default';

const {width, height} = Dimensions.get('window')

const gridItem = width/2 - 30

class SearchResult extends Component {
  constructor(props) {
   super(props);
   this.state = {
     q: '',
     page: 1,
     lovedStatus: []
   };
 }

  componentDidMount() {
    this.props.listPhotos(this.state.q);
  }

  _searchFor = (e) => {
    this.props.listPhotos(this.state.q);
  }

  _handleLoadMore = (e) => {
    if (this.props.loading == false) {
      console.log('load more');
    }
  }

  renderItem = ({ item }) => (
    <View style={{...styles.item, width: gridItem + 30}} key={item.id}>
      <View style={{minHeight: 230}}>
        <AutoHeightImage
          style={styles.item_image}
          borderRadius={1}
          width= {gridItem}
          source={{uri: `https://picsum.photos/200/300/?image=${item.id}`}}
        />
        <Text style={styles.no_image}>Image not found</Text>
      </View>
      <Text style={styles.item_ico_wrapper}>
        <Icon name="heart" size={35} color={COLOR.BG_BLUE}/>
        <Text style={styles.item_ico_text}>           </Text>
        <Icon name="bookmark" size={35} color={COLOR.BG_BLUE}/>
        <Text style={styles.item_ico_text}>           </Text>
        <Icon name="download" size={35} color={COLOR.BG_BLUE}/>
        <Text style={styles.item_ico_text}></Text>
      </Text>
      <Text style={styles.item_desc}>{item.title ? item.title : '-' }</Text>
    </View>
  );

  render() {
    const { photos } = this.props;
    var not_found = <Text style={{...styles.not_found, height: height - 100 }}>Search not found..</Text>
    var result = this.props.loading == true ?
                  <View style={styles.loader_wrapper}>
                    <Image source={ DEFAULT.LOADER } />
                  </View> :
                  <FlatList
                    data={photos}
                    numColumns= '2'
                    renderItem={this.renderItem}
                    onEndReached={this._handleLoadMore()}
                    onEndReachedThreshold={10}
                    ListEmptyComponent={not_found}
                  />;
    var result_height = this.props.loading == true ? height : 'auto'

    return (
      <View style={styles.container}>
        <View style={styles.search_form}>
          <TextInput
            style={styles.search_input}
            autoCorrect={false}
            underlineColorAndroid='transparent'
            onBlur={this._searchFor}
            onChangeText={(q) => this.setState({q})}
            value={this.state.q}
            placeholderTextColor={COLOR.BLUE}
            placeholder='Search..'
          />
        </View>
        <View style={{...styles.result_wrapper, height: result_height}}>
          {result}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  let storedPhotos = [];
  if (state.Photos.photos.length > 0) {
    storedPhotos = state.Photos.photos.map(photo => ({ key: photo.id, ...photo }));
  }

  return {
    photos: storedPhotos,
    loading: state.Photos.loading
  };
};

const mapDispatchToProps = {
  listPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
