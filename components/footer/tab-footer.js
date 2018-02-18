import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonStyle from '../../styles/common-style';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

class TabFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            onPress={()=>{ selectTab('feed')}}>
            <Ionicons name='md-planet' size={20} color='#D93034'/>
            <Text style={CommonStyle.buttonText}>Community</Text>
          </Button>
          <Button>
            <EntypoIcon name='circle-with-plus' size={50} color='#D93034' style={{marginBottom: 25}}/>
          </Button>
          <Button
            onPress={()=>{ selectTab('map')}}>
            <FeatherIcon name='map-pin' size={20} color='#AAAAAA'/>
            <Text style={CommonStyle.buttonText}>Explore</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const selectTab = (title) => {
  Actions.jump(title);
}
export default TabFooter;