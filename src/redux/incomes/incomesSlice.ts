import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IncomesState {
  selectedTable: string | null;
}

const initialState: IncomesState = {
  selectedTable: "first",
};

const incomesSlice = createSlice({
  name: "incomes",
  initialState,
  reducers: {
    selectTable: (state, action: PayloadAction<string>) => {
      state.selectedTable = action.payload;
    },
  },
});

export const { selectTable } = incomesSlice.actions;
export default incomesSlice.reducer;
