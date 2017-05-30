/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View} from 'react-native';
import Home from "./app/pages/Home";


export default class jamesReact extends Component {
  jamesTest = "james test";

  imafunction(){
    return "james test function"
  }

  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('jamesReact', () => jamesReact);
