import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export class PlaceScreen extends React.Component {
  render() {
    return (
      <View>
          <Image
            source={require('../assets/images/french-embassy.jpg')}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
