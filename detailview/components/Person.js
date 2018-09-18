import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  Animated,
  Easing,
} from 'react-native';
import data from '../data-1.json';
import Home from './Home';
import Work from './Work';

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '60%',
  },
  avatar: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#E81274',
    borderRadius: 10,
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    color: '#000000',
    fontSize: 20,
  },
  button: {
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E81274',
  },
  buttonText: {
    padding: 20,
    color: '#000000',
    fontSize: 16,
  },
});

export default class Person extends Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.4);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      ButtonText: 'Show work info',
      DisplayHome: true,
    };
  }

  componentDidMount = () => {
    this.spring();
    this.animate();
  }

  spring = () => {
    this.springValue.setValue(0.4);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 0.8,
      },
    ).start();
  }

  animate = () => {
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      },
    ).start();
  }

  buttonPressed = () => {
    this.animate();
    this.spring();
    const DisplayHome = this.state;
    if (DisplayHome) {
      this.setState({ ButtonText: 'Show home info', DisplayHome: false });
    } else {
      this.setState({ ButtonText: 'Show work info', DisplayHome: true });
    }
  }

  render() {
    const obj = data[0];
    const { first_name: firstName, last_name: lastName } = obj.name;
    const { avatar, home, work } = obj;
    const { ButtonText, DisplayHome } = this.state;
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    });


    return (
      <View>
        <View style={styles.upperContainer}>
          <Animated.View style={{ transform: [{ scale: this.springValue }] }}>
            <Image
              style={styles.avatar}
              source={{
                uri: avatar,
              }}
            />

          </Animated.View>
          <Text style={styles.name}>
            {firstName}
            {' '}
            {lastName}
          </Text>
          <TouchableHighlight onPress={this.buttonPressed} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>{ButtonText}</Text>
            </View>
          </TouchableHighlight>

        </View>
        <Animated.View style={{ opacity, height: '40%' }}>

          {DisplayHome
            ? <Home data={home} />
            : <Work data={work} />}
        </Animated.View>
      </View>
    );
  }
}
