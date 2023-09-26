import { createSlice } from "@reduxjs/toolkit";

interface IncomesSidebarState {
  isOpen: boolean;
}

const initialState: IncomesSidebarState = {
  isOpen: true, // Initially open
};

const incomesSidebarSlice = createSlice({
  name: "incomesSidebar",
  initialState,
  reducers: {
    openIncomesSidebar: (state) => {
      state.isOpen = true;
    },
    closeIncomesSidebar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openIncomesSidebar, closeIncomesSidebar } =
  incomesSidebarSlice.actions;

export default incomesSidebarSlice.reducer;
