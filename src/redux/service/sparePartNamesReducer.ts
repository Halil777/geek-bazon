import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  addSparePartName,
  initializeSparePartNames,
} from "./sparePartNamesActions";

interface SparePartNamesState {
  names: string[];
}

const initialState: SparePartNamesState = {
  names: [],
};

const sparePartNamesReducer = createReducer(initialState, {
  [initializeSparePartNames.type]: (state, action: PayloadAction<string[]>) => {
    state.names = action.payload;
  },
  [addSparePartName.type]: (state, action: PayloadAction<string>) => {
    state.names.push(action.payload);
  },
});

export default sparePartNamesReducer;
