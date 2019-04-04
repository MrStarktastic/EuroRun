import { connect } from 'react-redux';

import * as MapScreenCls from '../screens/MapScreen'
export const MapScreenWrapper = connect(
    MapScreenCls.mapStateToProps,
    MapScreenCls.mapDispatchToProps
)(MapScreenCls.MapScreen);
