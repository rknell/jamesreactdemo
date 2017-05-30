import React, {Component} from "react";
import {Picker, TextInput, View} from "react-native";
import {observer} from "mobx-react/native";
import {observable} from "mobx";
import TextDirective from "../components/TextDirective";
import DemoButton from "../components/DemoButton";
import GlobalState from "../services/GlobalState";
import api from "../api";

@observer
export default class Home extends Component {

  @observable model = {
    fieldLabel: "Field Label",
    pickerSelected: null,
  };

  constructor(props) {
    super(props);
  }

  aFunc(label) {
    this.model.fieldLabel = `${label} - (${new Date().toDateString()})`;
    // api.user.create(this.model)
    //   .then((result)=>{
    //     console.log(result);
    //   })
  }

  buttonStuff = [
    "James",
    "Ryan",
    "Willow"
  ];

  render() {
    return (
      <View style={{flex: 1, backgroundColor: "lightgrey", justifyContent: "space-around", padding: 20, marginTop: 40}}>
        <TextDirective label={this.model.fieldLabel}/>

        <Picker
          selectedValue={this.model.pickerSelected}
          onValueChange={(lang) => {
            console.log(lang);
            this.model.pickerSelected = lang
          }}>
          <Picker.Item label="Java" value="java"/>
          <Picker.Item label="JavaScript" value="js"/>
        </Picker>


        <TextInput style={{alignSelf: "stretch", height: 50, backgroundColor: "lightblue"}}
                   value={GlobalState.model.textInput}
                   onChangeText={(text) => GlobalState.model.textInput = text}
        />


        <DemoButton onPress={() => this.aFunc("Function works")}>
          {this.buttonStuff.map((item, index)=>{
            if(item === "Ryan" || item === "Willow"){
              return <TextDirective key={index} label={item}/>
            } else {
              return null;
            }
          })}
        </DemoButton>
      </View>
    )
  }
}
