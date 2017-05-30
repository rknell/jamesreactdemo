import React, {Component} from "react";
import {StyleSheet, View, TouchableOpacity} from "react-native";
import {observable} from "mobx";

export default class DemoButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{padding: 5, backgroundColor: "orange"}}>{this.props.children}</View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({});