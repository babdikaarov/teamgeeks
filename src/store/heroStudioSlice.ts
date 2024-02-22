import { createSlice } from "@reduxjs/toolkit";
import { getHeroStudio } from "./thunkCollection.ts";

const initialState: Slice.IHeroStudio = {
   data: {
      id: 0,
      video: "",
      title: "",
      text: "",
      orientation: "",
   },
   getLoading: false,
};

const heroStudio = createSlice({
   name: "heroStudio",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getHeroStudio.fulfilled, (state, { payload }) => {
         state.getLoading = true;
         state.data = payload;
      });
      builder.addCase(getHeroStudio.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersHeroStudio = heroStudio.reducer;
