import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SalesState {
  activeComponent: string | null;
}

const initialState: SalesState = {
  activeComponent: "component1",
};

const salesActiveButtonSlice = createSlice({
  name: "salesActiveButton",
  initialState,
  reducers: {
    setActiveComponent: (state, action: PayloadAction<string>) => {
      state.activeComponent = action.payload;
    },
  },
});

export const { setActiveComponent } = salesActiveButtonSlice.actions;

export default salesActiveButtonSlice.reducer;
