import React, {Component} from "react";
import {Text, View} from "react-native";

export default class TextDirective extends Component {
  render() {
    return (
      <View style={{padding: 20, backgroundColor: "lime"}}>
        <Text>{this.props.label}</Text>
      </View>
    )
  }
}
