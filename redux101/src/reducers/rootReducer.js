import { combineReducers } from "redux";
import frozenReducer from "./frozen";

const rootreducer = combineReducers({
  frozen: frozenReducer,
});
export default rootreducer;
