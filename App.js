import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import configureStore from './redux/configure-store';
import { Provider, connect } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Container, Content, Header } from 'native-base';
import SearchHeader from './components/header/search-header';
import TabFooter from './components/footer/tab-footer';
import Feed from './components/feed/feed.component';
import Explore from './components/map/map.component';

const store = configureStore();

const RouterWithRedux = connect()(Router);

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="feed" component={Feed} title="Feed" hideNavBar></Scene>
    <Scene key="map" component={Explore} title="Map" hideNavBar></Scene>
  </Scene>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <SearchHeader/>
            <RouterWithRedux scenes={Scenes} />
          <TabFooter/>
        </Container>
      </Provider>
    );
  }
}
