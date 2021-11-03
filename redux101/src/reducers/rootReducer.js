import { combineReducers } from "redux";
import frozenReducer from "./frozenReducer";
import meatReducer from "./meatReducer";

const rootreducer = combineReducers({
  frozen: frozenReducer,
  meat: meatReducer,
});
export default rootreducer;
