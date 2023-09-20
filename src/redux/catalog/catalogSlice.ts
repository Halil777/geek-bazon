import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CatalogState {
  selectedTable: string | null; // Stores the selected table name
}

const initialState: CatalogState = {
  selectedTable: "first",
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    selectTable: (state, action: PayloadAction<string>) => {
      state.selectedTable = action.payload;
    },
  },
});

export const { selectTable } = catalogSlice.actions;
export default catalogSlice.reducer;
