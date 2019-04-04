import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <MapView
        region={{
          latitude: 32.109333,
          longitude: 34.855499,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005
        }}
        style={ styles.map }
      />
    );
  }
}

const styles = StyleSheet.create({
  map: { flex: 1 },
});
