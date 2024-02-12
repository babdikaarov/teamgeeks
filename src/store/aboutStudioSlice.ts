import { createSlice } from "@reduxjs/toolkit";
import { getCoolStudio } from "./aboutStudioThunk.ts";

const initialState: Slice.CoolStudio = {
   data: {
      id: 0,
      image: "string",
      orientation: "PORTRAIT",
      bluer: "string",
      youtubeUrl: "string",
   },
   getLoading: false,
};

const coolStudio = createSlice({
   name: "coolStudio",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getCoolStudio.pending, (state) => {
         state.getLoading = true;
      });
      builder.addCase(getCoolStudio.fulfilled, (state, { payload }) => {
         state.getLoading = false;
         state.data = payload;
      });
      builder.addCase(getCoolStudio.rejected, (state) => {
         state.getLoading = false;
      });
   },
});

export const reducersCoolStudio = coolStudio.reducer;
export const selectCoolStudio = (state: { coolStudio: Slice.CoolStudio }) => state.coolStudio;
export const selectCoolStudioData = (state: { coolStudio: Slice.CoolStudio }) => state.coolStudio.data;
