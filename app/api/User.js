import call from "./call";
import GlobalState from "../services/GlobalState";
// import { AsyncStorage } from "react-native";
// import { extendObservable } from "mobx";
// import jwtDecode from "jwt-decode";

class UserApi {

  // _setUserToken(result) {
  //   console.log("set user token", result);
  //   GlobalState.model.userToken = result.token;
  //   GlobalState.model.userTokenData = jwtDecode(result.token);
  //   AsyncStorage.setItem('@PASettings:authToken', result.token);
  //   return this.getUser()
  // }
  //
  // signUp(credentials) {
  //   return call('/user/create', "POST", credentials)
  //     .then(this._setUserToken.bind(this));
  // }
  //
  // login(credentials) {
  //   return call('/user/login', "POST", credentials)
  //     .then(this._setUserToken.bind(this));
  // }
  //
  // getUser() {
  //   return call('/user/current', "GET")
  //     .then(user => {
  //       extendObservable(GlobalState.model, { user: user });
  //       return Promise.resolve({});
  //     })
  // }
  //
  // update() {
  //   return call('/user/update', "PUT", GlobalState.model.user)
  //     .then(user => {
  //       extendObservable(GlobalState.model, { user: user });
  //       return Promise.resolve({});
  //     })
  // }

  addCard(card) {
    return call('/user/stripe', "POST", card);
  }

}

export default new UserApi;