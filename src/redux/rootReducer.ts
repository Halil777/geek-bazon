import { combineReducers } from "redux";
import autoPartsReducer from "./catalog/autoPartsSlice";
import catalogReducer from "./catalog/catalogSlice";
import clientsTablesReducer from "./clients/clientTablesSlice";
import activeSalesComponentReducer from "./sales/salesActiveButtonSlice";
import referenceReducer from "./reference/referenceSlice";

const rootReducer = combineReducers({
  autoParts: autoPartsReducer,
  catalog: catalogReducer,
  clientsTables: clientsTablesReducer,
  salesActiveButton: activeSalesComponentReducer,
  referenceActive: referenceReducer,
});

export default rootReducer;
