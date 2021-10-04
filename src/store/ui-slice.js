import { createSlice } from "@reduxjs/toolkit";

const THEMES = {
  LIGHT: 0,
  DARK: 1,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme_id: THEMES.LIGHT,
  },
  reducers: {
    themeToggled(state, action) {
      const current = state.theme_id;
      if (current === THEMES.LIGHT) {
        console.log("toggled");
        state.theme_id = THEMES.DARK;
      } else {
        state.theme_id = THEMES.LIGHT;
      }
    },
    themeSet(state, action) {
      const selected = action.payload;
      if (Object.values(THEMES).includes(selected)) {
        state.theme_id = selected;
      } else {
        state.theme_id = THEMES.LIGHT;
      }
    },
  },
});

export { THEMES };
export const uiActions = uiSlice.actions;

export default uiSlice;
