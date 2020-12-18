import {combineReducers} from "redux";
import {statesReducer} from "./editor";

export const rootReducer = combineReducers({
	states: statesReducer
});
