import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import * as Actions from '../models/actions';
import { NavigationEvents } from 'react-navigation';

export class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <MapView
        region={ this.props.baseCoordinates }
        style={ styles.map }>
        <Marker
          coordinate={ this.props.frenchEmbassyCoordinates }
          title={ 'French Embassy' }
          onCalloutPress={ () => console.log('Callout pressed!') }
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: { flex: 1 },
});

export const mapStateToProps = (state) => {
  return {
   baseCoordinates: state.baseCoordinates,
   frenchEmbassyCoordinates: state.frenchEmbassyCoordinates
  }
};

export const mapDispatchToProps = (dispatch) => {
  return {
    FetchAllCoordinates: () => dispatch(Actions.FetchAllCoordinates())
  }
};
