import { combineReducers } from "redux";
import autoPartsReducer from "./catalog/autoPartsSlice";
import catalogReducer from "./catalog/catalogSlice";

const rootReducer = combineReducers({
  autoParts: autoPartsReducer,
  catalog: catalogReducer,
});

export default rootReducer;
