import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ColumnState {
  showImageColumn: boolean;
  showCrossNumberColumn: boolean;
  // Add other column state variables as needed
}

const initialState: ColumnState = {
  showImageColumn: true,
  showCrossNumberColumn: true,
  // Initialize other column state variables
};

const columnsSlice = createSlice({
  name: "columns",
  initialState,
  reducers: {
    setShowImageColumn: (state, action: PayloadAction<boolean>) => {
      state.showImageColumn = action.payload;
    },
    setShowCrossNumberColumn: (state, action: PayloadAction<boolean>) => {
      state.showCrossNumberColumn = action.payload;
    },
  },
});

export const { setShowImageColumn, setShowCrossNumberColumn } =
  columnsSlice.actions;

export default columnsSlice.reducer;
