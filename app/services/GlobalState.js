import {extendObservable, observable} from "mobx";

class GlobalState {
  @observable model = {
    textInput: "James Global State"
  };

}

export default new GlobalState();