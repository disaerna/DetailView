import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Work extends Component {
  render() {
    const info = this.props.data;
    return (
      <View style={styles.container}>
       {Object.values(info).map(x => {
           return <Text key={x}>{x}</Text>
       })}
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     alignItems: 'center',
    }
   })