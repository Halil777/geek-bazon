import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAutoParts = createAsyncThunk(
  "autoParts/fetchData",
  async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const autoPartsSlice = createSlice({
  name: "autoParts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAutoParts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAutoParts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAutoParts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAutoParts = (state) => state.autoParts;
export default autoPartsSlice.reducer;
