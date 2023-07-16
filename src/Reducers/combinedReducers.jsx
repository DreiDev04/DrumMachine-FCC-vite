import isBank from "./isBank";
import isOn from "./isOn";
import preview from "./previewReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isBank,
  isOn,
  preview,

});

export default rootReducer;

