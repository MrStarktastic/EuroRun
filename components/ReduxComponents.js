import { connect } from 'react-redux';


import * as MapScreen from '../screens/MapScreen'
export const MapScreenWrapper = connect(
    MapScreen.mapStateToProps,
    MapScreen.mapDipatchToProps
)(MapScreen.MapScreen);