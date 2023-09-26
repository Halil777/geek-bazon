import { combineReducers } from "redux";
import autoPartsReducer from "./catalog/autoPartsSlice";
import catalogReducer from "./catalog/catalogSlice";
import clientsTablesReducer from "./clients/clientTablesSlice";
import activeSalesComponentReducer from "./sales/salesActiveButtonSlice";
import referenceReducer from "./reference/referenceSlice";
import settingsReducer from "./catalog/settingsSlice";
import columnsReducer from "./catalog/columnsSlice";
import sliceReducer from "./incomes/incomesSlice";
import componentsReducer from "./incomes/componentsSlice";
import incomesSidebarReducer from "./incomes/incomesSidebarSlice";

const rootReducer = combineReducers({
  autoParts: autoPartsReducer,
  catalog: catalogReducer,
  clientsTables: clientsTablesReducer,
  salesActiveButton: activeSalesComponentReducer,
  referenceActive: referenceReducer,
  settings: settingsReducer,
  columns: columnsReducer,
  incomes: sliceReducer,
  components: componentsReducer,
  incomesSidebar: incomesSidebarReducer,
});

export default rootReducer;
