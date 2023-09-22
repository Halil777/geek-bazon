import { createSlice } from "@reduxjs/toolkit";

interface SettingsState {
  isModalVisible: boolean;
  // Other settings data...
}

const initialState: SettingsState = {
  isModalVisible: false,
  // Other settings data...
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    showModal: (state) => {
      state.isModalVisible = true;
    },
    hideModal: (state) => {
      state.isModalVisible = false;
    },
    // Other actions to modify settings...
  },
});

export const { showModal, hideModal } = settingsSlice.actions;

export const selectIsModalVisible = (state: { settings: SettingsState }) =>
  state.settings.isModalVisible;

export default settingsSlice.reducer;
