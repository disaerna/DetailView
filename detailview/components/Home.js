import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',

  },
});

export default class Home extends Component {
  render() {
    const data = this.props;
    return (
      <View style={styles.container}>
        {Object
          .values(data)
          .map(x => (
            <Text style={styles.container} key={x}>
              {x}
            </Text>
          ))}
      </View>
    );
  }
}
