// autoPartsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../rootReducer";

interface AutoPart {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface AutoPartsState {
  data: AutoPart[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AutoPartsState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchAutoParts = createAsyncThunk(
  "autoParts/fetchData",
  async () => {
    const response = await axios.get<AutoPart[]>(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return response.data;
  }
);

const autoPartsSlice = createSlice({
  name: "autoParts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAutoParts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchAutoParts.fulfilled,
        (state, action: PayloadAction<AutoPart[]>) => {
          state.status = "succeeded";
          state.data = action.payload;
        }
      )
      .addCase(fetchAutoParts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const selectAutoParts = (state: RootState) => state.autoParts;
export default autoPartsSlice.reducer;
