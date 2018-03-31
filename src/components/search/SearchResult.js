import React, { PureComponent } from 'react';
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

class SearchResult extends PureComponent {
  constructor(props) {
   super(props);
   this.state = {
     init: 0,
     params: {
       q: '',
       page: 1,
       infinite: false
     }
   };
 }

  componentDidMount() {
    this.props.listPhotos(this.state.params);
  }

  _searchFor = (e) => {
    this.state.init = 0
    this.state.params.infinite = false
    this.props.listPhotos(this.state.params);
  }

  _handleLoadMore = (e) => {
    if (this.props.loading == false && this.props.photos.length > 0 && this.state.init%2 ) {
      this.state.params.infinite = true
      this.state.params.page = this.state.params.page + 1
      this.props.listPhotos(this.state.params);
    }
    this.state.init = this.state.init + 1
  }

  scrollToIndex = () => {
    this.flatListRef.scrollToIndex({animated: true, index: 0});
  }

  renderItem = ({ item }) => (
    <View style={{...styles.item, width: gridItem + 30}} key={item.id}>
      <View style={{minHeight: 230}}>
        <TouchableHighlight
          underlayColor={COLOR.WHITE}
          activeOpacity={2}
          style={styles.item_touch}
          onPress={() => this.props.navigation.navigate('SearchDetail')}
        >
          <AutoHeightImage
            style={styles.item_image}
            borderRadius={1}
            width= {gridItem}
            source={{uri: `https://picsum.photos/200/300/?image=${item.id}`}}
          />
        </TouchableHighlight>
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
    var result = this.props.loading == true && this.state.init == 0 ?
                  <View style={styles.loader_wrapper}>
                    <Image source={ DEFAULT.LOADER } />
                  </View> :
                  <FlatList
                    data={photos}
                    numColumns= '2'
                    renderItem={this.renderItem}
                    onEndReached={_ => this._handleLoadMore()}
                    onEndReachedThreshold={1}
                    ListEmptyComponent={not_found}
                    bounces={false}
                    initialNumToRender={10}
                    initialScrollIndex={0}
                    ref={(ref) => { this.flatListRef = ref; }}
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
            onChangeText={(q) => this.setState({ params: {q: q} })}
            value={this.state.params.q}
            placeholderTextColor={COLOR.BLUE}
            placeholder='Search..'
          />
        </View>
        <View style={{...styles.result_wrapper, height: result_height}}>
          {result}
        </View>
        <TouchableHighlight onPress={this.scrollToIndex} style={styles.cursor_up}>
          <Icon name="arrow-up"  size={30} color={COLOR.BLUE} />
        </TouchableHighlight>
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
