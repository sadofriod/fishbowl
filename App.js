/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './main';
import Login from './app/login/login'
import {
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class App extends Component {
  render() {
    return (
      <TotalNav/>
    )
  }
}
const TotalNav = StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main }
})

