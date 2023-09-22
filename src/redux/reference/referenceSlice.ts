import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ReferenceState {
  activeReference: string | null;
}

const initialState: ReferenceState = {
  activeReference: "first",
};

const referenceSlice = createSlice({
  name: "referenceActive",
  initialState,
  reducers: {
    setActiveReference: (state, action: PayloadAction<string>) => {
      state.activeReference = action.payload;
    },
  },
});

export const { setActiveReference } = referenceSlice.actions;

export default referenceSlice.reducer;
