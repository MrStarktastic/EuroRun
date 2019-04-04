
import { connect } from 'react-redux';


import * as LinkScreen from '../screens/LinksScreen'
export const LinkScreenWrapper = connect(
    LinkScreen.mapStateToProps,
    LinkScreen.mapDipatchToProps
)(LinkScreen.LinksScreen);