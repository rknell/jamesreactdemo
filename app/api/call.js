import { Alert } from "react-native";
import GlobalState from "../services/GlobalState";
// import Login from "../pages/Login";
import React from "react";

export default function call(endpoint, method = "GET", body, ignoreError) {

  return new Promise((resolve, reject) => {

    if (body) {
      body = JSON.stringify(body);
    }

    let response;

    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      pushToken: JSON.stringify(GlobalState.model.pushToken)
    };

    if (GlobalState.model.userToken) {
      headers['Authorization'] = 'bearer ' + GlobalState.model.userToken
    }
    console.log("Calling!", GlobalState.apiPath + endpoint, method, body, headers);
    fetch(GlobalState.apiPath + endpoint, {
      method,
      headers: headers,
      body: body
    })
      .then((_response) => {
        response = _response;
        return response.json();
      })
      .then((responseJson) => {
        if (response.ok) {
          console.log("SUCCESS", endpoint, method, responseJson);
          resolve(responseJson);
        } else {
          console.log("ERROR!", endpoint, method, response);
          response.body = responseJson;

          if (response.status === 401) {
            // GlobalState.navigation.resetTo({ view: <Login /> });
            console.log("401 return to login screen");
          } else {
            //Using a timeout because mobx has a problem with sync with the system alert.
            if (!ignoreError) {
              setTimeout(() => {
                if (response.body.message) {
                  Alert.alert("Error", response.body.message)
                } else {
                  Alert.alert("Error", "An unknown server error occurred")
                }
              }, 1);
            }
          }
          reject(response);
        }
      }).catch(ex => {
        reject(ex);
      })
      .catch((err)=>{
        Alert.alert("Error", "A network error occurred. Check you are online and try again.")
        reject(err);
      });
  })

}