import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as Actions from '../models/actions'

export class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
  }

  static navigationOptions = {

    title: 'Map',
  };

  render() {
    console.log(this.props.coordinates);
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

export const mapStateToProps = (state) => {
  return {
   coordinates : state.coordinates
  }
};

export const mapDipatchToProps = (dispatch) => {
  return {
    FetchAllCoordinates : () => dispatch(Actions.FetchAllCoordinates())
  }
};
