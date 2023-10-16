import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { initializeSparePartNames } from "./service/sparePartNamesActions";
import { initialSparePartNames } from "../components/service/sparePartNames";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

store.dispatch(initializeSparePartNames(initialSparePartNames));

export default store;
