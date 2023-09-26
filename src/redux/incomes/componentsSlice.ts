import { createSlice } from "@reduxjs/toolkit";

interface ComponentsState {
  createIncomesOpen: boolean;
}

const initialState: ComponentsState = {
  createIncomesOpen: false,
};

const componentsSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    openCreateIncomes: (state) => {
      state.createIncomesOpen = true;
    },
    closeCreateIncomes: (state) => {
      state.createIncomesOpen = false;
    },
  },
});

export const { openCreateIncomes, closeCreateIncomes } =
  componentsSlice.actions;

export default componentsSlice.reducer;
