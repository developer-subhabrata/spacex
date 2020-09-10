import spacexReducer from "./spacexReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  spacex: spacexReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
