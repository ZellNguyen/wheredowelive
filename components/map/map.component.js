import React, { Component } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'native-base';
import { MapView } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <View style={style.view}>
        <MapView
          style={{ flex: 1, width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapView.Marker
            coordinate={{latitude: 37.7552, longitude: 122.4528}}
          >
          <MaterialCommunityIcons name="map-marker" size={30}/>
          </MapView.Marker>
        </MapView>
        <Button rounded style={{
        flexDirection: 'column',  
        opacity: 0.8, 
        backgroundColor: '#CCC', 
        height: 60, 
        width: 200,
        position: 'absolute', 
        top: 10,
        right: 10}}>
          <Text style={{paddingVertical: 2}}>Mina Vargas</Text>
          
          <Text style={{paddingVertical: 2}}>Points: 850</Text>
        </Button>

        <Button style={[style.button, { backgroundColor: '#DDD', position: 'absolute', bottom: 10, right: 10}]}>
          <MaterialCommunityIcons name="crosshairs-gps" size={30} style={style.icon}/>
        </Button>
      </View>
    );
  }
}

const style = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
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

export default Explore;