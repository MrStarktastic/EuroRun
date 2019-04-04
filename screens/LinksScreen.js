import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import * as Actions from '../models/actions'

export class LinksScreen extends React.Component {
  constructor(props){
    super(props);
    this.render = this.render.bind(this);
  }


  static navigationOptions = {
    title: 'Links',
  };

  render() {
    console.log("this.props.coordinates");
    console.log(this.props.coordinates);
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
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
