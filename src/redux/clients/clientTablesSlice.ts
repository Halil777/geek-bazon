import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClientsState {
  selectedClientsTable: string | null;
}

const initialState: ClientsState = {
  selectedClientsTable: "first",
};

const clientsTablesSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    selectTable: (state, action: PayloadAction<string>) => {
      state.selectedClientsTable = action.payload;
    },
  },
});

export const { selectTable } = clientsTablesSlice.actions;
export default clientsTablesSlice.reducer;
