import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ServiceState {
  activeComponent: string | null;
}

const initialState: ServiceState = {
  activeComponent: "component1",
};

const serviceActiveComponentSlice = createSlice({
  name: "serviceActiveComponent",
  initialState,
  reducers: {
    setActiveComponent: (state, action: PayloadAction<string>) => {
      state.activeComponent = action.payload;
    },
  },
});

export const { setActiveComponent } = serviceActiveComponentSlice.actions;

export default serviceActiveComponentSlice.reducer;
