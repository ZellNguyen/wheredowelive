import React, { Component } from 'react';
import { Header, Body, Title, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Header searchBar rounded>
        <FeatherIcon name="user" size={20} style={{padding: 10, marginTop: 2}}/>
        <Item style={{padding: 10}}>
          <Ionicons size={20} name="md-search"/>
          <Input placeholder="Search" />
        </Item>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  header: state.updateHeader,
});

export default connect(mapStateToProps)(SearchHeader);