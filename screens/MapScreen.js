import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as Actions from '../models/actions'

export class MapScreen extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
  }

  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <MapView
        region={ this.props.coordinates }
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
