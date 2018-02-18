import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Content, Button, Text } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class FeedHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <View style={style.view}>
        <View style={style.childView}>
          <Button style={[style.button, { backgroundColor: '#86B0DE'}]}>
            <MaterialIcon name="business-center" size={40} style={style.icon}/>
          </Button>
          <Text style={style.text}>Opportunity</Text>
        </View>
        <View style={style.childView}>
          <Button style={[style.button, { backgroundColor: '#F5CE77'}]}>
            <FontAwesomeIcon name="group" size={30} style={style.icon}/>
          </Button>
          <Text style={style.text}>Gathering</Text>
        </View>
        <View style={style.childView}>
          <Button style={[style.button, { backgroundColor: '#A6C488'}]}>
            <MaterialIcon name="record-voice-over" size={40} style={style.icon}/>
          </Button>
          <Text style={style.text}>Story</Text>
        </View>
        <View style={style.childView}>
          <Button style={[style.button, { backgroundColor: '#E86F5B'}]}>
            <FontAwesomeIcon name="handshake-o" size={30} style={style.icon}/>
          </Button>
          <Text style={style.text}>Help</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  childView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 11,
    marginTop: 5,
  },
  button: {
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    color: '#FFFFFF',
  }
})

export default FeedHeader;