import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Person from './components/Person'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
              <Person />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
