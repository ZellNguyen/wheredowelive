import React, { Component } from 'react';
import { Card, CardItem, Header, Thumbnail, Text, Left, Body, List, ListItem } from 'native-base';
import { Image, View, StyleSheet } from 'react-native';

class FeedCell extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Card style={style.card}>
        <CardItem>
          <Thumbnail small source={{uri: this.props.profilePic}} style={style.thumbnail}/>
          <Body>
            <Text style={style.text}>{this.props.name}</Text>
            <Text style={[style.text, {color: '#444'}]}>{this.props.date}</Text>
          </Body>
        </CardItem>
        <CardItem cardBody style={style.cardBody}>
          <Text numberOfLines={5} style={style.content}>{this.props.content}</Text>
        </CardItem>
        <CardItem>
          <Image source={{uri: 'http://via.placeholder.com/300'}} style={{height: 100, width: null, flex: 1}}/>
          <Image source={{uri: 'http://via.placeholder.com/300'}} style={{height: 100, width: null, flex: 1}}/>
          <Image source={{uri: 'http://via.placeholder.com/300'}} style={{height: 100, width: null, flex: 1}}/>
        </CardItem>
      </Card>
    );
  }
}

const style = StyleSheet.create({
  card: {
    padding: 5,
  },
  thumbnail: {
    marginRight: 10,
  }, 
  cardBody: {
    padding: 10
  },
  text: {
    marginVertical: 4,
    fontSize: 14,
  },
  content: {
    fontSize: 14,
  }
})


export default FeedCell;